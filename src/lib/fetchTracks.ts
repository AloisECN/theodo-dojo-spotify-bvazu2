import { SavedTrack } from "spotify-types";

const apiToken: string = 'BQDT36VJ1wIWKuw3FG-pv1Utzn7kwZ6kWHn8FRS3He-2yAPRKJkbV7Bkb3rD1Y1eLXrLQhWHwv8k2EzsuA2-quFQL8Y9QtYRor5vEgtK8CSJiukiUIoyAfIUSQYsjUPHnnTJ4yQg9XWM2YOveM4hmYHTy7sTHT6Gm8iX7GVParGKyjThrdSFofvMjjz4frB4mHujloGR2w3SiqwH753Fu1HZFXNTHA';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
