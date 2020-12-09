import React from 'react'
import Footer from '../components/footer/Footer'
import { homeObjOne, homeObjTwo } from '../components/infoSection/Data'
import InfoSection from '../components/infoSection/InfoSection'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/products/Products'
import Recipes from '../components/recipes/Recipes'
import Services from '../components/services/Services'

const Home = () => {
    return (
        <div>
            <Navbar />
            <InfoSection {...homeObjOne} />
            <Services />
            <Products />
            <InfoSection tall={true} {...homeObjTwo} />
            <Recipes />
            <Footer />
        </div>
    )
}

export default Home
