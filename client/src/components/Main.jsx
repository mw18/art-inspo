import useFetch from "react-fetch-hook";
import React from "react";

export default function Main() {
    const { isLoading, error, data } = useFetch("https://api.artic.edu/api/v1/artworks/129884");
  
    if (isLoading) return "Loading...";
    if (error) return "Error!";
  
    return (
      <div className="item">
        <h1>{data.data.title}</h1>
        <img src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/450,/0/default.jpg`} alt="gallery img"/>
        <p>Description: {data.data.thumbnail.alt_text}</p>
        <p>Artist: {data.data.artist_title}</p>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  }