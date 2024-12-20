import { fetchAbout } from '@/api/aboutApi';
import React, { useEffect, useState } from 'react';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
export const About = () => {
  const [about, setAbout] = useState({});
  const fetchData = async () => {
    try {
      const aboutData = await fetchAbout();
      setAbout(aboutData);
    } catch (error) {
      console.error('Error fetching about:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const block2Data = about.meta && about.meta.find(meta => meta.key === 'block-2');
  const block3Data = about.meta && about.meta.find(meta => meta.key === 'block-3');


  return (
    <div>
      <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <span className='fw-semibold'>ABOUT US</span>
          <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; About Us</span>
        </div>
      </div>
      <div className='container mt-5 pt-5 pb-5'>
        <div className="row">
          <div className="col-md-6 col-sm-12 position-relative">
            <div>
              <img className='rounded-3 highlight-img w-100' src={about.featured_image} alt="Image" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <h5 className='fw-bold fs-3 text-prime'>{about.title}</h5>
            <div className='text-muted justify-text pt-4' dangerouslySetInnerHTML={{ __html: about.content }} />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row d-flex flex-row">
          {block2Data && block2Data.value.map((block, index) => (
            block.map((item, idx) => (
              <div key={idx} className="col-md-4 col-sm-12 mb-4">
                <div className="p-5 shadow rounded">
                  <div className="card-body">
                    <div className="card-title text-prime fw-semibold fs-4">{item.title}</div>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>


     <div className="container py-5">
  {block3Data && block3Data.value.map((block, index) => (
    <div className="row" key={index}>
      {block.map((item, idx) => (
        <div className="col-md-7 col-sm-12" key={idx}>
          <div>
            <h4 className='fw-bold fs-3 text-prime pb-4 mt-5'>{item.title}</h4>
            <p className='text-muted justify-text pt-3' dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
          <div className="d-flex flex-row-reverse">
            <h5 className='text-prime'>• Suresh {}</h5>
          </div>
        </div>
      ))}
      <div className="col-md-5 col-sm-12 ps-5">
      <img className="rounded-3 highlight-img w-100" src="https://familytree-api.seshra.com/image/98" alt="Image" />

      </div>
    </div>
  ))}
</div>


    </div>
  )
}

