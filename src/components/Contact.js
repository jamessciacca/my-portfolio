import React, { useState } from 'react';

//creating function Contact
function Contact() {
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('_subject', `Portfolio Contact: ${formData.get('subject') || 'New message'}`);
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/jsciacca03@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const result = await response.json();
            const isSuccess = result?.success === true || result?.success === 'true';
            if (!isSuccess) {
                throw new Error('Submission failed');
            }

            form.reset();
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 3500);
        } catch (error) {
            setStatus('error');
            setErrorMessage('Message failed to send. Please try again in a moment.');
        }
    };

    return (
        <>
            <hr />
            <section id='contactForm'>
                <div id='contactDiv' className="flex flex-grow justify-center text-center mx-auto w-auto">
                    <form id='emailForm' className="flex flex-col mx-auto items-center justify-center w-2/4" onSubmit={sendEmail}>
                        {status === 'sent' ? (
                            <h1 className="text-center text-2xl font-bold text-green-400 mb-5">Message Sent!</h1>
                        ) : null}
                        {status === 'error' ? (
                            <p className="text-center text-base font-semibold text-red-300 mb-5">{errorMessage}</p>
                        ) : null}
                        <h1 id='contacth1' className='mb-5'>Contact Me</h1>
                        <input id='input' type="text" placeholder='Full Name' name='name' className="px-4 py-2 my-2 bg-gray-200 rounded-lg shadow-md w-full" required />
                        <input id='input' type="email" placeholder='Email' name='email' className="px-4 py-2 my-2 bg-gray-200 rounded-lg shadow-md w-full" required />
                        <input id='input' type="text" placeholder='Subject' name='subject' className="px-4 py-2 my-2 mb-4 bg-gray-200 rounded-lg shadow-md w-full" required />
                        <textarea id='input' placeholder='Message' name="message" cols="30" rows="10" className="px-4 py-2 mb-5 bg-gray-200 rounded-lg shadow-md w-full" required />
                        <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
                        <button
                            id='emailSubmit'
                            type="submit"
                            disabled={status === 'sending'}
                            className="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out mb-5"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
