import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img 
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="legal" 
                    className="form-img" 
                    />
                </div>
                
                {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
        </>
    )
}

export default Form;

