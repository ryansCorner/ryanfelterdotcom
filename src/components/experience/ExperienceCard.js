import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const ExperienceCard = ({ pics, company, comRole, responsibilities, date, link, taskName }) => {
    return (


        <div style={{ textAlign: 'left' }}>
            <div className='row'>
                <h4 className='company-title'>
                    <b>{company}</b>
                </h4>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h5 className='company-role'>
                        {comRole}
                    </h5>
                </div>
                <div className='col-3'>
                    <h5 className='compnay-date'>
                        {date}
                    </h5>
                </div>
            </div>
            <div className='row'>
                <div className='col' >
                    <ul className='exp-list'>
                        <p className='exp-list' style={{ fontStyle: 'italic' }}>
                            {responsibilities}
                        </p>

                        {taskName && (
                            taskName.map(task => {
                                return (
                                    <li className='exp-list'>
                                        {task}
                                    </li>
                                )
                            })

                        )}
                    </ul>

                </div>
            </div>
        </div>


    )
}
export default ExperienceCard;