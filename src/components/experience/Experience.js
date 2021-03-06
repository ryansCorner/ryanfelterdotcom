import React from 'react';

const Experience = (props) => {
    return (
        <React.Fragment>     
            <div className='row' id='skills'>
                 <div className='col-3'>
                        <br />
                        <br />
                        <br /> 

                    <h2><b><u>Skills</u></b></h2>;
                 </div>

                 <div className='col-6'>
                        <br />
                        <br />
                        <br />
                        <br />
                    <ul className='exp-list'>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            HTML, CSS, jQuery, JavaScript, Bootstrap, SQL Server,
                            AJAX, NodeJs, ReactJs, ReduxJs, ExpressJs, Git, C#, .NET Framework
                            </p>
                        </li>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            Chrome Dev Tools, Visual Studio Code, Microsoft Visual Studio,
                             Postman API, Microsoft Team Foundation Server(TFS), 
                        RESTful APIs, RESTful Web Services, Microsoft Office, Trello,
                        Web Scraping, 
                                
                            </p>
                        </li>
                        <li className='exp-list' style={{ fontSize: 'larger' }}>
                            <p>
                            Customer Service, Public Speaking,
                            API Development, Web Development, Full Stack Development,
                                
                            </p>
                        </li>
                    </ul>
                 </div>
             </div>
        </React.Fragment>
    );
};

export default Experience;