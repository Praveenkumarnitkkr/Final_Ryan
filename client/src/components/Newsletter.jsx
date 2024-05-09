import Image from "../components/images/image3.jpg";
import "./newsletter.css"
import { useState } from "react";
function Newsletter(){

    const [name, setName] = useState(''); // Initialize state for the input value
    const [email, setEmail] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value); // Update the state with the new input value
    };
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    };
    return(
        <div className="newsletter">
            <div>
                <img src={Image} alt="logo" />
            </div>
            <div className="newsletter-subs">
                <span className="newsletter-text">Start hacking your way to Stronger Mental Performance and Physical Results.</span>
                <div>
                    <div className="all-input">
                    <input type="text" value={name}  onChange={handleNameChange} placeholder="Name"/>
                    <input type="text" value={email}  onChange={handleEmailChange} placeholder="Email"/>
                     <button className="btn">Subscribe</button>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Newsletter;