import React from 'react'
import { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { fetchGallery } from '@/api/galleryApi';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


export const Gallery = () => {
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    try {
      const imagesData = await fetchGallery();
      setImages(imagesData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const onInit = () => {  
};
  return (
    <div>
      <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <span className='fw-semibold fs-4'>GALLERY</span>
          <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Gallery</span>
        </div>
      </div>
   
      <div className='container mt-2'>
        <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
              >

                  {images.map((image, index) => {
                      return (
                          <a href={image.image} key={index}>
                              <img className='galleryimg' alt={image.title} src={image.image} />
                          </a>
                      )
                  })}


              </LightGallery>
      </div>
    </div>
  )
}
