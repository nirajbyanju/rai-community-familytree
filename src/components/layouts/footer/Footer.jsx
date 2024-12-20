import { useConfigStore } from '@/store/configStore';
import { useFooterMenuStore, useImportantLinkStore} from '@/store/menuStore';
import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { TiLocationArrowOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Logo.jpeg';
function Footer() {
    const config = useConfigStore((state) => state.config);
    const fetchAndSetConfig = useConfigStore((state) => state.fetchAndSetConfig);
    const currentYear = new Date().getFullYear();
    const footerMenu = useFooterMenuStore((state) => state.footerMenu);
    const fetchAndSetFooterMenu = useFooterMenuStore((state) => state.fetchAndSetFooterMenu);
    const importantLinkMenu = useImportantLinkStore((state) => state.importantLinkMenu);
    const fetchAndSetImportantLink = useImportantLinkStore((state) => state.fetchAndSetImportantLink);

    const importantLinkData = async () => {
        try {
            if (importantLinkMenu.length === 0) {
                await fetchAndSetImportantLink();
            }

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };

    const fetchData = async () => {
        try {
            if (footerMenu.length === 0) {
                await fetchAndSetFooterMenu();
            }
            if (config.length === 0) {
                await fetchAndSetConfig();
            }

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };

    useEffect(() => {
        importantLinkData();
        fetchData();
    }, [fetchAndSetFooterMenu, fetchAndSetConfig, fetchAndSetImportantLink, importantLinkMenu, footerMenu, config]);

    
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center py-5 text-light ">
                    <div className="col-md-6 col-lg-4">
                        <img src={Logo} width="100" alt="logo Image" />
                        {/* <img src={config.logo} width="120" alt="logo Image" /> */}

                        <p className='mb-4 mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dapibus nunc. Vestibulum non sem convallis, malesuada libero sit amet, pellentesque augue.
                        </p>
                        <span className='fs-4 d-flex gap-3 '>
                            <a href="" className='btn btn-primary rounded-circle d-inline-flex justify-content-center align-items-center position-relative p-2 border-0 footer-social hover-fx '>
                                <FaFacebookF className='fs-4' />
                            </a>
                            <a href="" className='btn btn-primary rounded-circle d-inline-flex justify-content-center align-items-center position-relative p-2 border-0 footer-social hover-fx '>
                                <FaTwitter className='fs-4' />
                            </a>
                            <a href="" className='btn btn-primary rounded-circle d-inline-flex justify-content-center align-items-center position-relative p-2 border-0 footer-social hover-fx '>
                                <FaInstagram className='fs-4' />
                            </a>
                            <a href="" className='btn btn-primary rounded-circle d-inline-flex justify-content-center align-items-center position-relative p-2 border-0 footer-social hover-fx '>
                                <FaLinkedin className='fs-4' />
                            </a>
                        </span>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <span className='fw-bold fs-5'>Quick Links</span>
                        <ul className="list-unstyled mt-5">
                            {footerMenu.map((menuItem, index) => (
                                <li key={index} className="mb-3 footer-hover">
                                    <Link to={menuItem.url} className="dropdown-item" onClick={() => this.handleMenuClick(menuItem.title)}>
                                        <span className='footerlink'>• {menuItem.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="col-md-6 col-lg-2">
                        <span className='fw-bold fs-5'>Important Links</span>
                        <ul className="list-unstyled mt-5">
                        
                        {importantLinkMenu.map((menuItem, index) => (
                        <Link key={index} to={menuItem.url} className="text-decoration-none text-white">
                            <li className="mb-3 footer-hover">• {menuItem.title}</li>   
                        </Link>
                         ))}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <span className='fw-bold fs-5'>Contact Us</span>
                        <ul className="list-unstyled mt-5">
                            <li className="mb-3">
                                <a className='text-decoration-none text-light' href="https://www.google.com/maps/search/?api=1&query=Dharan,%20Koshi%20Province,%20Nepal">
                                    <GrLocation className='fs-4' /> <span className='ms-2 footer-hover'>{config.site_address}</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <FiSmartphone className='fs-4' />
                                <span className='ms-2'>
                                    <a className='text-decoration-none text-light footer-hover' href="tel:{config.site_phone}">{config.site_phone}</a>
                                    <span> | </span>
                                    <a className='text-decoration-none text-light footer-hover' href="tel:01-234353">01-234353</a>
                                </span>
                            </li>

                            <li className="mb-3">
                                <a className='text-decoration-none text-light' href="mailto:info@website.com">
                                    <TiLocationArrowOutline className='fs-4' /> <span className='ms-2 footer-hover'>{config.email}</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a className='text-decoration-none text-light' href="http://www.website.com" target="_blank">
                                    <TbWorld className='fs-4' /> <span className='ms-2 footer-hover'>{config.site_info}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-black p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span>Copyright &copy; {currentYear} - {config.site_title}</span>
                    <span>Designed by -
                        <a href="https://seshra.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white footer-hover'>Seshra Innovation</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
