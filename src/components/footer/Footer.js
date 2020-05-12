import React from 'react'
import { IconContext } from 'react-icons'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import { FiChevronsUp } from 'react-icons/fi'


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className='row to-top-btn'>
                    <div className='col'>
                        <a href='#top'>
                            <IconContext.Provider value={{ color: '#291b2c', className: 'global-class-name', size: '3em' }}>

                                <FiChevronsUp />
                            </IconContext.Provider>
                        </a>

                    </div>
                </div>
                <br />
                <div className='row social-btn'>
                    <div className='col'>
                        <a href='https://github.com/ryansCorner'
                            target='_blank'
                            res='noopener noreferrer'>
                            <IconContext.Provider value={{ color: '#291b2c', className: 'global-class-name', size: '2em' }}>
                                <FaGithubAlt value={{ className: 'react-icons' }} />
                            </IconContext.Provider>
                        </a>

                        <b><span style={{ color: '#291b2c' }}>|</span ></b>
                        <a href='https://www.linkedin.com/in/ryan-felter-b47199174'
                            target='_blank'
                            rel='noopner_noreferrer'>
                            <IconContext.Provider value={{ color: '#291b2c', className: 'global-class-name', size: '2em' }}>
                                <FaLinkedinIn value={{ className: 'react-icons' }} />
                            </IconContext.Provider>
                        </a>
                    </div>

                </div>
                <br />

                <div className='row'>
                    <div className="col-2">
                        <p style={{ fontSize: 'smaller', color: '#291b2c', marginLeft: '60px' }}>Made with React.Js </p>
                    </div>
                    <div className="">
                        <b><span style={{ color: '#291b2c' }}>|</span ></b>
                    </div>
                    <div className="col-2">
                        <p style={{ fontSize: 'smaller', color: '#291b2c', marginRight: '84px' }}> By Ryan Felter
                      </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


// class Footer extends React.Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="row">
//                     <div className='row'>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className='row to-top-btn'>
//                         <button type='button' href='#top'>
//                             <FiChevronsUp />
//                         </button>
//                     </div>
//                     <br />
//                     <br />
//                     <br />

//                     <div className='row social-btn'>
//                         <div className='col'>
//                             <a href='https://github.com/ryansCorner'
//                                 target='_blank'
//                                 res='noopener noreferrer'>
//                                 <IconContext.Provider value={{ color: '#291b2c', className: 'global-class-name', size: '2em' }}>
//                                     <FaGithubAlt value={{ className: 'react-icons' }} />
//                                 </IconContext.Provider>
//                             </a>
//                         </div>
//                         <div className='col'>
//                             <a href='https://www.linkedin.com/in/ryan-felter-b47199174'
//                                 target='_blank'
//                                 rel='noopner_noreferrer'>
//                                 <IconContext.Provider value={{ color: '#291b2c', className: 'global-class-name', size: '2em' }}>
//                                     <FaLinkedinIn value={{ className: 'react-icons' }} />
//                                 </IconContext.Provider>
//                             </a>
//                         </div>

//                     </div>
//                     <br />

//                     <div className='row'>
//                         <div className='col-6'>
//                             <p style={{ fontSize: 'smaller' }}>
//                                 Made with React.Js
//                     </p>
//                         </div>
//                         <div className='col-6'>
//                             <p style={{ fontSize: 'smaller' }}>
//                                 By Ryan Felter
//                     </p>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
export default Footer