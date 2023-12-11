import React from 'react'
import './Jobs.css'

function Jobs() {
    return (<>
        <div className='jobs-container'>
            <h1 className='jobs-heading'>
                WORK FOR US</h1>
            <div className='jobs-info-container'>
                <div className='jobs-info-subcontainer-left'>
                    <p className='jobs-info-subheading'><b>Why work for us?</b></p>
                    <ul className='jobs-list'>
                        <li>
                            <p className='jobs-info-item'>Remote Work is allowed.</p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Job is full of <b> Innovation</b></p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Job is <b>Fun</b></p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Many benefits like health, transportation, mess, etc. </p>
                        </li>
                    </ul>
                </div>
                <div className='jobs-info-subcontainer-right'>
                    <p className='jobs-info-subheading'><b>Post Open</b></p>
                    <ul className='jobs-list'>
                        <li>
                            <p className='jobs-info-item'>Customer Service Manager</p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Sales Manager</p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Technical Support Assitant</p>
                        </li>
                        <li>
                            <p className='jobs-info-item'>Sales Analyst</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Jobs