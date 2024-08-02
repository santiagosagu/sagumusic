import { HttpResponse } from "msw";

export const dataSingles = () => {
  return HttpResponse.json({
    mainSingles: [
      {
        title: "Seven Days in Sunny June",
        artist: "Jamiroquai",
        image:
          "https://lh3.googleusercontent.com/Syc0T0hpUCioc8Ky5irJxhnSLOavM4gnWjVkVCeW8IUlB2v8i-xJEkyUcmumDoojHjIV_e0vtjmdnQY=w226-h226-l90-rj",
        src: "public/mp3/Jamiroquai - Seven Days In Sunny June.mp3",
      },
      {
        title: "Rock You",
        artist: "Dirty Loops",
        image:
          "https://lh3.googleusercontent.com/vNn-QZo7_Abjev7HoNIpW1ej0pw1H9EpyVXzplSaoEIrW0zf3F593Z8a7mGweyX9DCIg6voZwM-5ZjL0=w226-h226-l90-rj",
        src: "public/mp3/Dirty Loops - Rock You.mp3",
      },
      {
        title: "Belmont",
        artist: "Snarky Puppy",
        image:
          "https://lh3.googleusercontent.com/ed_noo_MHvi2xOglhE42kRnGb3hhaVUpTeE7IGxT982h4DLiArw9XjbppZEqvzawCjoKVADJIYoE0zTiIA=w226-h226-l90-rj",
        src: "public/mp3/Snarky Puppy - Belmont (Empire Central).mp3",
      },
    ],
  });
};
