import React from 'react'
import NavBar from '../navigation/NavBar';
import Welcome from '../welcome/Welcome';
import Experience from '../experience/Experience'
import AboutMe from '../aboutMe/AboutMe'
import Footer from '../footer/Footer'
import ExperienceTimeline from '../experience/ExperienceTimeline';
import Youtube from '../youtube/Youtube'

class Layout extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidUpdate() {
        var h = document.querySelector('welcome').height();
        var s = window.scrollTop();
        var nav = document.getElementById('nav-wrap');

        if ((s > h * .20) && (s < h) && (window.outerWidth() > 768)) {
            nav.fadeOut('fast')
        }
        else {
            if (s < h * .20) {
                nav.removeClass('opaque').fadeIn('fast')
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <Container> */}
                <div className='layout-row'>
                    <NavBar />
                </div>
                <div className='layout-row'>
                    <div className='col welcome' id='top'>
                        <Welcome />
                    </div>
                </div>
                <div className='layout-row'>
                    <div className='col aboutMeComponent' id='aboutMe'>
                        <AboutMe />
                    </div>
                </div>
                <div className='layout-row'>
                    <div className='col exp-timeline'>
                        <ExperienceTimeline />
                    </div>
                </div>
                {/* </Container>
                <Container className='App'> */}
                <div className='layout-row' >
                    <div className='col experience'>
                        <Experience />
                        <hr />
                    </div>
                    <div className='col experience'>
                        <Youtube />
                    </div>
                </div>

                <div className='layout-row' >
                    <div className='col footer'>
                        <Footer />

                    </div>

                </div>
                {/* </Container> */}
            </React.Fragment>
        )
    }
}
export default Layout