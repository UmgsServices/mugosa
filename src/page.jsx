import './index.css'
import Main from './Home/Home';
import Cars from './cars/Cars';
import Header from "./header"
import Footer from "./footer"
import { useState,useEffect } from 'react'; 
import requestApi from './requestApi';
import {Navigate, Route, Routes,useNavigate} from 'react-router-dom';
import AboutCar from './Home/about_cars';
import ContactUs from './Home/contact';
import Coming from './coming';

function Page({loginData,setPage}){

  return<>
   <Header
   loginData={loginData}
   setPage={setPage}
   />
  <div className="app">
    <Routes>
      <Route path='/Home/Home'
      element={<Main
      
      />}
      >
      </Route>
      <Route path='/Home/about_cars'
      element={<AboutCar/>}
      >
      </Route>
      <Route path='/Home/contact'
      element={<ContactUs
      loginData={loginData}
      setPage={setPage}
      />}
      >
      </Route>
      <Route path='/cars/Cars'
      element={<Cars/>}
      >
      </Route>
      
      <Route path='/coming'
      element={<Coming/>}
      >
      </Route>
    </Routes>
  </div> <Footer/></>;
  }
export default Page;

