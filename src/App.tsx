import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import {fetchTracks} from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';


const App = () => {
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });
  console.log(tracks)
  const [trackIndex, setTrackIndex] = useState(0)
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }
  const AlbumCover = () =>  {
    const src = tracks===undefined ? '' : tracks[trackIndex]?.track.album.images[0]?.url
    return (
        <img src={src} style={{ width: 400, height: 400 }} />
    );
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test {tracks===undefined ? '' : tracks.length} {tracks===undefined ? '' : tracks[0]?.track.name} {tracks===undefined ? '' : tracks[0]?.track.artists[0]?.name} </h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test</p>
      </div>
      <audio src={tracks===undefined ? '' : tracks[trackIndex]?.track.preview_url} autoPlay controls />
      <button onClick={goToNextTrack}>
       Next track
      </button>
      <AlbumCover/>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
