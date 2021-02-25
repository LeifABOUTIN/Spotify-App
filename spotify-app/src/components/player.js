const Player = (track) => {
  const id = track.track_infos.id
  const type = track.track_infos.type

  return (
    <div className="player">
      <iframe
        id="spotify_player"
        src={`https://open.spotify.com/embed/${type}/${id}`}
        width="300"
        min-height="100"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}
export default Player
