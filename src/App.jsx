import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Headers/Navbar'
import { Suspense, useState } from 'react'
import Banner from './components/Headers/Banner'
import { toast, ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('./players.json');
  return res.json();
}
const playersPromise = fetchPlayers();

function App() {

  const [toggled, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(25000000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);

  function handleSetSelectedPlayer(player) {
    if (availableBalance < player.price) {
      return alert('❌ insufficient balance');
    }
    if (purchasedPlayers.length === 11) {
      return toast('11 players already selected');
    }
    setAvailableBalance(availableBalance - player.price);
    setpurchasedPlayers([...purchasedPlayers, player]);
    toast(`${player.name} is added to the team`);
  }

  function removePlayer(player) {
    const remainsPlayer = purchasedPlayers.filter( filteredPlayer => filteredPlayer.id !== player.id);
    setpurchasedPlayers(remainsPlayer);
    setAvailableBalance(availableBalance + player.price);
  }

  return (
    <div className='max-w-320 mx-auto font-sora'>
      <Navbar availableBalance={availableBalance} />
      <Banner />
      <div className='flex justify-between items-center mt-10 mb-7'>
        <h2 className='font-bold text-3xl'>
          {toggled ? `Available Players` : `Selected Player (${purchasedPlayers.length}/11)`}
        </h2>
        <div className='border-1 border-gray-300 rounded-xl w-80 '>
          <button
            onClick={() => {
              setToggle(true);
              // handleSetAddMorePlayer(true);
            }}
            className={`py-3 ${toggled && 'bg-[#E7FE29] text-black'} rounded-l-xl w-1/2 font-bold `}>Available
          </button>

          <button
            onClick={() => {
              setToggle(false);
              // handleSetAddMorePlayer(false);
            }}
            className={`py-3 w-1/2 text-gray-400 ${!toggled && 'bg-[#E7FE29]'}`}
          >Selected(<span> {purchasedPlayers.length} </span>)
          </button>
        </div>
      </div>

      {
        toggled ? <Suspense fallback={<div className='w-full flex justify-center'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
          <AvailablePlayers
            handleSetSelectedPlayer={handleSetSelectedPlayer}
            playersPromise={playersPromise}>
          </AvailablePlayers>
        </Suspense> :
        <SelectedPlayers
          purchasedPlayers={purchasedPlayers}
          removePlayer={removePlayer}
          // handleSetAddMorePlayer={handleSetAddMorePlayer}
          >
        </SelectedPlayers>
      }
      <ToastContainer />
    </div>
  );
}

export default App
