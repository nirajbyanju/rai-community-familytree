import React, { useState, useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoCalendarOutline } from "react-icons/io5";
import Backup from '../assets/images/backup.png';
import { fetchBlog, fetchCountBlog } from '@/api/blogApi';

const Blogs = () => {
    const [expanded, setExpanded] = useState(false);
    const [blog, setBlog] = useState([]);
    const [count, setCount] = useState(0); // Changed to a single integer value
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = blog.length;

    const fetchData = async (currentPage) => {
        try {
            const blogData = await fetchBlog(currentPage, itemsPerPage); // Assuming your API supports pagination parameters
            setBlog(blogData);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    const fetchCountData = async () => {
        try {
            const countData = await fetchCountBlog();
            setCount(countData);
        } catch (error) {
            console.error('Error fetching count:', error);
        }
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    useEffect(() => {
        fetchCountData();
        fetchData(currentPage);
    }, [currentPage]); 

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber); // Update currentPage to trigger data fetch
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getPageNumbers = () => {
        const totalPages = Math.ceil(count / itemsPerPage);
        const maxPageNumbersToShow = 5; // Adjust this number as needed
        const pages = [];
    
        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const middlePage = Math.floor(maxPageNumbersToShow / 2);
            let startPage = currentPage - middlePage;
            let endPage = currentPage + middlePage;
    
            if (startPage <= 0) {
                startPage = 1;
                endPage = maxPageNumbersToShow;
            } else if (endPage > totalPages) {
                startPage = totalPages - maxPageNumbersToShow + 1;
                endPage = totalPages;
            }
    
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }
    
        return pages;
    };
    

    const pageNumbers = getPageNumbers();

    return (
        <div>
            <div className="prime-background p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span className='fw-semibold fs-4'>BLOG & NEWS</span>
                    <span className='d-flex lh-1 mt-1'>
                        <CiHome />
                        <Link to="/" className="ms-1 text-white text-decoration-none">Home</Link>&nbsp; /&nbsp; Events
                    </span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {blog.slice(0, 3).map((blog) => (
                        <div className="col-sm-12 col-md-4 mb-4" key={blog.id}>
                            <div style={{ height: '300px' }}>
                                {blog.featured_image ? (
                                    <img
                                        className="rounded-3 w-100 highlight-img h-100"
                                        style={{ objectFit: 'cover' }}
                                        src={blog.featured_image}
                                        alt="Image"
                                    />
                                ) : (
                                    <img
                                        className="rounded-3 w-100 h-100 highlight-img"
                                        style={{ objectFit: 'cover' }}
                                        src={Backup}
                                        alt="Backup Image"
                                    />
                                )}
                            </div>
                            <div className='d-flex gap-2 mt-3'>
                                <IoCalendarOutline className='text-prime' />
                                <span className='fw-semibold lh-1'>{blog.post_date}</span>
                            </div>
                            <div className='mt-2'>
                                <Link to={`/blog/${blog.id}`} className='fw-semibold text-decoration-none text-dark footer-hover' style={{ maxHeight: expanded ? 'none' : '2.4em', lineHeight: '1.2em' }}>
                                    {truncateText(blog.title, 98)}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    {blog.slice(3).map((blog) => (
                        <div className="col-sm-12 col-md-4" key={blog.id}>
                            <div className="row mb-4">
                                <div className="col-4">
                                    {blog.featured_image ? (
                                        <img className='rounded-3 object-fit-cover w-100 highlight-img' style={{ height: '110px' }} src={blog.featured_image} alt="Image" />
                                    ) : (
                                        <img className='rounded-3 w-100 highlight-img' style={{ height: '110px' }} src={Backup} alt="Backup Image" />
                                    )}
                                </div>
                                <div className="col-8">
                                    <div className='d-flex gap-2 mt-3'>
                                        <IoCalendarOutline className='text-prime' />
                                        <span className='fw-semibold lh-1'>{blog.post_date}</span>
                                    </div>
                                    <div>
                                        <Link to={`/blog/${blog.id}`} className='fw-semibold text-decoration-none text-dark footer-hover' style={{ maxHeight: expanded ? 'none' : '2.4em', lineHeight: '1.2em' }}>
                                            {truncateText(blog.title, 98)}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <ul className="pagination justify-content-center mt-3">
                        {currentPage > 1 && (
                            <li className="page-item">
                                <button onClick={() => paginate(currentPage - 1)} className="page-link">
                                    Previous
                                </button>
                            </li>
                        )}
                        {pageNumbers.map((page, index) =>
                            page === '...' ? (
                                <li key={index} className="page-item">
                                    <span className="page-link">...</span>
                                </li>
                            ) : (
                                <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                    <button onClick={() => paginate(page)} className="page-link">
                                        {page}
                                    </button>
                                </li>
                            )
                        )}
                        {currentPage < Math.ceil(count / itemsPerPage) && (
                            <li className="page-item">
                                <button onClick={() => paginate(currentPage + 1)} className="page-link">
                                    Next
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
