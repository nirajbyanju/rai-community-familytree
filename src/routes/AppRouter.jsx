import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import  { About } from '@/pages/About';
import  { Members } from '@/pages/Members';
import { Events } from '@/pages/Events';
import Blogs from '@/pages/Blogs';
import  BlogsDetails from '@/pages/BlogsDetails';
import { Contact } from '@/pages/Contact';
import { Contributors } from '@/pages/Contributors';
import { Gallery } from '@/pages/Gallery';
import { Committee } from '@/pages/Committee';
import { History } from '@/pages/History';
import { Track } from '@/pages/Track'; 
import { Common } from '@/pages/Common'; 
import MainLayout from '@/components/layouts/main/MainLayout'; 
import '@/assets/scss/main.scss';

export const AppRouter = () => {
    const mainLayout = (
        <MainLayout />
    )
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={mainLayout}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/members' element={<Members />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blog/:id' element={<BlogsDetails />} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/contributors' element={<Contributors  />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/committee' element={<Committee />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/track' element={<Track/>} />
                    <Route path='/common/:slug' element={<Common/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};



