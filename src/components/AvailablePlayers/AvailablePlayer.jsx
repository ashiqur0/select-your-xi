import playerIcon from '../../assets/player-icon.png'
import countryFlag from '../../assets/countryFlag.png'
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName, faFlag } from '@awesome.me/kit-KIT_CODE/icons'

const AvailablePlayer = ({player, handleSetSelectedPlayer}) => {
    const {image, name, country, playing_role, rating, bowling_style, bating_style, price} = player;

    const [selected, setSelected] = useState(false);
    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <figure>
                <img className='rounded-xl h-50 w-full' src={image} alt="Player" />
            </figure>
            <div className="mt-4">
                <div className='flex items-center gap-2 mt-4'>
                    <img className='w-5 h-5' src={playerIcon} alt="" />
                    <h2 className="card-title text-xl font-semibold">{name}</h2>
                </div>
                <div className='flex justify-between border-b-1 border-gray-200 mt-3 pb-3'>
                    <div className='flex items-center gap-2'>
                        {/* <FontAwesomeIcon icon={faFlag} /> */}
                        <img className='w-5 h-5' src={countryFlag} alt="" />
                        {/* <i class="fa-solid fa-flag"></i> */}
                        <p className='text-gray-500'>{country}</p>
                    </div>
                    <p className='text-[14px] text-black bg-gray-200 px-3 py-1 rounded-md'>{playing_role}</p>
                </div>
                <div className='flex justify-between font-bold mt-3'>
                    <span>Rating</span>
                    <span>{rating}</span>
                </div>
                <div className='flex items-center justify-between py-3'>
                    <h3 className='font-semibold'>{bowling_style}</h3>
                    <h3 className='text-gray-500'>{bating_style}</h3>
                </div>
                <div className="card-actions flex justify-between items-center">
                    <h3 className='font-semibold'>Price: ${price}</h3>
                    <button onClick={() => {
                        setSelected(!selected);
                        handleSetSelectedPlayer(player);
                        }} className=" border-1 border-gray-200 rounded-md hover:bg-gray-100 px-3 py-1 text-[14px] font-normal">{selected? 'Selected':'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayer;