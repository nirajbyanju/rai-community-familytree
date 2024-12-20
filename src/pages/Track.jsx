import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

export const Track = () => {
  const [activeTab, setActiveTab] = useState('one'); // State to keep track of active tab

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="prime-background p-5">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <span className='fw-semibold fs-4'>TRACK FAMILY</span>
          <span className='d-flex lh-1 mt-1'>
            <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Track Family
          </span>
        </div>
      </div>
      <div className='container'>
        <div>
          <label htmlFor="">Enter Name/Identifier to search Family</label>
        </div>
        <div className="container">
          <div className="row">
            <div className="">
              <div className="card mt-3 tab-card">
                <div className="border-0 card-header">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                    <a className={`nav-link text-prime fw-semibold pointer-cursor border-bottom border-3 ${activeTab === 'one' ? 'border-blue active' : 'border-white'}`} onClick={() => handleTabChange('one')} role="tab" aria-controls="one" aria-selected={activeTab === 'one'}>Details</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link text-prime fw-semibold pointer-cursor border-bottom border-3 ${activeTab === 'two' ? 'border-blue active' : 'border-white'}`} onClick={() => handleTabChange('two')} role="tab" aria-controls="two" aria-selected={activeTab === 'two'}>Life Event</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link text-prime fw-semibold pointer-cursor border-bottom border-3 ${activeTab === 'three' ? 'border-blue active' : 'border-white'}`} onClick={() => handleTabChange('three')} role="tab" aria-controls="two" aria-selected={activeTab === 'three'}>Family Member</a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content mb-4 p-5" id="myTabContent">
                  <div className={`tab-pane fade ${activeTab === 'one' ? 'show active' : ''}`} id="one" role="tabpanel" aria-labelledby="one-tab">
                    <form>
                        <div className="row">
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >First Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >Last Name</label>
                                <input className='form-control' type="text" />
                            </div>
                        </div>
                        <div className='mt-5 d-flex flex-row-reverse'>
                            <button className='py-2 px-5 btn prime-background text-white border-none rounded-3'><IoSearchSharp className='fs-5 me-2' />Search</button>
                        </div>
                    </form>

                  </div>
                  <div className={`tab-pane fade ${activeTab === 'two' ? 'show active' : ''}`} id="two" role="tabpanel" aria-labelledby="two-tab">
                    <form>
                            <div className="row">
                                <div className='col-3'>
                                    <label htmlFor="" className='form-label fw-semibold' >Birth Year</label>
                                    <input className='form-control' type="date" />
                                </div>
                                
                            </div>
                            <div className='mt-5 d-flex flex-row-reverse'>
                                <button className='py-2 px-5 btn prime-background text-white border-none rounded-3'><IoSearchSharp className='fs-5 me-2' />Search</button>
                            </div>
                        </form>
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'three' ? 'show active' : ''}`} id="three" role="tabpanel" aria-labelledby="three-tab">
                  <form>
                        <div className="row">
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >Spouse Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >Children 1 Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >Children 2 Name</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-3'>
                                <label htmlFor="" className='form-label fw-semibold' >Father's Name</label>
                                <input className='form-control' type="text" />
                            </div>
                        </div>
                        <div className='mt-5 d-flex flex-row-reverse'>
                            <button className='py-2 px-5 btn prime-background text-white border-none rounded-3'><IoSearchSharp className='fs-5 me-2' />Search</button>
                        </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
