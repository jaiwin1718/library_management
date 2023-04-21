import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About</h2>
            <p className='fs-17'>"Welcome to [VK LIBRARY], a community hub for learning, exploring, and discovering. Our library offers a vast collection of books, magazines, newspapers, audiobooks, and e-books for people of all ages and interests. In addition to our physical collection, we also provide access to a range of digital resources, including online databases, streaming media, and educational tools.</p>
            <p className='fs-17'>We are committed to providing excellent customer service and are always available to assist you with your research and reading needs. Our knowledgeable staff members are happy to help you find the resources you need and answer any questions you may have.</p>
            <p className='fs-17'>Phone:765432189 Email:viratlib17@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
