import React from 'react'
import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
import Hero_banner from './components/Hero_banner'
import Image from './components/Image.jsx'
import images from './assets/images';



const App = () => {

  const imgKeys = Object.keys(images);

  return (
    <>
      <Header />
      <main>
        <Search />
        <Hero_banner />
        <div id="galleryTitle">Popular Collections</div>
        <div className='gallerySection'>
          {imgKeys.map((key, index) => (
            < Image key={index} src={images[key].src} alt={images[key].alt} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
