import styles from "./assets/search.module.css";
import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Card,
  Row,
  ThemeProvider,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import { Player } from "./Player";
import { AlbumSearchResult } from "./AlbumSearchResult";
import axios from "axios";
import { ThemeContext } from "../App";

export const Search = () => {
  const {
    accessToken,
    albums,
    searchInput,
    setSearchInput,
    playingTrack,
    setPlayingTrack,
    isPlaying,
    search
  } = useContext(ThemeContext);
  function chooseTrack(album) {
    setPlayingTrack(album);
    setSearchInput("");
  }

  console.log(playingTrack);

  return (
    <>
      <div className={styles.Container}>
        <Container>
          <InputGroup className="mb-3" size="lg3">
            <FormControl
              placeholder="Search For Artist"
              type="input"
              onKeyPress={(event) => {
                if (event.key == "Enter") {
                  search();
                }
              }}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button
              onClick={() => {
                console.log("Button");
              }}
            >
              Search
            </Button>
          </InputGroup>
        </Container>

        <Container>
          <Row className="mx-2 row row-cols-5">
            {albums.map((album, index) => {
              return (
                <Link to={`/albums/${album.id}`}>
                  <AlbumSearchResult
                    index={index}
                    album={album}
                    chooseTrack={chooseTrack}
                  />
                </Link>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        <audio src="spotify:album:7e8ZKs0jaBUKF0jHjbs0bD" />
        <Player
          currentTrack={playingTrack}
          isPlaying={isPlaying}
          accessToken={accessToken}
          trackUri={playingTrack?.uri}
        />
      </div>
    </>
  );
};
