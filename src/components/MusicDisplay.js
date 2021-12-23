import React from "react";

const SpotifyTop2021 = () => (
  <iframe
    src="https://open.spotify.com/embed/playlist/4eMdkjzzrjocNO0BnTik8r?utm_source=generator"
    width="100%"
    height="380"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  ></iframe>
);

const SpotifyLikedSongs = () => (
  <iframe
    src="https://open.spotify.com/embed/playlist/2EgM9TiFrMnqYbTPPlu42H?utm_source=generator&theme=0"
    width="100%"
    height="380"
    frameBorder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  ></iframe>
);

const MusicDisplay = () => {
  return (
    <>
      <h1> My 2021 Top Songs</h1>
      <SpotifyTop2021></SpotifyTop2021>
      <h1> List of liked songs</h1>
      <SpotifyLikedSongs></SpotifyLikedSongs>
    </>
  );
};

export default MusicDisplay;
