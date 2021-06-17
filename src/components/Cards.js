import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Why Be Notarious?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="https://images.pexels.com/photos/3927126/pexels-photo-3927126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        text="Detail-Oriented - We Don't Miss a Thing" 
                        label='1-On-1 Training' 
                        path='/services' 
                        />
                        <CardItem 
                        src="https://images.pexels.com/photos/4427627/pexels-photo-4427627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        text="Tactile-Oriented: We Focus on Learning By Doing" 
                        label='Collaborative Learning' 
                        path='/services' 
                        />
                    </ul>
                    <h1>What We Offer:</h1>
                    <div className="cards__container"></div>
                    <div className="cards__wrapper"></div>
                    <ul className="cards__items">
                        <CardItem 
                        src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        text="Learn from Behind the Comfort of your Device" 
                        label='Online Training' 
                        path='/services' 
                        />
                        <CardItem 
                        src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        text="Learn from our Experienced and Field-Vetted Notaries" 
                        label='Live Courses & Seminars' 
                        path='/services' 
                        />
                        <CardItem 
                        src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        text="Receive Your Certification Upon Completion of Your Course!" 
                        label='Same-Day Certification' 
                        path='/services' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
