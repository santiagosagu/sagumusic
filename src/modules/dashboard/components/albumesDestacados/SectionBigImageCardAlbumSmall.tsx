/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "antd";
import "../../style.css";

interface Ialbum {
  name: string;
  year: string;
  image: string;
}

const SectionBigImageCardAlbumSmall = ({ name, image, year }: Ialbum) => {
  return (
    <div className="min-w-48 h-64  px-8 pt-4 pb-10 rounded-sm bg-[#1d2124] card-album-shadom">
      <Typography className="text-white">{name}</Typography>
      <Typography className="text-white mb-4">{year}</Typography>
      <img src={image} alt="" className="bg-cover w-[164px]  max-h-[164px]" />
    </div>
  );
};

export default SectionBigImageCardAlbumSmall;
