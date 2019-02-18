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