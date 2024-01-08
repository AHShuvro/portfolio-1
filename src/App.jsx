
import './App.css'
import Achievement from './Components/Achievement/Achievement'
import Banner1 from './Components/Banner/Banner1'
import BlogPost from './Components/BlogPost/BlogPost'
import FavouriteClients from './Components/FavouriteClients/FavouriteClients'
import Footer1 from './Components/Footer/Footer1'
import Header1 from './Components/Header/Header1'
import Portfolio from './Components/Portfolio/Portfolio'
import Service from './Components/Service/Service'
import Skills from './Components/Skills/Skills'
import Testimonial from './Components/Testimonials/Testimonial'

function App() {

  return (
    <>
      <Header1/>
      <Banner1/>
      <Service/>
      <Skills/>
      <Achievement/>
      <Portfolio/>
      <Testimonial/>
      <FavouriteClients/>
      <BlogPost/>
      <Footer1/>
    </>
  )
}

export default App
