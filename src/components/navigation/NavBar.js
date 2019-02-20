import React from 'react'
import '../../css/Navbar.css'
import classnames from 'classnames'

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({ top: el.offsetTop, height: el.offsetHeight });
        window.addEventListener('scroll', this.handleScroll);


    }

    componentDidUpdate() {
        // this.state.scroll > this.state.top ?
        //     document.body.style.paddingTop = `${this.state.height}px` :
        //     document.body.style.paddingTop = 0;

        // var h = document.querySelector('welcome').height();
        // var s = window.scrollTop();
        // var nav = document.getElementById('nav-wrap');

        // if ((s > h * .20) && (s < h) && (window.outerWidth() > 768)) {
        //     nav.fadeOut('fast')
        // }
        // else {
        //     if (s < h * .20) {
        //         nav.removeClass('opaque').fadeIn('fast')
        //     }
        //     else {
        //         nav.addClass('opaque').fadeIn('fast');
        //     }
        // }
    }

    render() {
        // const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
        return (
            <React.Fragment>

                <nav
                    // className={this.state.visible ? 'navbar' : 'navbar--hidden'}
                    className={this.state.scroll > this.state.top ? "fixed-nav" : ""}
                    id='nav-wrap'
                    style={{}}
                >
                    <ul className='nav-list'>
                        <a ref='' href='#top'> <li className='nav-list-inline-item'>Home</li> </a>
                        <a ref='' href='#aboutMe'> <li className='nav-list-inline-item'>About Ryan</li> </a>
                        <a ref='' href='#experience'> <li className='nav-list-inline-item'>Experience</li> </a>
                        <a ref='' href='#skills'> <li className='nav-list-inline-item'>Skills</li> </a>




                    </ul>
                </nav>

            </React.Fragment >
        )
    }
}
export default NavBar