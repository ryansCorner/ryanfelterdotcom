import React from 'react'


class AboutMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var headerHeight = window.innerHeight;
        var headerWidth = window.innerWidth;
        return (
            <React.Fragment>
                <br />
                <br />
                <div className='row' style={{ width: headerWidth }}>
                    <div className='aboutMe-item col-3'>
                        <img
                            className='aboutMe-pic'
                            src="https://i.imgur.com/nSO0j3Wb.jpg?1" alt=''
                            style={{ height: '230px', width: '230px' }}
                        />
                    </div>
                    <div className='aboutMe-item col-lg-6 col-sm-6 col-lg-6 col-xl-6'>
                        <p>
                            At the start of 2018 I decided I needed to choose a new career path.
                            A lifelong obsession with computers and websites made the decision to take on teaching myself to code an easy one.
                            I quickly found my obsession with websites and computer programs extended to an obsession with creating them as well.
                            As I finetuned my HTML, CSS and JavaScript skills and set out to create my first projects I noticed something was missing.
                            To truly create websites and software from the ground up, I needed to learn how to work with backend code as well. This led me to find instruction at Sabio where I sharpened my SQL server skills and became an expert in Nodejs.
                               </p>
                        <br />
                        <br />
                        <p>

                            The tools I gained while there gave me the ability to write beautiful backend code that complimented my clean front-end.
                            Now that my coding skills were up to par, it was time to find work. But thanks to the beautiful code I was now able to write, work found me.
                            In September of 2018 I began current role as a Full Stack Developer, building a web platform for Eleveight Inc.
                        </p>
                        <br />
                        <br />

                        <p>
                            Aside from coding, my other passions include Hip Hop and Electronic music, The New York Yankees, The Los Angeles Lakers,
                            fantasy sports, tech podcasts, history documentaries, and hanging out with my animals.

                        </p>
                        <div className='row'>
                            <div className='aboutMe-item col-6'>
                                <h5><b>Contact Details</b></h5>
                                <h6>Ryan Felter</h6>
                                <h6>3388 N. Mills Ave. </h6>
                                <h6>Claremont, Ca 91711</h6>
                                <h6>ryan_felter@outlook.com</h6>
                                <h6>(909)-532-0599 </h6>
                            </div>
                            <a href={"https://drive.google.com/file/d/1uC8FPESf8rHaTtPb8MXOgubtII0WYQqI/view?usp=sharing"} target="_blank" download='ryan_felter_resume' className='aboutMe-item col'>Download Ryan's Resume</a>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default AboutMe