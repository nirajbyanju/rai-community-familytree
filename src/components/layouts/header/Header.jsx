import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Logo.jpeg';
import React, { useState, useEffect } from 'react';
import { useMenuStore } from '@/store/menuStore';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState('');
  const [activeMenu, setActiveMenu] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menus = useMenuStore((state) => state.menus);
  const fetchAndSetMenus = useMenuStore((state) => state.fetchAndSetMenus);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAndSetMenus();
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching menus:', error);
        setIsLoading(false);
      }
    };

    if (menus.length === 0) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [fetchAndSetMenus, menus]);




  const toggleMenu = () => {
    setOpenDropdown(prevOpenDropdown => prevOpenDropdown === 'Menu' ? '' : 'Menu');
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  // Custom CSS to slide in the menu from the right side
  const styles = `
    @media (max-width: 992px) {
      .navbar-collapse {
        padding: 30px;
        width: 100%;
        position: absolute;
        height: auto;
        top: 70px;
        right: -20px;
        transition: transform 0.4s ease-in;
        transform-origin: top right;
        background-color: #fff;
        transform: translateX(${isMenuOpen ? '0' : '100%'});
        z-index: 9999;
      }
    }
  `;

  // Inject custom CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Clean up function to remove injected style tag
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [styles]);

  return (
    <div className="container d-lg-flex justify-content-lg-center">
      {/* {menus.map((menuItem, index) => (
          <React.Fragment key={index}>
            <Nav.Link as={Link} to={menuItem.url} className={'fw-bold fs-6'} onClick={() => handleMenuClick(menuItem.title)}>
              {menuItem.title}
            </Nav.Link>
            {menuItem.children && menuItem.children.length > 0 && (
              <NavDropdown title={menuItem.title} id={`dropdown-${index}`} className={'fw-bold fs-6'}>
                {menuItem.children.map((childItem, childIndex) => (
                  <NavDropdown.Item as={Link} to={childItem.url} key={childIndex} className={'fw-bold fs-6'}>
                    {childItem.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </React.Fragment>
        ))} */}

      <div>
        <React.Fragment>
          <Navbar expand="lg" className="" variant="light">
            <Navbar.Brand href="#">
              <img src={Logo} width="100" alt="logo Image" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
            <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
              <Nav className="ml-auto">
                {menus.map((menuItem, index) => (
                  <React.Fragment key={index}>
                    {menuItem.children && menuItem.children.length > 0 ? (
                      <NavDropdown title={menuItem.title} id={`dropdown-${index}`} className={'fw-bold fs-6'}>
                        {menuItem.children.map((childItem, childIndex) => (
                          <NavDropdown.Item as={Link} to={childItem.url} key={childIndex} className={'fw-bold fs-6'}>
                            {childItem.title}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link as={Link} to={menuItem.url} id={`dropdown-${index}`} className={'fw-bold fs-6'} onClick={() => handleMenuClick(menuItem.title)}>
                        {menuItem.title}
                      </Nav.Link>
                    )}
                  </React.Fragment>
                ))}



                {/* <NavDropdown className={'fw-bold fs-6'} title="ABOUT US" id="basic-nav-dropdown" onClick={() => handleMenuClick('Dropdown')}>
                  <NavDropdown.Item as={Link} to="/about" className={`fw-bold fs-6 ${activeMenu === 'About' ? 'active' : ''}`}>About IGDC</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/history" className={`fw-bold fs-6 ${activeMenu === 'History' ? 'active' : ''}`}>Our History</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/committee" className={`fw-bold fs-6 ${activeMenu === 'Committee' ? 'active' : ''}`}>Committee Members</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/events" className={`fw-bold fs-6 ${activeMenu === 'Events' ? 'active' : ''}`} onClick={() => handleMenuClick('Events')}>EVENTS</Nav.Link>
                <Nav.Link as={Link} to="/gallery" className={`fw-bold fs-6 ${activeMenu === 'Gallery' ? 'active' : ''}`} onClick={() => handleMenuClick('Gallery')}>GALLERY</Nav.Link>
                <Nav.Link as={Link} to="/blogs" className={`fw-bold fs-6 ${activeMenu === 'Blogs' ? 'active' : ''}`} onClick={() => handleMenuClick('Blogs')}>BLOGS & NEWS</Nav.Link>
                <Nav.Link as={Link} to="/members" className={`fw-bold fs-6 ${activeMenu === 'Members' ? 'active' : ''}`} onClick={() => handleMenuClick('Members')}>MEMBERS</Nav.Link>
                <Nav.Link as={Link} to="/contributors" className={`fw-bold fs-6 ${activeMenu === 'Contributors' ? 'active' : ''}`} onClick={() => handleMenuClick('Contributors')}>CONTRIBUTORS</Nav.Link>
                <Nav.Link as={Link} to="/contact" className={`fw-bold fs-6 ${activeMenu === 'Contact' ? 'active' : ''}`} onClick={() => handleMenuClick('Contact')}>CONTACT</Nav.Link>   */}
                <Nav.Link as={Link} to="/track" className="nav-link fw-medium px-3 py-2 mx-3 text-light rounded-5 prime-background" aria-current="page" onClick={() => handleMenuClick('Track')}>TRACK FAMILY</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Header;
