import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/NavBar/Navbar'
import { Suspense } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('./players.json');
  return res.json();
}


function App() {

  const playersPromise = fetchPlayers();

  return (
    <div className='max-w-320 mx-auto'>
      <Navbar />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>
      <SelectedPlayers />
    </div>
  );
}

export default App
