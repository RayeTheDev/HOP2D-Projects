
import SpotifyPlayer from 'react-spotify-web-playback'

export function Player({ accessToken, trackUri }) {

    if (!accessToken) return null
    return (
        // <SpotifyPlayer
        //     token={accessToken}
        //     showSaveIcon
        //     uris={trackUri ? [trackUri] : []}
        // />

        <SpotifyPlayer
            token="BQAI_7RWPJuqdZxS-I8XzhkUi9RKr8Q8UUNaJAHwWlpIq6..."
            uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        />
    )
}