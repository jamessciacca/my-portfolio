//importing react 
import React from 'react';
import { useState } from 'react';

//importing all project images
import devdirect from '../img/devdirect.png';
import petroasting from '../img/petroasting.png';
import fitnessfusion from '../img/fitnessfusion.png';
import jrs from '../img/jrs.png';
import sqlproject from '../img/sqlproject.png';
import codequiz from '../img/codequiz.png';
import JAT from '../img/JAT.jpg';

//importing github logo
import githublogo from '../img/github-mark.png';

//creating the projects function
function Projects() {

    const [showProject1, setProject1] = useState(true);
    const [showProject2, setProject2] = useState(true);
    const [showProject3, setProject3] = useState(true);
    const [showProject4, setProject4] = useState(true);
    const [showProject5, setProject5] = useState(true);
    const [showProject6, setProject6] = useState(true);
    const [showProject7, setProject7] = useState(true);
    

    return (
        <>
            <hr className='' />

            <section id='projectSection' className='container mx-auto'>
                <h1 id='projecth1' className='text-center text-xl'>PROJECTS</h1>
                <div id='gridLayout' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-sm lg:text-base xl:text-xl'>
                <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>JAT (HACKRU)</h1>
                        {showProject7 ?
                            <img className='mx-auto' src={JAT} alt="cde quiz img" /> :
                            <p className='mb-8'>
                            This app was created in only 24 hours at HackRU23. Me and my team worked hard to come up with a working application and we are super proud of what we achieved. Only 1 out of our 4 group members have been to a Hackathon before! This was a great learning experience and way to practice our development skills! <br /><br /> JAT tracks jobs you have applied to. Save the stages you are at in each application and get the total count. Set goals for yourself (apply to 5 jobs/day) and keep your streak. Find jobs and apply on the website. We built JAT using the MERN (MongoDB, Express, React, Node) stack. Also, we used Auth0 for authentication. <br /><br /> Developed with - MongoDB, Express.js, React.js, Node.js, TailwindCSS, AuthO</p>
                        }
                        <ul className='flex justify-center p-4'>
                            {showProject7 ? '' : <a href="https://github.com/justbautista/jat" target='_blank' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
                            <a id='description' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject7(!showProject7)}>
                                {showProject7 ? 'Description' : 'Back'}</a>
                        </ul>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>Dev Direct</h1>
                        {showProject1 ?
                            <img className='mx-auto' src={devdirect} alt="devdirect logo" /> :
                            <p className='mb-8'>A full stack MERN app designed for developers to connect and network with other developers across the world. <br /><br /> My responsibilities for the development process included working on the Back-end to set up the server, database, and create both the Authentication and Api routes! I also worked on the CSS and responsiveness of the app. <br /><br /> Developed with - HTML, CSS, REACT, Node.js, Express.js, MongoDB, Bcrypt, Sessions, TailWind, Axios, and jQuery </p>
                        }
                        <ul className='flex justify-evenly p-4'>
                            {showProject1 ? '' : <a href="https://github.com/Animeet/DevDirect" target='_blank' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
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
                            {showProject2 ? '' : <a href="https://github.com/MegMathis/Pet_Roasting_App" target='_blank' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
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
                            {showProject3 ? '' : <a href="https://github.com/jamessciacca/fitness-fusion-workout-maker" target='_blank' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
                            <a id='description' className='text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject3(!showProject3)}>
                                {showProject3 ? 'Description' : 'Back'}
                            </a>
                            {showProject3 ? '' : <a href="https://jamessciacca.github.io/fitness-fusion-workout-maker/" target='_blank' class="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Live Site</a>}
                            
                        </ul>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>My Portfolio</h1>
                        {showProject4 ?
                            <img id='jrs' className='mx-auto' src={jrs} alt="jrs logo" /> :
                            <p className='mb-8'>My first attempt at a Personal Web Portfolio! <br /><br /> I am very proud of the outcome so far and I am looking to add more features in the future. I am very happy to say I was able to make this application fully responsive across all devices! <br /><br /> Developed with - HTML, CSS, JavaScript, React, and Tailwind! </p>
                        }
                        <ul className='flex justify-center p-4'>
                            {showProject4 ? '' : <a href="https://github.com/jamessciacca/my-portfolio" target='_blank' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
                            <a id='description' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject4(!showProject4)}>
                                {showProject4 ? 'Description' : 'Back'}
                            </a>
                        </ul>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>SQL Employee Tracker</h1>
                        {showProject5 ?
                            <img className='mx-auto' src={sqlproject} alt="sql logo" /> :
                            <p className='mb-8'>
                            A command-line application built from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. <br /><br /> <br /> Developed with - SQL, JavaScript, and Bash </p>
                        }
                        <ul className='flex justify-center p-4'>
                            {showProject5 ? '' : <a href="https://github.com/jamessciacca/my-portfolio" target='_blank' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
                            <a id='description' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject5(!showProject5)}>
                                {showProject5 ? 'Description' : 'Back'}
                            </a>
                        </ul>
                    </div>
                    <div id='project' className='text-center text-xl'>
                        <h1 className='mb-3'>Coding Quiz</h1>
                        {showProject6 ?
                            <img className='mx-auto' src={codequiz} alt="cde quiz img" /> :
                            <p className='mb-8'>
                            An online DOM Quiz created using HTML, CSS, and JavaScript! Utilizes the users local storage to save their Initials and Score on the quiz! <br /><br /> This was my first JavaScript based project and I appreciate this project a lot because it humbled me and taught me that not everything will resonate immediately but with some persiverence you can get anything done! <br /><br /> Developed with - HTML, CSS, JavaScript, jQuery, and Utilizes Dev Tools in Browser. </p>
                        }
                        <ul className='flex justify-center p-4'>
                            {showProject6 ? '' : <a href="https://github.com/jamessciacca/online-coding-quiz" target='_blank' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'><li>Github</li></a>}
                            <a id='description' className='text-white mr-3 font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out'
                                onClick={() => setProject6(!showProject6)}>
                                {showProject6 ? 'Description' : 'Back'}
                            </a>
                            {showProject6 ? '' : <a href="https://jamessciacca.github.io/online-coding-quiz/" target='_blank' class="text-white font-semibold bg-primary hover:bg-primarytrans hover:text-indigo-600 rounded py-2 px-4 border-2 focus:outline-none focus:border-teal-500 transition duration-150 ease-in-out">Live Site</a>}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
