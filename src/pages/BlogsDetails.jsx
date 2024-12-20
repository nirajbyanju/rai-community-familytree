import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlog, fetchBlogDetails } from '../api/blogApi'
import { CiHome } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import Backup from '../assets/images/backup.png';

const BlogsDetails = () => {
    const { id } = useParams();
    const [expanded] = useState(false);
    const [blog, setBlog] = useState([]);
    const [blogDetails, setBlogDetails] = useState({});

    const fetchBlogData = async () => {
        try {
            const blogData = await fetchBlog();
            setBlog(blogData);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    const fetchBlogById = async (id) => {
        try {
            const blogDetailsData = await fetchBlogDetails(id);
            setBlogDetails(blogDetailsData);
        } catch (error) {
            console.error('Error fetching blog details:', error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    useEffect(() => {
        fetchBlogById(id);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:'smooth'
        }) ;
    }, [id]);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <div>
            <div className="prime-background p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span className='fw-semibold fs-4'>BLOG & NEWS</span>
                    <span className='d-flex lh-1 mt-1'> <CiHome /> <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Events</span>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8 col-sm-12 col-md-8 ">
                        <div className="">
                            <h3 className="fw-bold">{blogDetails.title}</h3>
                        </div>
                        
                        <div className="row justify-content-center mt-4">
                            <div className="col-6">
                                {blogDetails.featured_image ? (
                                    <img className='rounded-3 w-100 h-100' src={blogDetails.featured_image} alt="Image" />
                                ) : (
                                    <img className='rounded-3 w-100 h-100' src={Backup} alt="Backup Image" />
                                )}
                            </div>
                        </div>
                        <div className='d-flex gap-2 mt-3 mb-2'>
                            <IoCalendarOutline className='text-prime' />
                            <span className='fw-semibold lh-1'>{blogDetails.post_date}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: blogDetails.content }} />
                    </div>


                    <div className="col-4 col-sm-12 col-md-4">
                        <span className='fw-semibold fs-4'>Recent Post</span>
                        <div className="row pt-2 gap-3">
                            {blog.slice(0, 5).map((blog, index) => (
                                <div className="d-flex gap-3" key={index}>
                                    <div>
                                        {blog.featured_image ? (
                                            <img className='rounded-3 w-100 highlight-img' style={{ height: '110px',}} src={blog.featured_image} alt="Image" />
                                        ) : (
                                            <img className='rounded-3 w-100 highlight-img' style={{ height: '110px' }} src={Backup} alt="Backup Image" />
                                        )}
                                    </div>
                                    <div className='col-8'>
                                        <div className='d-flex gap-2 mt-3'>
                                            <IoCalendarOutline className='text-prime' />
                                            <span className='fw-semibold lh-1'>{blog.post_date}</span>
                                        </div>
                                        <div className='mt-2'>
                                            <Link to={`/blog/${blog.id}`} className={`fw-semibold text-decoration-none text-dark footer-hover`}>
                                                {truncateText(blog.title, 68)}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsDetails;
