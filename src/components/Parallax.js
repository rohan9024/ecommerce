import { AdvancedBannerTop } from "./AdvancedBanner";
import React from 'react'


const Parallax = () => {
    return (
        <div>
            <div className="p-0 m-0 h-[200vh]">
                <AdvancedBannerTop />
                <div className="center full second-heading h-[100vh] bg-black font-sans text-4xl flex text-center justify-center items-center">
                    <div>
                        <h1 className="headline gray m-3 text-indigo-400">Checkout</h1>
                        <h1 className="headline gray m-3 text-indigo-400">cool</h1>
                        <h1 className="headline gray m-3 text-indigo-400">products.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax