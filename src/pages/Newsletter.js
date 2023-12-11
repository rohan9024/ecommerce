import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (
        <div className='newsletter-container'>
            <h1 className='newsletter-h1'>NEWSLETTER SIGN UP</h1>
            <h2 className='newsletter-h2'>SIGN UP NOW AND GET</h2>
            <ul className='newsletter-list'>
                <li className='newsletter-items'>Exclusive offers!</li>
                <li className='newsletter-items'>The latest fashion news!</li>
                <li className='newsletter-items'>Inspiration and style tips!</li>
            </ul>
            <form novalidate id="newsletterForm" method="post">
                <label className='newsletter-label-input' for="email">Email: </label><br/>
                <input className='newsletter-text-input' type="email" id="email" />
                    <div>
                        <h2 className='newsletter-h2'>FOR A MORE PERSONAL NEWSLETTER (Optional)</h2>
                        <label className='newsletter-label-input'>Gender</label>
                            <input type="radio" id="newsletter-i-am-gender-female" name="newsletter-i-am-gender" value="1" />
                            <label className='newsletter-label-input' for="newsletter-i-am-gender-female">Female</label>
                            <input type="radio" id="newsletter-i-am-gender-male" name="newsletter-i-am-gender" value="2" />
                            <label className='newsletter-label-input' for="newsletter-i-am-gender-male">Male</label><br/>
                            <input type="checkbox" id="newsletter-i-am-kids" name="newsletter-i-am-kids" />
                            <label className='newsletter-label-input' for="newsletter-i-am-kids" >I also want updates for kids</label>
                        <div class="inputwrapper required">
                            <label className='newsletter-label-input' for="txt-postal-code" data-optional="(Optional)">POSTCODE:</label>
                            <input required type="text" id="txt-postal-code" name="postalCode" placeholder="" className='newsletter-text-input'/>
                        </div>
                        <div>
                            <input type="checkbox" required="true" id="cs-fashion-news" name="cs-fashion-news" aria-invalid="true" />
                            <label className='newsletter-label-input ' for="cs-fashion-news">
                                I would like to receive the Fashion Newsletter and personalised promotions from H&amp;M a brand of the H&amp;M Group via emailand text messages.
                                <div className='newsletter-text-wrapper'>
                                I can withdraw this consent at any time. I confirm that I'm 16 years old or older.</div>
                                <div className='newsletter-text-wrapper'>
                                I acknowledge that my personal data will be processed by H&amp;M Group in accordance with the&nbsp;<a href="/privacypolicy"><u>Privacy Notice</u></a>.
                                </div>
                            </label> <br />
                        </div>
                        <div className="newsletter-button">
                        <input type="submit" value="Yes, sign me up!" className='newsletter-button-text'/>
                        </div>
                    </div>
                </form >
                </div>
                )
}

export default Newsletter