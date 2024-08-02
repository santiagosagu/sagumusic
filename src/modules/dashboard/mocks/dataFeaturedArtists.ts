import { HttpResponse } from "msw";

export const dataFeaturedArtists = () => {
  return HttpResponse.json({
    featuredArtists: [
      {
        name: "Dirty Loops",
        image:
          "https://lh3.googleusercontent.com/meu3_pXX4Q5g9GbkM5qCKq71kQvWHHwiCc9LES_nLGqYpsY3PZcLqwH5A8iPxE_hWb3WVCY582QYZA=w226-h226-p-l90-rj",
      },
      {
        name: "Cory Wong",
        image:
          "https://lh3.googleusercontent.com/q863S_sm7epcSRQKwLPk2nhrvtj4C-8hq0pPo7vCLTTVNfN7OJPkZaSXNZP1BQAv9AuOLWdwI9eunQ=w226-h226-p-l90-rj",
      },
      {
        name: "Martin Miller",
        image:
          "https://lh3.googleusercontent.com/0fo9q0y5oCSGmGze7u6NS9YwAwlsWpR_uGkXAbQivAup0UJOlP6ObpCgiQWk4m15KNJ8CMBN5e9oIA=w226-h226-p-l90-rj",
      },
      {
        name: "Lari Basilio",
        image:
          "https://lh3.googleusercontent.com/clkihLO0lLZBWpLENt7l1yurCtdR4ZPP0WHNzo_uvychBpDpRhJ8hkBty4pqMsk9WfvyeZWXDrWPcu1Q=w226-h226-l90-rj",
      },
      {
        name: "The Main Squeeze",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjWmidLMbxluDVKvHDbk7pPBowZyenv9oki_UZw8OiV5EPjmA_7H=w226-h226-l90-rj-dcgVKMrTnlTKgC",
      },
      {
        name: "Steve Vai",
        image:
          "https://lh3.googleusercontent.com/vhjPeIIl3R4Vantz6ZOSK-klYKUifvdn0KtJ-H0tART7X31stye2pveYp2YUfE5peGoZab6xZO4VsN8=w226-h226-p-l90-rj",
      },
      {
        name: "Jacob Collier",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjVbRv99JcJJxxY82sqEGfF8epgVdJlW81d0M7N7CoLDNCZr8F0g=w226-h226-l90-rj",
      },
    ],
  });
};
