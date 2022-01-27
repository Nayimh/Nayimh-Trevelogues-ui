import React, { useEffect, useState } from 'react';
import './Destination.css'
import { Card } from 'react-bootstrap';

const Destination = () => {

    const [imgs, setImg] = useState([])
    
    useEffect(() => {
        fetch('./spot.json')
          .then(res => res.json())
          .then(dt => setImg(dt))
      },[])

    return (
        <div className='container mt-5 pt-3 dest'>
            <div className='blog-h'>
                <h1>Destinations</h1>
                <p className='mt-4'>Pick a city and start exploring!</p>
            </div>
            <div className='row'>
                {
                    imgs.slice(0, 8).map(img => <div className='col-lg-3 col-md-6 col-sm-12 mb-4' key={img.title}>
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
    );
};

export default Destination;