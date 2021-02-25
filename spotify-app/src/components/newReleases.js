import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Player from "./player"

const NewReleases = () => {
  const token = useSelector((state) => state.tokenReducer)
  const endpoint = "https://api.spotify.com/v1/browse/new-releases"
  const [tracks, setTracks] = useState()
  const [player, setPlayer] = useState()
  const [track, setTrack] = useState()

  useEffect(() => {
    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.albums.items)
      })
  }, [])

  const handlePlay = async (id) => {
    setTrack({ id: id, type: "album" })
    setPlayer(true)
  }
  const handleLikeBtn = async (track) => {
    console.log(track)
    const nameOfSong = track.name
    fetch(`https://api.spotify.com/v1/albums/${track.id}/tracks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        data.items.map((item) => {
          if (item.name === nameOfSong)
            fetch(`https://api.spotify.com/v1/me/tracks?ids=${item.id}`, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
              .then(alert("song added"))
              .catch((err) => console.error(err))
        })
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="NewReleases">
      <h1>New Releases (For You)</h1>
      {player && <Player track_infos={track} />}
      {tracks &&
        tracks.map((track) => (
          <div key={track.id} className="track">
            <div className="controls">
              <p>{track.name}</p>
              <button
                onClick={() => {
                  handleLikeBtn(track)
                }}
                className="addToFavorites"
              >
                Like this song
              </button>
            </div>
            <img
              id="albumIMGS"
              onClick={() => handlePlay(track.id)}
              src={track.images[0].url}
              alt="album cover"
            />
          </div>
        ))}
    </div>
  )
}

export default NewReleases
