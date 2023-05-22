//importing react and useState from react
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

//creating function Contact
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lgdfznr', 'template_uc74rup', form.current, 'UOwTAKZafB15kEYey')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const showMessageSent = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }
    
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>
        <hr />
            <section id='contactForm'>
                <div id='contactDiv' className="flex flex-grow justify-center text-center mx-auto w-auto">
                    <form id='emailForm' className="flex flex-col mx-auto items-center justify-center w-2/4" ref={form} onSubmit={sendEmail} action="">
                    {showMessage ? 
                        <h1 className="text-center text-2xl font-bold text-green-400 mb-5">Message Sent!</h1>
                        : null}
                        <h1 id='contacth1' className='mb-5'>Contact Me</h1>
                        <input id='input' type="text" placeholder='Full Name' name='user_name' className="px-4 py-2 my-2 bg-gray-200 rounded-lg shadow-md w-full" required/>
                        <input id='input' type="email" placeholder='Email' name='user_email' className="px-4 py-2 my-2 bg-gray-200 rounded-lg shadow-md w-full" required/>
                        <input id='input'  type="text" placeholder='Subject' name='user_subject' className="px-4 py-2 my-2 mb-4 bg-gray-200 rounded-lg shadow-md w-full"required/>
                        <textarea id='input'  placeholder='Message' name="message"cols="30" rows="10" className="px-4 py-2 mb-5 bg-gray-200 rounded-lg shadow-md w-full"></textarea>
                        <button id='emailSubmit' className="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out mb-5" onClick={showMessageSent}>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;