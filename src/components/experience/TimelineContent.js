import React from 'react'

class TimelineContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: null,

        };

        this.handleClick = this.handleClick.bind(this);
    }

    /*
* Handling the click event
*/    handleClick(key) {
        return (e) => {
            let active = this.state.active === key ? null : key
            this.setState({ active: active })
        }
    }
    display(key) {
        return this.state.active === key ? 'block' : 'none'
    }
    liClass(key) {
        return this.state.active === key ? 'active' : 'inactive'
    }



    // const TimelineContent = ({ company, comRole, responsibilities, date, link, taskName, show }) => {
    render() {
        const company = this.props.company;
        const comRole = this.props.camRole;
        const responsibilities = this.props.responsibilities;
        const date = this.props.date;
        const link = this.props.link;
        const taskName = this.props.taskName;
        const show = this.props.show
        const { className } = this.state;
        const { headingClassName } = this.state;
        const key = this.props.key;
        return (

            <React.Fragment>
                <div className='parent-accordian timeline-content'
                    key={key} onClick={this.handleClick(key)}
                >
                    <h2 className='timeline-date'>{date}</h2>
                    <h2 className='timeline-comp'>{company}</h2>
                    <h4 className='timeline-role'>{comRole}</h4>
                    <p><b><i>{responsibilities}</i></b></p>

                    {taskName && (
                        taskName.map(task => {
                            return (
                                <p className={headingClassName + ' ' + className}
                                    style={{ display: this.display(key) }}
                                >{task}</p>
                            )
                        })
                    )}
                </div>
            </React.Fragment>
        )

    }
}

export default TimelineContent