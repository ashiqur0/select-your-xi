import './App.css'
import logo from './assets/logo.png'
import coin from './assets/coin.png'

function App() {

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className=" text-xl">
            <img className='w-10 h-10' src={logo} alt="" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-2 py-2 px-3 border-1 border-gray-300 rounded-2xl">
          <span>6000000000</span>
          <span>Coin</span>
          <img className='w-7 h-7' src={coin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
