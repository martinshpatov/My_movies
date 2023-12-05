import React from 'react';

const About = () => {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>Details</h1>
            <div>
                <h2 style={{ color: 'green' }}>Movie Details</h2>

                <p style={{ color: 'white' }}>
                    Welcome to the Movie Details page! Here, you'll find in-depth information about your favorite movies, including key details that enrich your viewing experience. Whether you're a film enthusiast, a casual moviegoer, or just curious about the latest releases, this page is your go-to source for comprehensive movie information.
                </p>

                <h2 style={{ color: 'green' }}>What to Expect</h2>
                <ul>
                    <li style={{ color: 'white' }}><strong>Release Year:</strong> Discover when the movie hit the big screen or streaming platforms.</li>
                    <li style={{ color: 'white' }}><strong>Director:</strong> Learn about the creative mind behind the camera, shaping the film's vision.</li>
                    <li style={{ color: 'white' }}><strong>Genre:</strong> Explore the primary genres that define the movie's style and tone.</li>
              
                </ul>

                <h2 style={{ color: 'green' }}>How to Use</h2>
                <p style={{ color: 'white' }}>
                    Simply click on the movie title or poster to access the detailed information. Whether you're planning your next movie night or looking for background details after watching, this page has you covered.
                </p>

                <p style={{ color: 'white' }}>
                    Enjoy your exploration of movie details, and may it enhance your appreciation for the art of filmmaking!
                </p>
            </div>
        </div>
    );
};

export default About;
