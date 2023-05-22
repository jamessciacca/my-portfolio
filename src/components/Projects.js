//importing react 
import React from 'react';
import { useState } from 'react';

//importing all project images
import devdirect from '../img/devdirect.png';
import petroasting from '../img/petroasting.png';
import fitnessfusion from '../img/fitnessfusion.png';

//importing github logo
import githublogo from '../img/github-mark.png';

//creating the projects function
function Projects() {

    const [showProject1, setProject1] = useState(true);
    const [showProject2, setProject2] = useState(true);
    const [showProject3, setProject3] = useState(true);
    

    return (
        <>
            <hr className='' />

            <section id='projectSection' className='container mx-auto'>
                <h1 id='projecth1' className='text-center text-xl'>PROJECTS</h1>
                <div id='gridLayout' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-sm lg:text-base xl:text-xl'>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>Dev Direct</h1>
                        {showProject1 ?
                            <img className='mx-auto' src={devdirect} alt="devdirect logo" /> :
                            <p className='mb-8'>A full stack MERN app designed for developers to connect and network with other developes accross the world. <br /><br /> My responsibilities for the development process included working on the Back-end to set up the server, database, and create both the Authentication and Api routes! I also worked on the CSS and responsiveness of the app. <br /><br /> Developed with - HTML, CSS, REACT, Node.js, Express.js, MongoDB, Bcrypt, Sessions, TailWind, Axios, and jQuery </p>
                        }
                        <ul className='flex justify-evenly p-4'>
                            {showProject1 ? '' : <a id='githubA' href="https://github.com/Animeet/DevDirect" target="_blank"><img id='githublogo' src={githublogo} alt="" /></a>}
                            <a id='description' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject1(!showProject1)}>
                                {showProject1 ? 'Description' : 'Back'}
                            </a>
                            {showProject1 ? '' : <a href="https://dev-direct.herokuapp.com/" target='_blank' class="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Live</a>}
                        </ul>
                        <div >
                        </div>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>Pet Roasting App</h1>
                        {showProject2 ?
                            <img className='mx-auto' src={petroasting} alt="pet roasting logo" /> :
                            <p className='mb-8'>A fun application designed to make fun of your furry best friends! Allows a user to create an account where they can upload links to photos and add a funny comment under it! <br /><br /> My responsibilities for this app include all of the CSS and Styling throughout the whole page, and helping out on the Back-end when my colleagues needed it. <br /><br /> Developed with - HandleBars, CSS, Node.js, Express.js, SQL, Bcrypt, Dotenv, Express-handlebars, Express-session, Express-validator, Generate-unique-id, Multer, Mysql2, Nodemon, Sequelize, and Uploader</p>
                        }
                        <ul className='flex justify-around p-4'>
                            {showProject2 ? '' : <a id='githubA' href="https://github.com/MegMathis/Pet_Roasting_App" target="_blank"><img id='githublogo' src={githublogo} alt="" /></a>}
                            <a id='description' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject2(!showProject2)}>
                                {showProject2 ? 'Description' : 'Back'}
                            </a>
                            {showProject2 ? '' : <a href="https://pet-roasting-app.herokuapp.com/" target='_blank' class="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Live</a>}
                        </ul>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>Fitness Fusion</h1>
                        {showProject3 ?
                            <img className='mx-auto' src={fitnessfusion} alt="fitness fusion logo" /> :
                            <p className='mb-8'>My First Project! We created a workout finder app based on users input. We used two API's to get both workout data and inspirational quote data! <br /><br /> My responsibilities for the development process included working on the API connection, and completing simple JS to make the app fucntional. <br /><br /> Developed with - HTML, CSS, JavaScript, jQuery, Tailwind, and NinjaAPI! </p>
                        }
                        <ul className='flex justify-around p-4'>
                            {showProject3 ? '' : <a id='githubA' href="https://github.com/jamessciacca/fitness-fusion-workout-maker" target="_blank"><img id='githublogo' src={githublogo} alt="" /></a>}
                            <a id='description' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject3(!showProject3)}>
                                {showProject3 ? 'Description' : 'Back'}
                            </a>
                            {showProject3 ? '' : <a href="https://jamessciacca.github.io/fitness-fusion-workout-maker/" target='_blank' class="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Live Site</a>}
                            
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
