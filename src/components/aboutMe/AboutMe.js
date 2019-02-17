import React from 'react'
import AboutPic from '../../photos/ponteveccio.jpg'
import ProfPic from '../../photos/ProfilePic.jpeg'
import BroadPic from '../../photos/ProfPicZoom.jpg'
import Resume from '../pdf/RyanFelter_Resume.pdf'

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

                <div className='row' style={{ height: (headerHeight), width: headerWidth }}>
                    <div className='col-3'>
                        <img className='aboutMe-pic'
                            src={BroadPic} alt=''
                            style={{ height: '230px', width: '230px' }}
                        />
                    </div>
                    <div className='col-8'>
                        <p>
                            My name is Ryan and I've loved technology since the AOL dialup days. By the time I got on Myspace, I was customizing my page, changing borders and colors. This was my first formal introduction to coding. I started a degree in business and worked in retail but always had my mom gently nugde me towards tech. Shes an IT director and one day, she told me how she had hired 8 graduates from this cutting edge software bootcamp called Sabio. Most of them had never formally studied computer science but were now doing incredible work at her company.
                               </p>
                        <br />
                        <br />
                        <p>

                            This inspired me join Sabio and formally launch my career in tech. I find myself enjoying having a new problem to solve every day. Itt gives me the opportunity to try new ways to solve old and new problems. I dont go to bed until ive fixed a specific bug or finish a certain task. I also enjoy the mixture of self directed and team work to get a job over the finish line.
</p>
                        <br />
                        <br />

                        <p>
                            I recently participated in a Hackathon where I worked on a project to battle the stress of traffic in SoCal. We developed an in car app that would give us the estimated checkout time at a particular store so you can pick the optimal time to go shopping, get a coffee, or pick up laundry. We used React and Node for the app,  GM and Visa APIs to get relevant store data, and Google maps for navigation. I felt a great sense of pride in the final product. This experience felt like the culmination of a years worth of work where we went from ideation to prototyping in 36 hours. Im looking forward to building solutions that help scale your business, grow your customer base, and connect people in a meaningful ways.

</p>


                        <div className='row'>
                            <div className='col-6'>
                                <h5><b>Contact Details</b></h5>
                                <h6>Ryan Felter</h6>
                                <h6>3388 N. Mills Ave. </h6>
                                <h6>Claremont, Ca 91711</h6>
                                <h6>ryan_felter@outlook.com</h6>
                                <h6>(909)-532-0599 </h6>

                            </div>
                            <a href={Resume} download='ryan_felter_resume'>Download Ryan's Resume</a>
                        </div>
                    </div>
                </div>
                <div className='row'>

                </div>

            </React.Fragment>
        )
    }
}

export default AboutMe