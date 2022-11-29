import styles from './assets/search.module.css'
import { Container, Button, InputGroup, FormControl, Card, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Player } from './Player';
import { AlbumSearchResult } from './AlbumSearchResult';

export const Search = () => {
    const [searchInput, setSearchInput] = useState("")
    const [accessToken, setAccessToken] = useState("")
    const [playingTrack, setPlayingTrack] = useState()
    const [albums, setAlbums] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const CLIENT_ID = "7989d19bf0fa41c88e1a1acfd7e93c09"
    const CLIENT_SECRET = "78ef5245c2ac4fbfb059f2a375b199a5"

    function chooseTrack(album) {
        setPlayingTrack(album)
        setSearchInput('')
    }

    // console.log(playingTrack)
    useEffect(() => {
        //API Access Token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => {

                setAccessToken(data.access_token)
            })
    }, [])

    //Search
    async function search() {
        console.log("Search For " + searchInput)

        //Get req using search to get Artist ID
        var searchParameters = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + accessToken
            }
        }
        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id })
        console.log("Artist ID id " + artistID)

        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAlbums(data.items);
            })
    }
    console.log(albums)
    return (
        <>
            <div className={styles.Container}>
                <Container>
                    <InputGroup className="mb-3" size="lg3">
                        <FormControl
                            placeholder="Search For Artist"
                            type="input"
                            onKeyPress={event => {
                                if (event.key == "Enter") {
                                    search()
                                }
                            }}
                            onChange={event => setSearchInput(event.target.value)}
                        />
                        <Button onClick={() => {
                            console.log('Button')
                        }}>Search</Button>
                    </InputGroup>
                </Container>

                <Container >
                    <Row className="mx-2 row row-cols-5">
                        {albums.map((album, index) => {
                            return (
                                <AlbumSearchResult index={index} album={album} chooseTrack=
                                    {chooseTrack}
                                />
                            )
                        })}
                    </Row>

                </Container>
            </div>
            <div>
                <Player
                    currentTrack={playingTrack}
                    isPlaying={isPlaying}
                    accessToken={accessToken}
                    trackUri={playingTrack?.uri}
                />
            </div>
        </>
    )
}