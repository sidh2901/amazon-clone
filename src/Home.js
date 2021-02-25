import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjgwNDI1YjYt/YjgwNDI1YjYt-ZmEzYmNkNmMt-w1500._CB661635189_.jpg" alt="" />
            <div className="home__row">
                <Product 
                         id="567987"
                         title='New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Latest Model)'
                         price={1119.99}
                         image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SX466_.jpg"
                         rating={5}
                         />
                <Product 
                         id="754798"
                         title='New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest Model, 4th Generation)'
                         price={539.99}
                         image="https://m.media-amazon.com/images/I/719UcXKzXHL._AC_UY327_FMwebp_QL65_.jpg"
                         rating={5}
                         />
                
            </div>
            <div className="home__row">
            <Product 
                     id="324534"
                     title='Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)'
                     price={135.66}
                     image="https://images-na.ssl-images-amazon.com/images/I/51QxA-98Q%2BL._AC_SL1000_.jpg"
                     rating={5}
                      />
            <Product
                    id="645234"
                    title='Google Pixel 5 - 5G Android Phone - Water Resistant - Unlocked Smartphone with Night Sight and Ultrawide Lens - Just Black'
                    price={699.00 }
                    image="https://m.media-amazon.com/images/I/81-fNmQqlLL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                 
                    />
            <Product
                    id="873898"
                    title='All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal'
                    price={99.99}
                    image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                    />            
            </div>
            <div className="home__row">
            <Product
               id="327362"
               title='SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black'
               price={1151.32}
               image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY327_FMwebp_QL65_.jpg"
               rating={5}
            />
            </div>
            </div>
        </div>
    )
}

export default Home
