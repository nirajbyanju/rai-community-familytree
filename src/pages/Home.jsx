import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FiArrowRight } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { fetchAbout } from '@/api/aboutApi';
import { fetchBlog } from '@/api/blogApi';
import { fetchCommitte } from '@/api/committeApi';
import { fetchEvent } from '@/api/eventApi';

import Backup from '@/assets/images/backup.png';
import Background1 from '../assets/images/Background1.png';
import Image3 from '../assets/images/Image3.png';
import Image4 from '../assets/images/Image4.png';
import Image5 from '../assets/images/Image5.png';
import Image6 from '../assets/images/Image6.png';

import { fadeIn } from '@/assets/js/variants';


export const Home = () => {
    const [index, setIndex] = useState(0);
    const [expanded] = useState(false);
    const [events, setEvents] = useState([]);
    const [blog, setBlog] = useState([]);
    const [about, setAbout] = useState({});
    const fetchData = async () => {
        try {
            const eventData = await fetchEvent();
            setEvents(eventData);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    const fetchBlogs = async () => {
        try {
            const blogData = await fetchBlog();
            setBlog(blogData);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };
    const fetchAblout = async () => {
        try {
            const aboutData = await fetchAbout();
            setAbout(aboutData);
        } catch (error) {
            console.error('Error fetching about:', error);
        }
    };
    const [committe, setCommitte] = useState([]);

    const fetchCommitteData = async () => {
        try {
            const committeData = await fetchCommitte();
            setCommitte(committeData);
        } catch (error) {
            console.error('Error fetching committe:', error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchBlogs();
        fetchAblout();
        fetchCommitteData();
    }, []);



    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <div>
            <div className="h-20">
                <Carousel activeIndex={index} className='h-60' onSelect={handleSelect}>
                    <Carousel.Item style={{ maxHeight: "500px" }}>
                        <img src={Background1} alt="First slide" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item style={{ maxHeight: "500px" }}>
                        <img src={Background1} alt="Second slide" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item style={{ maxHeight: "500px" }}>
                        <img src={Background1} alt="Third slide" className="d-block w-100" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container mt-sm-2 mt-5 pt-5 pb-5'>
                <div className="row">
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        className="col-sm-12 col-md-6">
                        <div className='d-flex justify-content-center'>
                            <img className='rounded-3 highlight-img w-100' src={about.featured_image} alt="Image" />
                        </div>
                    </motion.div>
                    <div className='col-sm-12 col-md-6'>
                    <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }} 
                    className="">
                        <h6 className='fw-bold text-prime pt-5'>
                            ABOUT US
                        </h6>
                        <h5 className='fw-bold fs-3 text-prime'>{about.title}</h5>
                        <div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                         className='text-muted justify-text py-3' dangerouslySetInnerHTML={{ __html: about.content }} />
                    </motion.div>
                        <motion.a
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                         href="/about" className='text-light px-3 py-2 rounded-pill text-decoration-none prime-background view-more pointer-cursor'>
                            READ MORE <FiArrowRight className='ms-1 mb-1' />
                        </motion.a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#F6F5FC' }} className='mt-5 mb-5'>
                <div className="container pt-5">
                    <div className='d-flex align-items-center flex-column'>
                        <motion.h6
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                         className='fw-medium text-prime'>OUR HISTORY</motion.h6>
                        <motion.h3
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className='fw-bold'>Our Development Over Years
                        </motion.h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={Image3} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <span className='fw-bold text-prime'>2050 B.S.</span>
                                <h5 className='fw-bold'>Establishment of Committee</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={Image4} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <span className='fw-bold text-prime'>2050 B.S.</span>
                                <h5 className='fw-bold'>First General Meeting</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={Image5} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <span className='fw-bold text-prime'>2050 B.S.</span>
                                <h5 className='fw-bold'>Social Exposure & Events</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={Image6} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <span className='fw-bold text-prime'>2060 B.S.</span>
                                <h5 className='fw-bold'>Participation in Festival</h5>
                            </div>
                        </div>
                    </div>
                    <motion.div
                     variants={fadeIn("down", 0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.4 }}
                     className='py-5 d-flex align-items-center flex-column'>
                        <a href="/events" className='text-light px-3 py-2 rounded-pill text-decoration-none prime-background view-more'>VIEW ALL
                            <FiArrowRight className='ms-1 mb-1' />
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="container mt-5">
                <div className='d-flex justify-content-between'>
                    <motion.div 
                         variants={fadeIn("right", 0.2)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.4 }}
                        className='d-flex justify-content-center flex-column'>
                            <span className='fs-6 fw-semibold text-prime'>
                                OUR COMMITTEE MEMBERS
                            </span>
                            <h3 className='fw-semibold '>Know Our Leading Committee</h3>
                        </motion.div>
                    <motion.div 
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className='d-none d-md-block'>
                        <a href="/committee" className='text-light px-3 py-2 rounded-pill text-decoration-none prime-background view-more'> VIEW ALL  <FiArrowRight className='ms-1 lh-lg ' /></a>
                    </motion.div>
                </div>
                <div className="row mt-5">
                    {committe.filter(committe => committe.subtitle === 'Chairman').map((commitee, index) => (
                        <div key={index} className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={commitee.featured_image} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-2'>
                                <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                                <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                            </div>
                        </div>
                    ))}
                    {committe.filter(committe => committe.subtitle === 'Vice-chairman').map((commitee, index) => (
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={commitee.featured_image} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-2'>
                                <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                                <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                            </div>
                        </div>
                    ))}
                    {committe.filter(committe => committe.subtitle === 'Treasurer').map((commitee, index) => (
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={commitee.featured_image} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-2'>
                                <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                                <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                            </div>
                        </div>
                    ))}
                    {committe.filter(committe => committe.subtitle === 'Director').map((commitee, index) => (
                        <div className="col-sm-12 col-md-3">
                            <div className='d-flex justify-content-center '>
                                <img className='rounded-3 highlight-img w-100' src={commitee.featured_image} alt="Image" />
                            </div>
                            <div className='d-flex align-items-center flex-column mt-2'>
                                <h5 className='fw-semibold m-0'>{commitee.title}</h5>
                                <span className='fw-thin text-prime'>{commitee.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ backgroundColor: '#F6F5FC' }} className='mt-5 mb-5'>
                <div className="container pt-5 pb-5">
                    <div className='d-flex justify-content-between'>
                        <motion.div 
                         variants={fadeIn("right", 0.2)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.4 }}
                        className='d-flex justify-content-center flex-column'>
                            <span className='fs-6 fw-semibold text-prime'>
                                OUR EVENTS
                            </span>
                            <h3 className='fw-semibold '>Committed Towards Growths</h3>
                        </motion.div>
                        <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className='d-none d-md-block'>
                            <a href="/events" className='text-light px-3 py-2 rounded-pill text-decoration-none prime-background view-more'>VIEW ALL <FiArrowRight className='ms-1 mb-1' /></a>
                        </motion.div>
                    </div>
                    <div className="row pt-4">
                        {events.slice(0, 1).map((eventing, index) => (
                            <div key={eventing.id} className="col-sm-12 col-md-6">
                                <div className='d-flex justify-content-center '>
                                    <img className='rounded-3 w-100 highlight-img' src={eventing.featured_image} alt="Image" />
                                </div>
                                <div className='d-flex gap-2 mt-3'>
                                    <IoCalendarOutline className='text-prime' />
                                    <span className='fw-semibold lh-1'>{eventing.post_date}</span>
                                </div>
                                <div className='mt-2'>
                                    <p className='fw-semibold'>
                                        {eventing.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="col-sm-12 col-md-5 ms-md-4">
                            {events.slice(1, 4).map((eventing, index) => (
                                <div key={eventing.id} className="row mb-4">
                                    <div className="col-4">
                                        <img className='rounded-3 w-100 highlight-img' style={{ height: '140px' }} src={eventing.featured_image} alt="Image" />
                                    </div>
                                    <div className="col-8">
                                        <div className='d-flex gap-2 mt-3'>
                                            <IoCalendarOutline className='text-prime' />
                                            <span className='fw-semibold lh-1'>{eventing.post_date}</span>
                                        </div>
                                        <div>
                                            <p>
                                                {eventing.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='d-flex align-items-center flex-column'>
                    <div className='d-flex align-items-center flex-column'>
                        <motion.span
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className='fs-6 fw-semibold text-prime'>
                            VIDEOS
                        </motion.span>

                        <motion.h4 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className='fw-semibold '>
                            WATCH US IN ACTION
                        </motion.h4>
                    </div>
                </div>
                <div className="row pt-4">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="col-sm-12 col-md-6 mb-3">
                        <div className="embed-responsive" style={{ height: '300px' }}>
                            <iframe className="embed-responsive-item h-100 w-100 rounded-3" src="https://www.youtube.com/embed/8NK1qMMOXro?si=1VWJUAz4-6OC3xDb" allowFullScreen></iframe>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="col-sm-12 col-md-6 mb-3">
                        <div className="embed-responsive" style={{ height: '300px' }}>
                            <iframe className="embed-responsive-item h-100 w-100 accordion rounded-3" src="https://www.youtube.com/embed/2oXXt-8FNzc?si=56M5be004N0SYfx4" allowFullScreen></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div style={{ backgroundColor: '#F6F5FC' }} className='mt-5'>
                <div className="container pt-5">

                    <div className='d-flex align-items-center flex-column'>
                        <motion.span
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            className='fs-6 fw-semibold text-prime'>
                            Blog & News
                        </motion.span>

                        <motion.h4 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className='fw-semibold '>
                            Get Updated With Us
                        </motion.h4>
                    </div>
                    <div className="row pt-4 pb-4">

                        {blog.slice(0, 3).map((blog, index) => (
                            <div className="col-sm-12 col-md-4" key={blog.id}>
                                <div>
                                    {blog.featured_image ? (
                                        <img className='rounded-3 w-100 highlight-img' style={{ height: '300px' }} src={blog.featured_image} alt="Image" />
                                    ) : (
                                        <img className='rounded-3 w-100 highlight-img' style={{ height: '300px' }} src={Backup} alt="Backup Image" />
                                    )}
                                </div>
                                <div className='d-flex gap-2 mt-3'>
                                    <IoCalendarOutline className='text-prime' />
                                    <span className='fw-semibold lh-1'>{blog.post_date}</span>
                                </div>
                                <div className='mt-2'>
                                    <Link to={`/blog/${blog.id}`} className={`fw-semibold text-decoration-none text-dark footer-hover`} style={{ maxHeight: expanded ? 'none' : '2.4em', lineHeight: '1.2em' }}>
                                        {truncateText(blog.title, 98)}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        {blog.slice(3, 9).map((bloging, index) => (
                            <div key={bloging.id} className="col-sm-12 col-md-4">
                                <div className="row mb-4">
                                    <div className="col-4">
                                        <img className='rounded-3 w-100 highlight-img' style={{ height: '110px' }} src={bloging.featured_image} alt="Image" />
                                    </div>
                                    <div className="col-8">
                                        <div className='d-flex gap-2 mt-3'>
                                            <IoCalendarOutline className='text-prime' />
                                            <span className='fw-semibold lh-1'>{bloging.post_date}</span>
                                        </div>
                                        <div>
                                            <Link to={`/blog/${bloging.id}`} className={`fw-semibold text-decoration-none text-dark footer-hover`} style={{ maxHeight: expanded ? 'none' : '2.4em', lineHeight: '1.2em' }}>
                                                {truncateText(bloging.title, 98)}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <motion.div
                     variants={fadeIn("down", 0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.4 }}
                    className='py-5 d-flex align-items-center flex-column'>
                        <a href="/blogs" className='text-light px-3 py-2 rounded-pill text-decoration-none prime-background view-more'>VIEW ALL <FiArrowRight className='ms-1 mb-1 ' /></a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Home;
