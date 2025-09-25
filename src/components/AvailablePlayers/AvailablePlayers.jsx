import { use } from 'react';
import AvailablePlayer from './AvailablePlayer';

const AvailablePlayers = ({handleSetSelectedPlayer, playersPromise }) => {
    const players = use(playersPromise);
    // console.log(players);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4'>
            {players.map(player =>
                <AvailablePlayer
                    key={player.id} 
                    player={player}
                    handleSetSelectedPlayer={handleSetSelectedPlayer}>
                </AvailablePlayer>)}
        </div>
    );
};

export default AvailablePlayers;