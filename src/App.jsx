import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Accordian from './components/accordian/Accordian'
// import Color from './components/randomColor/Color'
// import StarRating from './components/star-rating/StarRating'
// import Image from './components/imageSlider/Image'
// import Loadmore from './components/LoadMore/Loadmore'
// import QrCode from './components/Qr-Code/Qr-code'
// import LightDark from './components/Light-dark/LightDark'
// import Modal from './components/Model/Model'
// import GithubProfileFinder from './components/Github-profile-finder/Github'
// import Search from './components/Search-autoComplet/Search'
// import TicTactToe from './components/Tik-tact-toe/TicTactToe'
// import UseFetchHookTest from './components/usehook/test'
// import UseFetch from './components/usehook/UsefetchHook'
// import ScrollTopTo from './components/ScrollTopToButtom/ScrollTopTo'
import Weather from './components/weatherapp/Weather'

function App() {

  return (
    <>
   {/* <Accordian />
   <Color />
   <StarRating noOfStar={10} />
   <Image url={'https://picsum.photos/v2/list'} limit={5} page={1}/>
   <Loadmore />
   <QrCode /> */}
        
         {/* <LightDark />
         <Modal />
         <GithubProfileFinder />
         <Search />
         <TicTactToe />
         <UseFetchHookTest />
         <ScrollTopTo /> */}
         <Weather />
    </>
  )
}

export default App
