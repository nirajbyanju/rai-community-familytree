import React, { useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { useState } from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useConfigStore } from '@/store/configStore';

export const Contact = () => {
    const config = useConfigStore((state) => state.config);
    const fetchAndSetConfig = useConfigStore((state) => state.fetchAndSetConfig);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                await fetchAndSetConfig();
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching config:', error);
                setIsLoading(false);
            }
        }
        if (config.length === 0) {
            fetchData();
        } else {
            setIsLoading(false);
        }
    }, [config, fetchAndSetConfig]);

    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log(formData);
    };

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className="prime-background p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span className='fw-semibold fs-4'>CONTACT US</span>
                    <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Events</span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9 mb-3">
                        <h2 className="heading pb-2 text-prime">Contact Us</h2>
                        <form className="contact-us-form" onSubmit={handleSubmit}>
                            <div className='mt-3 form-group'>
                                <label htmlFor="fullName" className="form-label fw-semibold">Your Full Name</label>
                                <input
                                    className="form-control bg-light"
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="contactNumber" className="form-label fw-semibold">Contact Number</label>
                                <input
                                    className="form-control bg-light"
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="emailAddress" className="form-label fw-semibold">Email Address</label>
                                <input
                                    className="form-control bg-light"
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="message" className="form-label fw-semibold">Your Message, Queries, Feedback or Concern</label>
                                <textarea
                                    rows="6"
                                    className="form-control bg-light"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            

                            <div className="contact-us-form-btn-wrapper mt-4 d-flex flex-row-reverse">
                                <button type="submit" className="btn prime-background text-white contact-us-form-btn rounded-pill ">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-3">
                        <div className="p-4 rounded-3 " style={{ backgroundColor: '#F6F5FC' }}>
                            <p className="contact-us-card-heading text-prime fw-bold fs-4 mb-2">Contact Details</p>
            
                            <ul className="list-unstyled m-0">
                                <li className="d-flex gap-2 mb-3">
                                    <IoLocationOutline className='fw-semibold fs-5' />
                                    <span className='lh-1 fw-semibold fs-6'>{config.site_address}</span>
                                </li>

                                <li className="d-flex gap-2 mb-3">
                                    <IoCallOutline className='fw-semibold fs-5' />
                                    <span className='lh-1 fw-semibold fs-6'>{config.site_phone}</span>
                                </li>

                                <li className="d-flex gap-2 mb-3">
                                    <MdOutlineMailOutline className='fw-semibold fs-5' />
                                    <span className='lh-1 fw-semibold fs-6'>{config.email}</span>
                                </li>

                                <li className="d-flex gap-2 mb-3">
                                    <TbWorld className='fw-semibold fs-5' />
                                    <span className='lh-1 fw-semibold fs-6'>{config.site_info}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-3 prime-background mt-4">
                            <div className='d-flex gap-3'>
                                <div><FiPhoneCall className='text-white fs-1 '/></div>
                                <div>
                                    <span className='text-white fs-5 fw-semibold lh-1'>Emergency Contact</span>
                                    <p className='text-white fs-6 lh-1'>We Are Ready to Help You</p>
                                </div>
                            </div>
                            <p className='text-white fw-bold fs-3'>{config.site_phone}</p>
                        </div>
                        <div className="p-4 rounded-3 mt-4" style={{ backgroundColor: '#F6F5FC' }}>
                            <span className='text-prime fw-bold fs-6'>Follow Us</span>
                            <div className='d-flex gap-3 mt-2'>
                                <div className='bg-white rounded-circle d-flex justify-content-center align-items-center p-2'>
                                    <RiFacebookFill />
                                </div>
                                <div className='bg-white rounded-circle d-flex justify-content-center align-items-center p-2'>
                                    <FaTwitter />
                                </div>
                                <div className='bg-white rounded-circle d-flex justify-content-center align-items-center p-2'>
                                    <FaYoutube />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56971.3897011758!2d87.2313086151303!3d26.817302005779553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41798ff9d44d%3A0xc7ee029038b68f39!2sBudhasubba%20Temple!5e0!3m2!1sen!2snp!4v1713780599742!5m2!1sen!2snp"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Budhasubba Temple"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

