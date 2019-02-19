import React from 'react'
import { Container, Row, Col } from 'reactstrap'
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
                <Row>
                    <Col className='navbar'>
                        <NavBar />
                    </Col>
                </Row>
                <Row>
                    <Col className='welcome' id='top'>
                        <Welcome />
                    </Col>
                </Row>
                <Row>
                    <Col className='aboutMeComponent' id='aboutMe'>
                        <AboutMe />
                    </Col>
                </Row>
                <Row>
                    <Col className='exp-timeline'>
                        <ExperienceTimeline />
                    </Col>
                </Row>
                {/* </Container>
                <Container className='App'> */}
                <Row >
                    <Col className='experience'>
                        <Experience />
                        <hr />
                    </Col>
                    <Col className='experience'>
                        <Youtube />
                    </Col>
                </Row>

                <Row >

                </Row>
                <Row >
                    <Col className='footer'>
                        <Footer />

                    </Col>

                </Row>
                {/* </Container> */}
            </React.Fragment>
        )
    }
}
export default Layout