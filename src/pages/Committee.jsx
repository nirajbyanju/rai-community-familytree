import { fetchCommitte } from '@/api/committeApi';
import { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Person1 from '../assets/images/Person1.png';

export const Committee = () => {
    const [committe, setCommitte] = useState([]);
    const fetchData = async () => {
        try {
            const committe = await fetchCommitte(); 
            setCommitte(committe);
        } catch (error) {
            console.error('Error fetching committe:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []); 

  return (
    <div>
    <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
            <span className='fw-semibold fs-4'>COMMITTEE MEMBERS</span>
            <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Committee Member</span>
        </div>
    </div>
    <div className="container my-5">
        <div className="row d-flex justify-content-center">
            {committe.filter(committe => committe.subtitle === 'Chairman').map((commitee, index) => (
            <div key={index} className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={commitee.featured_image} alt="Image" />
                </div>
                <div className='d-flex flex-column align-items-center mt-2'>
                    <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                    <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                </div>
            </div>
            ))}
        </div>
        <div className="row d-flex justify-content-center">
        {committe.filter(committe => committe.subtitle === 'Vice-chairman').map((commitee, index) => (
            <div  key={index} className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={commitee.featured_image} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                    <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                </div>
            </div>
         ))}
         {committe.filter(committe => committe.subtitle === 'Treasurer').map((commitee, index) => (
            <div  key={index} className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={commitee.featured_image} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                    <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                </div>
            </div>
            ))}
            {committe.filter(committe => committe.subtitle === 'Director').map((commitee, index) => (
            <div key={index} className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={commitee.featured_image} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                    <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                </div>
            </div>
            ))}
        </div>
        {/* <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={Person1} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>Deepak Limbu</h5>
                    <span className='fw-thin text-prime'>Chairman</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={Person1} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>Deepak Limbu</h5>
                    <span className='fw-thin text-prime'>Chairman</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={Person1} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>Deepak Limbu</h5>
                    <span className='fw-thin text-prime'>Chairman</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div>
                    <img className='rounded-3 w-100' src={Person1} alt="Image" />
                </div>
                <div className='d-flex align-items-center flex-column mt-2'>
                    <h5 className='fw-semibold m-0'>Deepak Limbu</h5>
                    <span className='fw-thin text-prime'>Chairman</span>
                </div>
            </div>
        </div> */}
    </div>
</div>
  )
}
