import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <>
    <div className="container">
  <div style={{textAlign:"center"}}>
    <h2>Contact Us</h2>
  </div>
  <div className="row">
    <div className="column">
      <img src="https://portfolio-shash.web.app/static/media/avatar.ddb73ca20c214a645a72.jpeg" style={{width:"100%"}} />
    </div>
    <div className="info">
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

export default Contact