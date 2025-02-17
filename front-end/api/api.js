import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";
const URL = "https://spotify-full-stack-hashtag-treinamentos.onrender.com/api"

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data);
// console.log(responseSongs.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
