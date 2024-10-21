import './home.css'
import Navbar from '../../Navbar/Navbar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from '../../Footer/Footer'


const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal army.</p>
          <div className="hero-btn">
            <button className="btn"><img src={play_icon} alt="" className="btn-img" /></button>
            <button className="btn dark-btn">More<img src={info_icon} alt="" className="btn-img" /></button>
          </div>
          <TitleCards></TitleCards>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"}></TitleCards>
      <TitleCards title={"only on Netflix"}></TitleCards>
      <TitleCards title={"Upcoming"}></TitleCards>
      <TitleCards title={"Top Picks For You"}></TitleCards>
      </div>
     <Footer></Footer>
     
    </div>
  )
}

export default Home
