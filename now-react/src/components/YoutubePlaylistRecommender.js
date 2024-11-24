import React, { useState } from "react";
import Iframe from "../atom/Iframe";
import { useParams } from "react-router-dom";

export const YoutubePlaylistRecommender = () => {
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);
  const { mood, emotion } = useParams();
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const searchQuery = `${mood}+${emotion}+playlist`;

  const fetchRandomPlaylist = async () => {
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}&type=video`;
    setError(null);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const randomPlaylist = data.items[randomIndex];
        setPlaylist(randomPlaylist);
      } else {
        setError("No playlists found!");
      }
    } catch (error) {
      setError("Failed to fetch playlists.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h3>
        {mood} + {emotion}
      </h3>
      <button
        className="btn"
        style={{ marginBottom: "2em" }}
        onClick={fetchRandomPlaylist}
      >
        지금 들으면 좋을 음악은?
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {playlist && (
        <div>
          <Iframe
            url={`https://www.youtube.com/embed/${playlist.id.videoId}`}
          />
        </div>
      )}
    </div>
  );
};
