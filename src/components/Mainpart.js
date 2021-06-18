import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Mainpart.css';

function Mainpart() {
    return (
        <div className='mainpart-container'>
            <video src='https://vod-progressive.akamaized.net/exp=1624043179~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4036%2F16%2F420182206%2F1814364972.mp4~hmac=59cfc428eaff07314b0ba1bca65ab6657547f7f1eb8a0e64533579d95882d700/vimeo-prod-skyfire-std-us/01/4036/16/420182206/1814364972.mp4?filename=production+ID%3A4432818.mp4' autoPlay loop muted />
            <h1>It Was Not a Dream..</h1>
            <p>Your Notary Journey Starts Today!</p>
            <div className="mainpart-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    Get Started Today
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                    Why Notarious? <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Mainpart;
