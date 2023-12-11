import React from 'react'
import './Cookie.css'

function Cookies() {
    return (<>
        <div className='cookie-h1'>Cookie Notice</div>
            <div className='cookie-text-outside'>This cookie notice has been prepared with the intention of providing our website visitors with information about the technologies used on our website, and how our visitors can make informed choices about how to manage cookies. </div>
        <div className='cookie-container'>
            <div className='cookie-h2'>What is a cookie? </div>
            <div className='cookie-text'>Whenever you visit our website, we place cookies onto your device for different reasons. A cookie is a small text-based file that is downloaded and stored on your computer, mobile or similar device and contains information about your navigation on the website. They can for example, be used to keep track of which pages you visit on the website, to save the information you entered, or your preferences remembered, such as language settings.</div>
            <div className='cookie-h2'>Why do we use them?</div>
            <div className='cookie-text'>We use cookies to give you the full functionality of the website, to customize your user experience, perform analytics and improve our services. Cookies are also used to deliver personalized advertising on our websites, apps, and newsletters across internet and via social media platforms, to get insights regarding for example how many people click on a Social Media ad from us to visit a page on our website. The information is used to measure and optimize advertising in social media. </div>
            <div className='cookie-h2'>Who is responsible for placing cookies on our website? </div>
            <div className='cookie-text'>All cookies have a publisher which tells you who the cookie belongs to. Some cookies are placed on the websites by us, such cookies are called “first party cookies”, others are placed on the website by another organization, with our permission. Such cookies are called “third party cookies”. </div>
            <div className='cookie-h2'>For how long are cookies stored?</div>
            <div className='cookie-text'>Cookies can be stored for varying lengths of time on your browser or device. Temporary cookies, so-called session cookies, are stored in your device until you close your browser. Permanent cookies have an expiration date and when this date has passed, the cookie is deleted when you return to the website that created it. </div>
            <div className='cookie-h2'>What types of cookies do we use?</div>
            <div className='cookie-text'>We use four categories of cookies, strictly necessary, performance, functional and marketing. Only the last three categories listed require user consent. For strictly necessary cookies, user consent is not required as these cookies provide complete and continuous display of the content of the website so that you can access the website and receive an appropriate digital browsing and online experience. </div>
            <div className='cookie-h2'>How to accept or withdraw your cookie consent in “Cookie settings”?</div>
            <div className='cookie-text'>You manage your cookie consents in “Cookie Settings” at the bottom of this website. You can accept all three categories of cookies or only one of them if you prefer. By agreeing to a category of cookies, you consent to all cookies in this category (see detailed cookie list below).  You can change your preferences and refuse cookies at any time in Cookie Settings. Below you will find more detailed information about our categories of cookies as well as a list of all cookies used in that category.

                If you prefer not to use cookies on your device, you can manage your cookie preferences by ticking it in the list of cookie categories in “Cookie Settings”. Please note that the changes/choices may affect the functionality of the website and may not be available to you personalized offers or advertisements.

                In addition to your consent withdrawal, you can easily stop your browser from accepting cookies by configuring your browser’s cookie settings. All commercial web browsers are featured with cookie management functionality. Please check your web browser to find out more how to delete or disable cookies etc.

                If you choose to "Accept All Cookies", you accept all cookie categories, and agree that we share this information with third parties, such as our advertising partners. This may in some cases mean your data will be processed outside the EU/EEA. If you choose “Only required cookies” no other cookies than the ones categorized as “strictly necessary” will be placed on your device. You can at any time disable cookies that are not categorised as strictly necessary for the site to function by withdrawing your consent.  </div>
            <div className='cookie-h2'>Questions?</div>
            <div className='cookie-text'>If you have questions about the processing of personal data, we invite you to familiarize yourself with our <a href='/privacypolicy'><u>Privacy Policy</u></a> where you will also find our <a href='/contact'><u>Contact</u></a> information.
            </div>
        </div>

    </>
    )
}

export default Cookies