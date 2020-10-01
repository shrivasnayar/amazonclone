import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                // https://i.inews.co.uk/content/uploads/2020/08/kane-all-or-nothing.jpg
            />
            <div className="home__row">
                <Product
                    id='12321341'
                    title="Tidal Paints Acrylic Paint Set of 24, 3 Paint Brushes & 1 Palette for All Skill Levels. Ideal for Canvas, Paper, Ceramics, Stone, Wood, Plastic & Glass Surfaces" 
                    price={14.49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Qd6uE1TrL._AC_SL1500_.jpg"
                
                />
                <Product
                    id='12321342'
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperBack" 
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                
                />
                
            </div>
            <div className="home__row">
                <Product
                    id='12321343'
                    title="The Last of Us Part II (PS4)" 
                    price={41.75}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81OFTUvFX4L._AC_SL1500_.jpg"
                
                />
                <Product
                    id='12321344'
                    title="Oculus Quest 128GB VR Headset" 
                    price={650}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nK%2BJjLzzL._AC_SL1500_.jpg"
                
                />
                
                <Product
                    id='12321345'
                    title="Echo Dot - Smart speaker with Alexa - Charcoal Fabric" 
                    price={49.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"                
                    />
                
            </div>

            <div className="home__row">
                <Product
                    id='12321346'
                    title="Uno Card Game - European Version with Customizable Wild Cards" 
                    price={5.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/810US3NaiqL._AC_SL1500_.jpg"                    
                    />
            </div>

        </div>
    )
}

export default Home
