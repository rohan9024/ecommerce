import React from 'react'
import First from "../components/First";
import Mid from "../components/Mid";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from './Fourth';
import Fifth from './Fifth';
import { ScrollUp } from './ScrollUp';
import Contributor_data from './Contributor_data';



function Home() {
    return (
        <>
            <Mid />
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