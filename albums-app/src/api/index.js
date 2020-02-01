import axios from 'axios';


const API_HOST = 'https://rallycoding.herokuapp.com/api/';


export async function getAllAlbums() {
  try {
    const res = await axios.get(`${API_HOST}music_albums`);
    return res.data;
  } catch (err) {
    console.error('@getAllAlbums: ', err.message || err);
    throw err;
  }
}
