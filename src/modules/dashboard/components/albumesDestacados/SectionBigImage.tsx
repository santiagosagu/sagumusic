/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../style.css";
import { Skeleton, Typography } from "antd";
import SectionBigImageCardAlbumSmall from "./SectionBigImageCardAlbumSmall";

interface Ialbum {
  name: string;
  year: string;
  image: string;
}

interface Iprops {
  dataResponseAlbum: Ialbum[];
  isLoadingResponseAlbum: boolean;
}

const SectionBigImage = ({
  dataResponseAlbum,
  isLoadingResponseAlbum,
}: Iprops) => {
  return (
    <div className="p-4 xl:mx-12">
      <div className="bg-[#1d2124] px-1 rounded-md drop-shadow-2xl card-album-shadom">
        <div className="py-3">
          <Typography className="text-white ml-4 text-base">
            The Main Squeeze
          </Typography>
        </div>
        <img
          src="https://lh3.googleusercontent.com/a-/ALV-UjWmidLMbxluDVKvHDbk7pPBowZyenv9oki_UZw8OiV5EPjmA_7H=w1286-h535-l90-rj-dcgVKMrTnlTKgC"
          alt="The Mian squeeze"
          className="2xl:h-80 w-full bg-contain"
        />
        <div className="py-2">
          <Typography className="text-slate-300 ml-4 text-sm">
            The Main Squeeze
          </Typography>
          <Typography className="text-slate-300 ml-4 text-sm">
            Álbum • 2012
          </Typography>
          <Typography className="text-slate-300 ml-4 text-sm">
            12 canciones • 1 hora y 2 minutos
          </Typography>
        </div>
      </div>

      <div className="mt-4">
        <div>
          <Typography className="font-bold text-lg">
            Albumes mas escuchados
          </Typography>
          <div className="w-full h-5 bg-[#1d2124] "></div>
          <div className="mt-4 flex justify-between gap-3 h-72 overflow-x-auto px-1 custom-scrollbar">
            {dataResponseAlbum ? (
              <>
                <Skeleton loading={isLoadingResponseAlbum} active avatar />
                <Skeleton loading={isLoadingResponseAlbum} active avatar />
                <Skeleton loading={isLoadingResponseAlbum} active avatar />
                {dataResponseAlbum?.map((item: Ialbum, index) => (
                  <SectionBigImageCardAlbumSmall
                    key={index}
                    name={item.name}
                    image={item.image}
                    year={item.year}
                  />
                ))}
              </>
            ) : (
              <>
                <Skeleton active avatar />
                <Skeleton active avatar />
                <Skeleton active avatar />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBigImage;
