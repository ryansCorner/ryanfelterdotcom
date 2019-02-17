import React from 'react'

const TimelineContent = ({ company, comRole, responsibilities, date, link, taskName }) => {
    return (
        <React.Fragment>
            <div className='timeline-content'>
                <h2 className='timeline-date'>{date}</h2>
                <h2 className='timeline-comp'>{company}</h2>
                <h4 className='timeline-role'>{comRole}</h4>
                <p className='timeline-resp'><b><i>{responsibilities}</i></b></p>
                {taskName && (
                    taskName.map(task => {
                        return (
                            <p className='timeline-tasks'>{task}</p>
                        )
                    })
                )}
            </div>
        </React.Fragment>
    )
}

export default TimelineContent