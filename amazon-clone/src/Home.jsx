import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image"
                src="https://cdn.dribbble.com/userupload/38827747/file/original-ff778b5b3b114a2eed201f4f4a73716e.jpg?resize=752x&vertical=center"
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={19.99} 
                    image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg"
                    rating={5}
                />
                <Product
                    id="49538094"
                    title="Kenwood KMX750WH KMIX Planetary Mixer with 5L Steel Handled Bowl, 3 Mixing Hooks, 1000W Power, 
                    Customizable with Over 20 Accessories Purchasable Separately, White "
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71PrWECeRTL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title='SAMSUNG 49" Odyssey Neo G9 Series G95NA 4K UHD Curved Gaming Monitor, 240Hz'
                    price={3099.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/712LviuZ4PL._AC_SL1500_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo Dot Smart Speaker with Alexa"
                    price={49.99}
                    rating={5}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcV1oXvl_ZUz_LOhS92derjDErNVIEZrsBDWZOh51Ps82SM5FAC3lvo97Hz-rAXsA8T5ItQrY2w6KSBLev1TeICyj-d-Ss3Pt3Y25B3qI"
                />
                <Product
                    id="3254354345"
                    title="Apple iPad, 2025 with A16 Chip (11-inch, Wi-Fi + Cellular, 128GB) - Silver (Renewed) "
                    rating={3}
                    price={689.99}
                    image="https://m.media-amazon.com/images/I/61jSEBxL5cL._AC_SL1500_.jpg"  
                />
            </div>
            <div className="home__row">
                <Product
                    id="90829332"
                    title="VIZIO 40-inch Full HD 1080p Smart TV with DTS Virtual: X, Alexa Compatibility, Google Cast Built-in, Bluetooth Headphone Capable, (VFD40M-08 New)"
                    rating={4}
                    price={116.99}
                    image="https://m.media-amazon.com/images/I/81NLMdXhvrL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home
