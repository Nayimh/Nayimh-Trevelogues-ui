import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import img1 from '../../../banner/banner1.jpg'
import img2 from '../../../banner/banner2.jpg'
import img3 from '../../../banner/banner3.jpg'
import './Banner.css'
const Banner = () => {

  const [ imgs, setImg ] = useState([]);

  useEffect(() => {
    fetch('./spot.json')
      .then(res => res.json())
      .then(dt => setImg(dt))
  },[])


    return (
        <div className='mt-5 pt-2'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='clr'>EXPLORE. DREAM. DISCOVER.</h3>
      <p className='clr'>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the world.
Please tag along!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className='clr'>EXPLORE. DREAM. DISCOVER.</h3>
      <p className='clr'>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the world.
Please tag along!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className='clr'>EXPLORE. DREAM. DISCOVER.</h3>
      <p className='clr'>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the world.
Please tag along!</p>
    </Carousel.Caption>
  </Carousel.Item>
        </Carousel>
        <div className='container'>
          <div className='row'>
            {
              imgs.slice(0, 4).map(img => <div className='col-md-6 col-lg-3 col-sm-12' key={img.title}>
                 <Card>
    <Card.Img className='img' variant="top" src={img.img} />
    <Card.Body>
                    <Card.Title className='text'>{ img.location }</Card.Title>
      <Card.Text className='text'>
        {img.title}
      </Card.Text>
    </Card.Body>
    
  </Card>
              </div>)
            }
        </div>
        </div>
        </div>
    );
};

export default Banner;