import React from 'react'
import First from "../components/First";
import { motion } from "framer-motion";
import Mid from "../components/Mid";
import Second from "../components/Second";
import CardBanner from './CardBanner';
import Third from "../components/Third";
import Fourth from './Fourth';
import Fifth from './Fifth';
import { ScrollUp } from './ScrollUp';
import img1 from '../assets/saleB1.jpg';
import img2 from '../assets/saleB2.jpg';
import img3 from '../assets/saleB3.jpg';
import img4 from '../assets/saleB4.jpg';
import img5 from '../assets/saleB5.jpg';


function Home() {
    const bannerData = [
        {
          title: "Family Fiesta Extravaganza",
          description: 'Dress the family, dazzle the world!',
          image: img1,
        },
        {
          title: 'Soleful Discounts Bonanza',
          description: 'Step into savings, walk in style!',
          image: img2,
        },
        {
          title: 'Tech Marvels Unleashed',
          description: 'Upgrade today, tech tomorrow!',
          image: img3,
        },
        {
          title: 'Fashion Frenzy for Her',
          description: 'Revamp, refresh, redefine your style!',
          image: img4,
        },
        {
          title: "Kid's Corner Bargains Bonanza",
          description: 'Adorable styles, unbeatable prices, pure joy!',
          image: img5,
        },
      ];
    return (
        <>
        <Mid />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                // className="flex flex-row justify-center items-center"
            >
                <CardBanner data={bannerData} />
            </motion.div>
            
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <ScrollUp />
        </>

    )
}

export default Home