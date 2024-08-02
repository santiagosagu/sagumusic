import { http } from "msw";
import { loginMock } from "../page/login/mocks/login";
import { dataAlbums } from "../modules/dashboard/mocks/dataAlbums";
import { dataSingles } from "../modules/dashboard/mocks/dataSingles";
import { dataTopFiveSongs } from "../modules/dashboard/mocks/dataTopFiveSongs";
import { dataFeaturedArtists } from "../modules/dashboard/mocks/dataFeaturedArtists";

export const handlers = [
  http.get(`${import.meta.env.VITE_BACKEND_URL}/main-albums`, dataAlbums),
  http.get(`${import.meta.env.VITE_BACKEND_URL}/main-singles`, dataSingles),
  http.get(
    `${import.meta.env.VITE_BACKEND_URL}/top-five-songs`,
    dataTopFiveSongs
  ),
  http.get(
    `${import.meta.env.VITE_BACKEND_URL}/featured-artists`,
    dataFeaturedArtists
  ),

  http.post(`${import.meta.env.VITE_BACKEND_URL}/login`, loginMock),
];
