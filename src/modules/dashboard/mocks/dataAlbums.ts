import { HttpResponse } from "msw";

export const dataAlbums = () => {
  return HttpResponse.json({
    mainAlbums: [
      {
        name: "The Main Squeeze",
        year: "Álbum • 2012",
        image:
          "https://lh3.googleusercontent.com/ybMf85C1unRrWQrfagObXoK_RqDkTOqjZ1PrFaGecehTGo05xg9TqPczn0-Cr44xZ6pmlYFsJnFi96El=w226-h226-l90-rj",
      },
      {
        name: "Live in Amsterdam",
        year: "Álbum • 2020",
        image:
          "https://lh3.googleusercontent.com/vF2fIcPcre8UvXqdy-VbNBtpzSxWcwIES-z5nos6865Q71YyfO0lPX8yFusDDDAjjM-lfKTqs3paXdk=w544-h544-l90-rj",
      },
      {
        name: "Turbo",
        year: "Álbum • 2021",
        image:
          "https://lh3.googleusercontent.com/2Y8biVQ9aksa_kgcIche4drnvpb2W9MSxDRnQL1OeyEHrgSYFOKacTuNkD5ubWXTxbqgCVj3DJ6eIo4=w544-h544-l90-rj",
      },
    ],
  });
};
