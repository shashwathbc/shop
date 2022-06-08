import React from 'react';
import "./about.css";

const About = () => {
  return (
    <>

    <div className="about-section">
  <h1>About Us Page</h1>
  <p>Hope you like this website.</p>
  <p>This website is done using Bootstrap , Material UI , Redux , React , and Hosted using Firebase.</p>
</div>

<h2 style={{textAlign:"center"}}>Done By : </h2>

  <div className="column">
    <div className="card">
      <img src="https://portfolio-shash.web.app/static/media/avatar.ddb73ca20c214a645a72.jpeg" alt="John" style={{width:"100%"}} />
      <div className="container">
        <h2>Shashwath BC</h2>
        <p className="title"><strong> Web Developer</strong></p>
        <p>Love developing react projects</p>
        <p><strong>Email : </strong> shashwathbcgmail.com</p>
        <p><strong>Phone No : </strong>9036812819</p>
      </div>
  </div>
</div>
    </>
  )
}

export default About