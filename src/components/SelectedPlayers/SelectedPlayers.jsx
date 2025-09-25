import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {

    return (
        <div>
            {purchasedPlayers.map((player) =>
                <SelectedPlayer
                    key={player.id}
                    player={player}
                    removePlayer={removePlayer}>
                </SelectedPlayer>
            )}

            <button className='font-bold border-1 border-[#E7FE29] rounded-xl py-4 px-2 mt-12 mb-22'>
                <span className='bg-[#E7FE29] py-2 px-4 rounded-md text-black'
                // onClick={() => handleSetAddMorePlayer(true)}
                >Add More Player</span>
            </button>
        </div>
    );
};

export default SelectedPlayers;