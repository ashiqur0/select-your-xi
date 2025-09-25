import navImg from '../../assets/logo.png'
import coinImg from '../../assets/coin2.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-15 h-15' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex items-center gap-1 font-semibold">
                <span>{availableBalance}</span>
                <span>Coin</span>
                <img className='w-7 h-7 rounded-full' src={coinImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;