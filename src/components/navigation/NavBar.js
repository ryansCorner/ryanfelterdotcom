import React from 'react'
import '../../Navbar.css'
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
                {/* <div className={this.state.scrollY > this.state.offsetTop ? 'fixed-nav nav-wrap nav' : 'navbar'} id='nav-wrap'>
                    <a href="#home">Experience</a>
                    <a href="#news">About Me</a>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" onClick={this.toggle}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div> */}
                {/* <div>

                    <Navbar color="danger" light expand="md" className="navbar" id='navbar'>
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Experience</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Skills</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                  </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div> */}
            </React.Fragment >
        )
    }
}
export default NavBar