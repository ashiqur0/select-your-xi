import React from 'react';

const SelectedPlayer = ({ player, removePlayer }) => {
    const { image, name, playing_role } = player;

    return (
        <div className='flex justify-between items-center border-1 border-gray-200 p-4 rounded-xl mt-5'>
            <div className='flex justify-start items-center gap-5'>
                <img className='w-15 h-15 object-cover rounded-xl' src={image} alt="" />
                <div>
                    <h3 className='font-semibold'>{name}</h3>
                    <p>{playing_role}</p>
                </div>
            </div>
            <button
                onClick={() => removePlayer(player)}
            >❌</button>
        </div>
    );
};

export default SelectedPlayer;