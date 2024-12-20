
import { useEffect, useState } from 'react';
import { CiHome } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { fetchEvent } from '@/api/eventApi';
export const Events = () => {
  const [events, setEvents] = useState([]);
  const fetchData = async () => {
    try {
      const eventData = await fetchEvent();
      setEvents(eventData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
    
  
    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
  return (
    <div>
      <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <span className='fw-semibold fs-4'>EVENTS</span>
          <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none">Home</Link>&nbsp; /&nbsp; Events</span>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
        {events.slice(0, 2).map((event, index) => (
          <div className="col-md-6 col-sm-12" key={index}>
            <div>
              <img className='rounded-3 w-100' src={event.featured_image} alt="Image"style={{ height: '300px' }} />
            </div>
            <div className='d-flex gap-2 mt-3'>
              <IoCalendarOutline className='text-prime' />
              <span className='fw-semibold lh-1'>{event.post_date}</span>
            </div>
            <div className='mt-2'>
              <p className='fw-semibold'>
                {event.title}
              </p>
            </div>
          </div>
           ))}
         </div> 
      </div>
      
      <div className="container mt-5">
        <div className="row">
        {events.slice(2).map((event, index) => (
          <div className="col-md-6 col-sm-12" key={index}>
            <div className="row mb-4">
              <div className="col-3">
                <img className='rounded-3 w-100' style={{ height: '120px' }} src={event.featured_image} alt="Image" />
              </div>
              <div className="col-9">
                <div className='d-flex gap-2'>
                  <IoCalendarOutline className='text-prime' />
                  <span className='fw-semibold lh-1'>{event.post_date}</span>
                </div>
                <div>
                  <p>
                    {event.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
      ))}
      </div>
      </div>
    </div>
  )
}
