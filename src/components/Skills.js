import React from 'react';

//pulling in all logos 
import htmllogo from "../img/htmllogo.png";
import csslogo from "../img/csslogo.png";
import jslogo from "../img/jslogo.png";
import reactlogo from "../img/reactlogo.png";
import nodelogo from "../img/nodelogo.png";
import mongodblogo from "../img/mongologo.png";
import tailwindlogo from "../img/tailwindlogo.png";
import javalogo from "../img/javalogo.png";
import terminallogo from "../img/terminallogo.png";
import githublogo from "../img/github-mark.png";

//creating skills function
function Skills() {
    return (
        <>
        <hr />
            <h1 id='skillsh1' className='text-center'>Skills</h1>
            <section id='skillsSection' className='ml-5 mr-5 mx-auto grid text-xs md:text-sm lg:text-base xl:text-xl gap-3'>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={htmllogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">HTML</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={csslogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">CSS</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={jslogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">JavaScript</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={reactlogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">React</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={nodelogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">Node.js</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={tailwindlogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">Tailwind</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={javalogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">Java</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={mongodblogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium">MongoDB</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={terminallogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium text-center">Command Line</h3>
                </div>
                <div id='card' class="mx-auto card w-full h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <img
                        src={githublogo}
                        class="rounded-lg w-56 h-56 object-cover"
                        alt="placeholder image"
                    />
                    <h3 class="text-2xl mb-3 text-gray-800 font-medium text-center">Git</h3>
                </div>
            </section>
        </>
    );

}

export default Skills;

