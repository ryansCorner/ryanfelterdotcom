import React from 'react'
import ExperienceTimeline from '../experience/ExperienceTimeline'

class Accordian extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,

        }
    }

    renderPosts() {
        const { posts, loading, error } = this.state;

        /*
        * Calling the renderError() method, if there is any error  
        */
        if (error) {
            this.renderError();
        }

        return (
            <div className="accordion-container">
                <h1>Accordion Component</h1>
                {posts.map(post =>
                    <ExperienceTimeline post={post} key={post.id} />
                )}
            </div>
        );
    }

    render() {
        const { loading } = this.state;
        return (
            <React.Fragment>
                <div>

                    {loading ? this.renderLoading() : this.renderPosts()}
                </div>
            </React.Fragment>
        )
    }
}
export default Accordian