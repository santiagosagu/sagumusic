import { Typography } from "@mui/material";
import SectionBigImage from "./components/albumesDestacados/SectionBigImage";
import SinglesDestacados from "./components/singlesDestacados/SinglesDestacados";
import ArtistaDestacados from "./components/artistaDestacados/ArtistaDestacados";
import useGetList from "../../api/services/getServices/useGetList";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [dataAlbumsState, setDataAlbumsState] = useState([]);
  const [dataSinglesState, setDataSinglesState] = useState([]);
  const [dataTopFiveSongsState, setDataTopFiveSongsState] = useState([]);
  const [dataFeaturedArtistsState, setDataFeaturedArtistsState] = useState([]);

  const { data: dataResponseAlbum, isLoading: isLoadingResponseAlbum } =
    useGetList({
      key: "albums",
      resource: ["main-albums"],
      keyResults: "mainAlbums",
    });

  const { data: dataResponseSingle, isLoading: isLoadingResponseSingles } =
    useGetList({
      key: "singles",
      resource: ["main-singles"],
      keyResults: "mainSingles",
    });

  const { data: dataTopFiveSongs } = useGetList({
    key: "topFiveSongs",
    resource: ["top-five-songs"],
    keyResults: "topFiveSongs",
  });

  const { data: dataFeaturedArtists } = useGetList({
    key: "dataFeaturedArtists",
    resource: ["featured-artists"],
    keyResults: "featuredArtists",
  });

  useEffect(() => {
    setDataAlbumsState(dataResponseAlbum);
    setDataSinglesState(dataResponseSingle);
    setDataTopFiveSongsState(dataTopFiveSongs);
    setDataFeaturedArtistsState(dataFeaturedArtists);
  }, [
    dataResponseAlbum,
    dataResponseSingle,
    dataTopFiveSongs,
    dataFeaturedArtists,
  ]);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between w-full overflow-y-auto custom-scrollbar">
        <div className="flex flex-col lg:w-1/3">
          <div className="flex flex-1  bg-[#1d2124] justify-center py-4 min-h-16 max-h-16">
            <Typography className="text-white">Albumes Destacados</Typography>
          </div>

          <div className="flex flex-col flex-1 border-[#c8bfae] h-[100%] ">
            <SectionBigImage
              dataResponseAlbum={dataAlbumsState}
              isLoadingResponseAlbum={isLoadingResponseAlbum}
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3">
          <div className="flex flex-1  bg-[#1d2124] justify-center py-4 min-h-16 max-h-16">
            <Typography className="text-white">Singles Destacados </Typography>
          </div>

          <div className="flex flex-col flex-1 border-[#c8bfae]">
            <SinglesDestacados
              dataResponseSingle={dataSinglesState}
              dataTopFiveSongs={dataTopFiveSongsState}
              isLoadingResponseSingles={isLoadingResponseSingles}
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3">
          <div className="flex flex-1  bg-[#1d2124] justify-center py-4 min-h-16 max-h-16">
            <Typography className="text-white">Artistas Destacados</Typography>
          </div>

          <div className="flex flex-col flex-1 rounded-br-2xl mt-4 px-8">
            <ArtistaDestacados dataFeaturedArtists={dataFeaturedArtistsState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
