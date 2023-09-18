import Carousel from 'react-material-ui-carousel'
import Image15 from '../images/image15.webp'
import Image1 from '../images/image1.jpg'
import Image2 from '../images/image2.jpg'
import Image3 from '../images/image3.jpg'
import Image4 from '../images/image4.jpg'
import Image5 from '../images/image5.jpg'
import Image6 from '../images/image6.jpg'
import Image7 from '../images/image7.jpg'
import Image8 from '../images/image8.jpg'
import Image9 from '../images/image9.jpg'
import './style.css'
const MainSlider = () => {
    return (
        <div>
            <Carousel className='carousel-container'>
                <img className='carousel-img img-fluid ' src={Image15} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image1} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image2} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image3} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image4} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image5} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image6} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image7} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image8} alt="slider-img" />
                <img className='carousel-img img-fluid ' src={Image9} alt="slider-img" />
            </Carousel>
        </div>
    )
}

export default MainSlider