import React from 'react'

class A11yBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onBtnClick = evt => {

    }

    componentDidMount() {

    }


    render() {
        return (
            <React.Fragment>
                <div className="a11y container">
                    <button className='a11y-btn' id='a11y-bar-btn'>A11Y</button>
                    <nav className='a11y navbar'>
                        <ul className='a11y-list'>
                            <li className='a11y-list-item'>

                            </li>
                            <li className='a11y-list-item'>
                                Text Size
</li>
                            <li className='a11y-list-item'>
                                Color Theme
</li>
                            <li className='a11y-list-item'>
                                Text to Speech
                            </li>
                        </ul>
                    </nav>

                </div>
            </React.Fragment>
        )
    }
}
export default A11yBar