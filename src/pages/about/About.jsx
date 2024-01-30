import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
      <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora reiciendis adipisci dolores necessitatibus eum nesciunt illum veniam natus rerum!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil assumenda quas aspernatur tempora dignissimos obcaecati totam pariatur quaerat quidem soluta nam et ipsam maxime praesentium, esse enim rem. Magni nulla nostrum recusandae amet, aspernatur laudantium?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nihil nam ex recusandae obcaecati odio sint molestias porro quidem incidunt iste quam possimus adipisci consequuntur atque ad? Porro unde eum quaerat obcaecati eius aperiam officia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nesciunt nisi ipsam atque assumenda tempora ducimus, magnam recusandae est facilis!</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil assumenda quas aspernatur tempora dignissimos obcaecati totam pariatur quaerat quidem soluta nam et ipsam maxime praesentium, esse enim rem. Magni nulla nostrum recusandae amet, aspernatur laudantium?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nihil nam ex recusandae obcaecati odio sint molestias porro quidem incidunt iste quam possimus adipisci consequuntur atque ad? Porro unde eum quaerat </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil assumenda quas aspernatur tempora dignissimos obcaecati totam pariatur quaerat quidem soluta nam et ipsam maxime praesentium, esse enim rem. Magni nulla nostrum recusandae amet, aspernatur laudantium?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nihil nam ex recusandae obcaecati odio sint molestias porro quidem incidunt iste quam possimus adipisci consequuntur atque ad? Porro unde eum quaerat obcaecati eius aperiam officia!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nesciunt nisi ipsam atque assumenda tempora ducimus, magnam recusandae est facilis!</p>
          </div>
        </div>
      </section>
      </>
  )
}

export default About