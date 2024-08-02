import { Avatar } from "@mui/material";
import { Typography } from "antd";

interface Iartists {
  name: string;
  image: string;
}

interface Iprops {
  dataFeaturedArtists: Iartists[];
}

const ArtistaDestacados = ({ dataFeaturedArtists }: Iprops) => {
  return (
    <div>
      <div className="flex w-full justify-center flex-wrap gap-3 max-h-[600px] overflow-y-auto custom-scrollbar">
        {dataFeaturedArtists?.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            <Avatar src={item.image} sx={{ width: 150, height: 150 }} />
            <Typography className="text-lg font-bold">{item.name}</Typography>
          </div>
        ))}
      </div>
      <div
        className="card-album-shadom mx-8 rounded-lg mb-4"
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/m34byl2BT1o`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default ArtistaDestacados;
