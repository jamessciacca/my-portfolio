import react from 'react';

function Certificates() {
    return (
        <>
        <hr />
        <section id="certificates" className="p-10">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="font-mono text-4xl mb-5">Certificates</h1>
                <p className="font-mono mb-2">Here are some of the certificates I have earned through various courses and programs:</p>
                <ul className="list-disc list-inside font-mono">
                    <li>Full Stack Web Development Certificate - Rutgers University</li>
                    <li>Java Programming Certificate - Coursera</li>
                    <li>Python for Data Science Certificate - edX</li>
                    <li>Cybersecurity Fundamentals Certificate - Cybrary</li>
                    <li>Cloud Computing Basics Certificate - AWS Training</li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Certificates;