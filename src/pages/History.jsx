import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image20 from '../assets/images/Image20.png';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

export const History = () => {
  return (
    <div>
      <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <span className='fw-semibold fs-4'>OUR HISTORY</span>
          <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Member</span>
        </div>
      </div>
      <div className='d-flex align-items-center mb-5'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bounce-in" // Added 'bounce-in' class
            contentStyle={{}}
            contentArrowStyle={{}}
            iconStyle={{ background: '#130F60', width: '20px', height: '20px' }}
          >
            <h5 className="vertical-timeline-element-title">2050 - Committee Formation</h5>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <span className="vertical-timeline-element-date">
              <img src={Image20} style={{ maxHeight: '200px', maxWidth: '300px' }} alt="Image" />
            </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bounce-in" // Added 'bounce-in' class
            contentStyle={{}}
            contentArrowStyle={{}}
            iconStyle={{ background: '#130F60', width: '20px', height: '20px' }}
          >
            <h5 className="vertical-timeline-element-title">2050 - Committee Formation</h5>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <span className="vertical-timeline-element-date">
              <img src={Image20} style={{ maxHeight: '200px', maxWidth: '300px' }} alt="Image" />
            </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bounce-in" // Added 'bounce-in' class
            contentStyle={{}}
            contentArrowStyle={{}}
            iconStyle={{ background: '#130F60', width: '20px', height: '20px' }}
          >
            <h5 className="vertical-timeline-element-title">2050 - Committee Formation</h5>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <span className="vertical-timeline-element-date">
              <img src={Image20} style={{ maxHeight: '200px', maxWidth: '300px' }} alt="Image" />
            </span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work bounce-in" // Added 'bounce-in' class
            contentStyle={{}}
            contentArrowStyle={{}}
            iconStyle={{ background: '#130F60', width: '20px', height: '20px' }}
          >
            <h5 className="vertical-timeline-element-title">2050 - Committee Formation</h5>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <li>Lorem ipsum dolar consecutor</li>
            <span className="vertical-timeline-element-date">
              <img src={Image20} style={{ maxHeight: '200px', maxWidth: '300px' }} alt="Image" />
            </span>
          </VerticalTimelineElement>

          


        </VerticalTimeline>
      </div>
    </div>
  );
}
