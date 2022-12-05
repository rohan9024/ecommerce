import React from 'react'
import First from "../components/First";
import Header from "../components/Header";
import Mid from "../components/Mid";
import Second from "../components/Second";
import Third from "../components/Third";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';
import { ScrollUp } from './ScrollUp';

  

function Home() {
    return (
        <>
            <Header />
            <Mid />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Footer/>
            <ScrollUp />
        </>

    )
}

export default Home