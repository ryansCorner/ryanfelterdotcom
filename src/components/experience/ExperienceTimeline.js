import React from 'react'
import TimelineContent from './TimelineContent';

const ExperienceTimeline = (props) => {
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <div className="timeline">
                        <div className='timeline-container left'>
                            <TimelineContent
 company='Eleveight Inc.'
 comRole='Full Stack Developer'
 responsibilities='My team was selected to architect the administrative portion of Eleveight,
 a web based, case manager platform where our clients can find jobs, scholarships, and other opportunities to assist them in the development of their personal and professional lives.My duties with the company included but were not limited to:   '
 date='9/2018 - Current'
//  taskName={[
//  'Implementing middleware and back end servers with Node.js, Express.js, JOI, and SQL Server to develop APIs', 
//  'Improve administration/staff communication by creating unique dashboards for administrators and case managers so they could quickly track grant and client data as well as quick access to any new chat messages they may have received while logged out.',
//  'Build a user friendly web scraping component using Puppeteer which scrapes meta data from a given site allowing administrators to easily create profiles for schools, organizations, and other funding sources.',
//  'Create a Redux component to maintain states across various components. allowing for more organized, readable code.',
//  'Maintain a level of front end security by creating an authentication redirect with react-router.',
//  'Write SQL queries and tables for people, organizations, and funding sources, ',
//  'Increase productivity and maintain strong communication during weekly product demos, and daily scrum meetings ',
//  'Maintain communication and sense of camaraderie by doing daily pull request reviews and code talks',
//  ]} 
                            />
                        </div>
                        <div className='timeline-container right'>
                            <TimelineContent
    company='AutomobilityLA Hackathon'
    comRole='Full Stack Developer And Presenter'
    responsibilities='Worked with small team to meet the challenge of constructing an in car application that would help combat the stresses that fall on Southern Californians while running every-day errands. My duties while working on this team included but were not limited to:'
    date='11/2018 - 11/2018'
    // taskName={[
    // 'Creating an in car application using JavaScript, Node.js, and React.js, and Express.js in under 36 hours.',
    // "Creating a Google Maps navigation component using coordinates gathered with Visa's location API in conjunction with GM's location and destination APIs.",
    // "Utilizing Visa's Merchant Queue API to find various businesses and their checkout line wait times.",
    // 'Writing back end controllers and services allowing usage of VISA and GM APIs',
    // 'Presenting our app to panel of judges from GM, Visa, and The City Of Los Angeles.',
    // ]}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default ExperienceTimeline