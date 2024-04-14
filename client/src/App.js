import './App.css';

import { useState } from 'react';
import  { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'; 
import { Header } from './component/header/Header';

import Login from './component/account/login';
import DataProvider from './context/DataProvider';
import Home from './component/home/Home';
import CreatePost from './component/create/CreatePost';
import DetailView from './component/details/DetailView';
import Update from './component/create/Update';
import About from './component/about/About';
import Contact from './component/contact/Contact';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
    <>
      <Header />
      <Outlet />
    </>

  : <Navigate replace to='/login' />
};

function App() {
  const [ isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{marginTop: 64}}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            {/* <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}> */}
            <Route path='/' element={
            <>
              <Header />
              <Home />
            </>} 
            />
            {/* </Route> */}
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path='/create' element={<CreatePost />} />
            </Route>
            {/* <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}> */}
            <Route path='/details/:id' element={
            <>
              <DetailView />
              <Header />
            </>} 
            />
            {/* </Route> */}
            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path='/update/:id' element={<Update />} />
            </Route>
            <Route path='/about' element={
            <>
              <About />
              <Header />
            </>} 
            />
            <Route path='/contact' element={
            <>
              <Contact />
              <Header />
            </>}
            />        
          </Routes>
        </div>
      </BrowserRouter>
      
    </DataProvider>
  );
}

export default App;
