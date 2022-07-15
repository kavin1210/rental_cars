// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Log from  './component/log';
import Navbar from './component/navbar';
import MainBody from './component/body';
import Sign from './component/signup';
import News1 from './component/news1';
import News2 from './component/news2';
import Button1 from './component/button1';
import Button2 from './component/button2';
import Button3 from './component/button3';
import Button4 from './component/button4';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
               


export default class App extends React.Component{
 render(){
  return(
<div>

 <BrowserRouter>
 <Routes>
  <Route path='/news1' element={<News1/>}/>
  <Route path='/news2' element={<News2/>}/>
  <Route path="/log" element = {<Log/>}/>
  <Route path='/button1' element={<Button1/>}/>
  <Route path='/button2' element={<Button2/>}/>
  <Route path='/button3' element={<Button3/>}/>
  <Route path='/button4' element={<Button4/>}/>
  <Route index element={<Navbar/>}/>
  <Route path="/signup" element={<Sign/>}/>
  <Route path='/body' element={<MainBody/>}/>
  </Routes>
  </BrowserRouter> 
  
  </div>    
    
  );
 } 
}
  


