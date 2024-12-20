import React, { useState, useEffect } from 'react';
import { CiHome } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { fetchFiscal } from '@/api/fiscalApi';
import { fetchMembership } from '@/api/memberApi';

export const Members = () => {
    const [fiscal, setFiscal] = useState([]);
    const [memberships, setMemberships] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFiscalYear, setSelectedFiscalYear] = useState('');

    const fetchData = async () => {
        try {
            const fiscalData = await fetchFiscal();
            setFiscal(fiscalData);
        } catch (error) {
            console.error('Error fetching Fiscal:', error);
        }
    };

    const fetchMembershipsData = async () => {
        try {
            const membershipData = await fetchMembership();
            setMemberships(membershipData);
        } catch (error) {
            console.error('Error fetching membershipData:', error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchMembershipsData();
    }, []);

    const filteredMemberships = memberships.filter(member => {
        const isNameMatch = member.member.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isFiscalYearMatch = selectedFiscalYear === '' || member.fiscal_year_id.toString() === selectedFiscalYear;
        return isNameMatch && isFiscalYearMatch;
    });

    return (
        <div>
            <div className="prime-background p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-white">
                    <span className='fw-semibold fs-4'>MEMBERS</span>
                    <span className='d-flex lh-1 mt-1'> <CiHome />  <Link to="/" className="ms-1 text-white text-decoration-none ">Home</Link>&nbsp; /&nbsp; Member</span>
                </div>
            </div>
            <div className="container my-5">
                <div className="row d-flex justify-content-between ">
                    <div className="col-6 col-md-3">
                        <div className="input-group position-relative">
                            <input className="form-control rounded-pill" type="search" placeholder='Search Member' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <span className="input-group-append position-absolute top-50 translate-middle-y end-0">
                                <span className="input-group-text border-0">
                                    <IoSearch />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <select className="form-select rounded-pill" aria-label="Default select example" onChange={(e) => setSelectedFiscalYear(e.target.value)}>
                            <option value=''>All Fiscal Years</option>
                            {fiscal.map((fiscal, index) => (
                                <option key={index} value={fiscal.id.toString()}>{fiscal.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className='prime-background d-flex justify-content-between px-4 py-2 rounded-3'>
                            <p className='text-white m-0'>Member Name</p>
                            <p className='text-white m-0'>Status</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                        <div className='prime-background d-flex justify-content-between px-4 py-2 rounded-3'>
                            <p className='text-white m-0'>Member Name</p>
                            <p className='text-white m-0'>Status</p>
                        </div>
                    </div>
                </div>
                <div className="container mb-3 mt-3">
                    <div className="row">
                        {filteredMemberships.map((membership, index) => (
                            <div className="col-sm-12 col-md-6" key={index}>
                                <div className='border-bottom d-flex justify-content-between pb-2 mb-2'>
                                    <p className='p-0 m-0'>{membership.member.name}</p>
                                    <span
                                        className={`bg-${membership.status === 'unpaid' ? 'danger' : 'info'} rounded-3 px-3 d-flex justify-content-center`}
                                        style={{ width: '70px' }}
                                    >
                                        {membership.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;
