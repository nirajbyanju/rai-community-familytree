import React, { useState, useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import Person1 from '@/assets/images/Person1.png';
import { fetchCommonPage } from '@/api/commonPageAPI'; 
export const Common = () => {
    const { slug } = useParams();
    const [common, setCommonPage] = useState({}); 

    const fetchCommonBySlug = async (slug) => {
        try {
            const commonData = await fetchCommonPage(slug); 
            setCommonPage(commonData);
        } catch (error) {
            console.error('Error fetching blog details:', error);
        }
    };

    useEffect(() => {
        fetchCommonBySlug(slug);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }); 
    }, [slug]);

    console.log(common); 
  return (
    <div>
    <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
            <span className='fw-semibold fs-4'>{common.title}</span>
            <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; {common.title}</span>
        </div>
    </div>
    <div className="container my-5">
    <div dangerouslySetInnerHTML={{ __html: common.content }} />
    </div>
    
</div>
  )
}
