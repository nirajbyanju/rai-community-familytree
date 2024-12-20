import { fetchContributor } from '@/api/contributorApi';
import { useEffect, useState } from 'react';
import { CiHome } from "react-icons/ci";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export const Contributors = () => {
    const [contributor, setContributor] = useState([]);
    const contributorData = async () => {
    try {
        const contributorsData = await fetchContributor();
        setContributor(contributorsData);
    } catch (error) {
        console.error('Error fetching contributors:', error);
    }
    };

    useEffect(() => {
    contributorData();
    }, []);

    return (
        <div>
            <div className="prime-background p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span className='fw-semibold fs-4'>CONTRIBUTORS</span>
                    <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Contributors</span>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                {contributor.map((contributor, index) => (
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                        <div className="border rounded-4 p-4 mb-4">
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-3 pb-3'>
                                    <div className="contri-frame">
                                        <img className="" src={contributor.avatar} alt="Image" loading="lazy" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-prime fw-bold'>{contributor.name}</h4>
                                    <div className='d-flex gap-2 lh-1 pb-2'>
                                        <IoLocationOutline className='fw-semibold fs-5' />
                                        {contributor.address}
                                    </div>
                                    <div className='d-flex gap-2 lh-1'>
                                        <IoCalendarOutline />
                                        Contributed Date: {contributor.contribution_date}
                                    </div>
                                </div>
                            </div>
                        
                        <hr />
                        <div>
                            <h6 className='fw-bold'>Contribution Details:</h6>
                            <p>Donated Rs. {contributor.amount} to the community</p>
                        </div>
                        </div>
                    </div>
                    
                ))}    
                </div>
            </div>
        </div>
    
  )
}
