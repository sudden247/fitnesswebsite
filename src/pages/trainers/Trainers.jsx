import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { trainers } from '../../data';
import './trainers.css'
import Trainer from '../../components/Trainer';


const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores vero dolorum, fugiat nostrum recusandae.
      </Header>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <AiFillInstagram />, link: socials[0]},
                  {icon: <FaFacebookF />, link: socials[1]},
                  {icon: <FaSquareXTwitter />, link: socials[2]},
                  {icon: <FaLinkedin />, link: socials[3]}
                ]
              }/>
            })
          }
        </div>

      </section>
    </>
  )
}

export default Trainers