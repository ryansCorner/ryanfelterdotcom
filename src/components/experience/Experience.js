import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import ExperienceCard from './ExperienceCard';
import EleveightLogo from '../../photos/Logo.png'
import SpotifyDevLogo from '../../photos/spotifydev.jpg'
import AutomobilityLA from '../../photos/AutomobilityLa.jpg'
import { underline } from 'ansi-colors';

const Experience = (props) => {
    return (
        <React.Fragment>

            <div className='row' id='experience'>
                <div className='col-3'>
                    <br />
                    <br />
                    <br /> 
                    <h2><b><u>Experience</u></b></h2>
                </div>

                 <div className='col-6'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ExperienceCard 
                        pics={SpotifyDevLogo}
                        company='Eleveight Inc.'
                        comRole='Full Stack Developer'
                        responsibilities='My team was selected to architect the administrative portion of Eleveight,
                        a web based, case manager platform where our clients can find jobs, scholarships, and other opportunities to assist them in the development of their personal and professional lives.My duties with the company included but were not limited to:   '
                        date='9/2018 - Current'
                        taskName={[
                        'Implementing middleware and back end servers with Node.js, Express.js, JOI, and SQL Server to develop APIs', 
                        'Improve administration/staff communication by creating unique dashboards for administrators and case managers so they could quickly track grant and client data as well as quick access to any new chat messages they may have received while logged out.',
                        'Build a user friendly web scraping component using Puppeteer which scrapes meta data from a given site allowing administrators to easily create profiles for schools, organizations, and other funding sources.',
                        'Create a Redux component to maintain states across various components. allowing for more organized, readable code.',
                        'Maintain a level of front end security by creating an authentication redirect with react-router.',
                        'Write SQL queries and tables for people, organizations, and funding sources, ',
                        'Increase productivity and maintain strong communication during weekly product demos, and daily scrum meetings ',
                        'Maintain communication and sense of camaraderie by doing daily pull request reviews and code talks',
                        ]} />
                        <hr />

                    <ExperienceCard
                        pics={AutomobilityLA}
                        company='AutomobilityLA Hackathon'
                        comRole='Full Stack Developer And Presenter'
                        responsibilities='Worked with small team to meet the challenge of constructing an in car application that would help combat the stresses that fall on Southern Californians while running every-day errands. My duties while working on this team included but were not limited to:'
                        date='11/2018 - 11/2018'
                        taskName={[
                        'Creating an in car application using JavaScript, Node.js, and React.js, and Express.js in under 36 hours.',
                        "Creating a Google Maps navigation component using coordinates gathered with Visa's location API in conjunction with GM's location and destination APIs.",
                        "Utilizing Visa's Merchant Queue API to find various businesses and their checkout line wait times.",
                        'Writing back end controllers and services allowing usage of VISA and GM APIs',
                        'Presenting our app to panel of judges from GM, Visa, and The City Of Los Angeles.',
                        ]}
                        />
                </div>
            </div>

            <b><hr /></b>
            
            <div className='row' id='skills'>
                 <div className='col-3'>
                        <br />
                        <br />
                        <br /> 

                    <h2><b><u>Skills</u></b></h2>
                 </div>

                 <div className='col-6'>
                        <br />
                        <br />
                        <br />
                        <br />
                    <ul className='exp-list'>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            HTML, CSS, jQuery, JavaScript, Bootstrap, SQL Server,
                            AJAX, NodeJs, ReactJs, ReduxJs, ExpressJs, Git 
                            </p>
                        </li>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            Chrome Dev Tools, Visual Studio Code, Postman API, 
                        RESTful APIs, RESTful Web Services, Microsoft Office, Trello
                                
                            </p>
                        </li>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            Customer Service, Public Speaking,
                            API Development, Web Development, Full Stack Development,
                                
                            </p>
                        </li>
                    </ul>
                 </div>
             </div>
        </React.Fragment>
    );
};

export default Experience;