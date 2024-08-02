import { HttpResponse } from "msw";

export const dataTopFiveSongs = () => {
  return HttpResponse.json({
    topFiveSongs: [
      {
        key: "1",
        name: "The Main Squeeze",
        album: "The Main Squeeze",
        reproducciones: "70.000.000",
      },
      {
        key: "2",
        name: "King Bozzi (con Sam Greenfield)",
        album: "Starship Syncopation",
        reproducciones: "60.000.000",
      },
      {
        key: "3",
        name: "Pockets Presents: David Ryan Harris!",
        album: " David Ryan Harris y Scary Pockets",
        reproducciones: "58.000.000",
      },
      {
        key: "4",
        name: "Summer Girl",
        album: "Automaton",
        reproducciones: "56.200.000",
      },
      {
        key: "5",
        name: "Crazy Train (con Cody Fry)",
        album: "Late Nights",
        reproducciones: "53.000.000",
      },
    ],
  });
};
