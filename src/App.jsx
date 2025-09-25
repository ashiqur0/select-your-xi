import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Headers/Navbar'
import { Suspense, useState } from 'react'
import Banner from './components/Headers/Banner'
import { use } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('./players.json');
  return res.json();
}
const playersPromise = fetchPlayers();

function App() {

  const [toggled, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);
  const [addMorePlayers, setAddMorePlayers] = useState(false);

  function handleSetSelectedPlayer(player) {
    if (availableBalance < player.price) {
      return alert('❌ insufficient balance');
    }
    setAvailableBalance(availableBalance - player.price);
    setpurchasedPlayers([...purchasedPlayers, player]);
  }

  function removePlayer(player) {
    const remainsPlayer = purchasedPlayers.filter( filteredPlayer => filteredPlayer.id !== player.id);
    setpurchasedPlayers(remainsPlayer);
    setAvailableBalance(availableBalance + player.price);
  }

  function handleSetAddMorePlayer(state) {
    setAddMorePlayers(state);
  }

  const allPlayers = use(playersPromise);
  // console.log(purchasedPlayers);

  return (
    <div className='max-w-320 mx-auto font-sora'>
      <Navbar availableBalance={availableBalance} />
      <Banner />
      <div className='flex justify-between items-center mt-10 mb-7'>
        <h2 className='font-bold text-3xl'>
          {toggled ? `Available Players` : `Selected Player (${purchasedPlayers.length}/${allPlayers.length})`}
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
    </div>
  );
}

export default App
