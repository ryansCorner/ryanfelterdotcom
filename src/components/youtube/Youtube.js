import React from 'react'

class Youtube extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        var headerHeight = window.innerHeight;
        var headerWidth = window.innerWidth;
        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <br />

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qOFA7miUpNI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title='aboutMeVid'></iframe>
            </React.Fragment>
        )
    }
}
export default Youtube