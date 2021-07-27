import './App.css';
import Welcome from '../src/components/Welcome'
import useFetch from "react-fetch-hook";
import React from "react";



export default function App() {
  const { isLoading, error, data } = useFetch("https://api.artic.edu/api/v1/artworks/129884");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
    <Welcome/>
    
      <p>{data.data.title}</p>
      <img src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/450,/0/default.jpg`}/>
      <p>Description: {data.data.thumbnail.alt_text}</p>
      <p>Artist Title: {data.data.artist_title}</p>
      
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}