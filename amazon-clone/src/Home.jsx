import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="Home">
        <div className="home__container">
            <img 
                className="home_image"
                src="https://cdn.dribbble.com/userupload/38827747/file/original-ff778b5b3b114a2eed201f4f4a73716e.jpg?resize=752x&vertical=center"
                alt=""
            />
        </div>

        <div className="home__row">
            <Product/>
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
    </div>
  )
}

export default Home
