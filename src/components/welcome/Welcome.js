import React from 'react'
import FitText from 'react-fittext'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
// import FaGithub from 'react-icons/lib/fa/github'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
        }
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
    render() {
        var headerHeight = window.innerHeight;
        var headerWidth = window.innerWidth;

        return (
            <React.Fragment>
                <header className="App-header" style={{ height: (headerHeight), width: (headerWidth) }}>
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <div className='row banner'>
                        <div className='banner-text'>
                            <FitText
                                style={{
                                    minFontSize: 4,
                                    maxFontSize: 90
                                }}>
                                <h1 className='responsive-headline' style={{ fontSize: '92px' }}>
                                    Ryan Felter
                            </h1>
                            </FitText>

                            <h3>
                                <span>
                                    Full Stack Developer with an emphasis in NodeJs
</span>
                            </h3>
                            <hr />
                            <br />
                            <div className='row'>
                                <div className='col'>

                                    <a href='https://github.com/ryansCorner'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconContext.Provider value={{ color: '#00ffff', className: 'global-class-name', size: '2em' }}>
                                            <FaGithubAlt value={{ className: 'react-icons' }} />

                                        </IconContext.Provider>

                                    </a>
                                </div>
                                <div className='col'>
                                    <a
                                        href='https://www.linkedin.com/in/ryan-felter-b47199174/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconContext.Provider value={{ color: '#00ffff', className: 'global-class-name', size: '2em' }}>

                                            <FaLinkedinIn value={{ className: 'react-icons' }} />
                                        </IconContext.Provider>
                                    </a>

                                </div>
                            </div>



                        </div>
                    </div>
                </header>

            </React.Fragment>
        )
    }


}
export default Welcome