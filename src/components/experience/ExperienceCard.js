import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const ExperienceCard = ({ pics, company, comRole, responsibilities, date, link, taskName }) => {
    return (


        <div style={{ textAlign: 'left' }}>
            <div className='row'>
                <h5 className='company-title'>
                    <b>{company}</b>
                </h5>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h6 className='company-role'>
                        {comRole}
                    </h6>
                </div>
                <div className='col-3'>
                    <h6 className='compnay-date'>
                        {date}
                    </h6>
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