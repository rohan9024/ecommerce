import React from 'react'
import './FollowUs.css'

function FollowUs() {
    return (<>
        <div className='followus-info-container'>
            <p className='followus-info-heading'><b>Follow Us on</b></p>
            <p className='followus-info-item'>Twitter:  <a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a> </p>
            <p className='followus-info-item'>Instagram:  <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a> </p>
            <p className='followus-info-item'>Facebook:  <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a> </p>
            <p className='followus-info-item'>LinkedIn:  <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a> </p>
            <br/>
            <p className='followus-info-item'>Contribute to Github:  <a href="https://github.com/rohan9024/ecommerce"><i class="fa fa-github"></i></a> </p>
        </div>
    </>
    )
}

export default FollowUs