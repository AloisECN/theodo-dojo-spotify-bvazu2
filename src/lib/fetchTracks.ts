import { SavedTrack } from "spotify-types";

const apiToken: string = 'BQCCIe7XvQxZmK3YC4okZkKdloW86GTDZ3wULORBR0uE2FvkT7ghLA_JFvtarbDrp_cK-471p6Bc9CINK2D6O8M61T482Do0GMXTLrTB5BXniaRG34DR7H3lnyUmJ835syeGIJT9KokRbsH_UFHWJlxX93Z9KTiDbH3To_6XiAH64_mIMpfgI6e0Yx4bgtVzJHe2zI8wEE79VyL4OQSUXl80E1KFWg';

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
