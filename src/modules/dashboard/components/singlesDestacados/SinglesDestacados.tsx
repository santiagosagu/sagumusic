/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton, Table, Typography } from "antd";
import CardMusicPlayer from "./CardMusicPlayer";
import "../../style.css";

interface ISingle {
  title: string;
  artist: string;
  image: string;
  src: string;
}

interface IsongTopFive {
  key: string;
  name: string;
  album: string;
  reproducciones: string;
}

interface Iprops {
  dataResponseSingle: ISingle[];
  dataTopFiveSongs: IsongTopFive[];
  isLoadingResponseSingles: boolean;
}

const SinglesDestacados = ({
  dataResponseSingle,
  dataTopFiveSongs,
  isLoadingResponseSingles,
}: Iprops) => {
  const columns = [
    {
      title: "Titulo",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Album",
      dataIndex: "album",
      key: "album",
    },
    {
      title: "Reproducciones",
      dataIndex: "reproducciones",
      key: "reproducciones",
    },
  ];

  return (
    <div className="p-4 md:mx-4">
      <div className="flex gap-4 justify-between overflow-x-auto custom-scrollbar pb-4">
        {dataResponseSingle ? (
          <>
            <Skeleton loading={isLoadingResponseSingles} active avatar />
            <Skeleton loading={isLoadingResponseSingles} active avatar />
            <Skeleton loading={isLoadingResponseSingles} active avatar />
            {dataResponseSingle.map((item: ISingle, index) => (
              <div
                key={index}
                className="min-w-48 max-w-48 h-64  pb-10 rounded-sm bg-[#1d2124] card-album-shadom"
              >
                <img
                  src={item.image}
                  alt=""
                  className="bg-cover w-full h-[164px] max-h-[164px]"
                />
                <div className="px-4 mt-4">
                  <Typography className="text-white mb-2">
                    {item.title}
                  </Typography>
                  <Typography className="text-white">{item.artist}</Typography>
                </div>
              </div>
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

      <div className="mt-6">
        <Typography className="font-bold text-lg mb-2">
          Top 5 Mundial
        </Typography>
        <Table
          className="custom-scrollbar card-album-shadom"
          columns={columns}
          dataSource={dataTopFiveSongs}
          rowClassName="bg-[#1d2124] text-white hover:text-[#1d2124]"
          pagination={false}
          scroll={{ x: 240 }}
        />
      </div>
      <div className="lg:mb-24 2xl:mb-0 ">
        <CardMusicPlayer />
      </div>
    </div>
  );
};

export default SinglesDestacados;
