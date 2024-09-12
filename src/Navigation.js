import React from 'react'
import './App.css';
import logo from './nike.png';
import backgroundImage from './nike-just-do-it.jpeg';
import { data } from './data/Featured.js';
import { newsdata } from './newsctw/Newscoming.js';
import niketeamcoll from './nikecollection.jpeg'
import { csdata } from './classics/classspot.js';
import { sportdata } from './shopbysport/Shopsport.js';
import {useNavigate}   from 'react-router-dom'
export default function Navigation() {
  const navigate=useNavigate();
  const navigatetoprod=()=>{
    navigate('/Product1')
  };
  const handleNavigation = (link) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} alt='nike' className='navbar-logo'/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" href="#" style={{cursor:'pointer'}}>
          New&Featured
        </a>
        <a className="nav-link" href="#" style={{cursor:'pointer'}}>
          Men
        </a>
        <a className="nav-link" href="#" style={{cursor:'pointer'}}>
          Women
        </a>
        <a className="nav-link" href="#" style={{cursor:'pointer'}}>
          Kids
        </a>
        <a className="nav-link" href="#" style={{cursor:'pointer'}}>
          SNKRS
        </a>
       </div>
    </div>
  </div>
</nav>
<div className='background-image-container'>
<img src={backgroundImage} className='background-image'/>
</div>

<h5 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Nike Pegasus 41</h5>
<h2 className='heading1'>Featured</h2>
<div style={{display:'flex',justifyContent:'flex-start',marginLeft:30,overflowX:'auto',cursor:'pointer'}}>
{data.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div 
              className='box1' 
              style={{ backgroundImage: `url(${item.image})` }}>
            </div>
            <h5>{item.title}</h5>
            <a href='#' style={{cursor:'pointer'}} onClick={()=>handleNavigation(item.link)}>Shop</a>
          </div>
        ))}
      </div>
      <h2 className='heading2'>News In This Week</h2>
      <div style={{display:'flex',justifyContent:'flex-start',marginLeft:30,overflowX:'auto',cursor:'pointer'}}>
{newsdata.map((item1, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div 
              className='box1' 
              style={{ backgroundImage: `url(${item1.image})` }}>
            </div>
            <h5>{item1.name}</h5>
            <h5 style={{color:'gray'}}>{item1.title}</h5>
            <h5>MRP:{item1.price}</h5>
          </div>
        ))}
      </div>
      <h2 className='heading2'>Don't Miss</h2>
      <div className='background-image-container'>
<img src={niketeamcoll} className='background-image' style={{marginTop:50}}/>
</div>
<h6 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>Nike Football</h6>
<h1 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10,fontSize:80,fontFamily:'"Helvetica Now Text Medium", Helvetica, Arial, sans-serif',fontWeight:500}}>2024 NATIONAL TEAM</h1>
<h1 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10,fontSize:80,fontFamily:'"Helvetica Now Text Medium", Helvetica, Arial, sans-serif'}}>COLLECTIONS</h1>
<h5 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>Featuring Dri-Fit ADV and built for the moments that matters most.</h5>
<button style={{borderRadius:'15%',backgroundColor:'black',color:'white',fontSize:20,marginLeft:700,marginTop:20,cursor:'pointer'}}>Shop</button>
<h2 className='heading2'>Classics Spotlight</h2>
<div style={{display:'flex',justifyContent:'flex-start',marginLeft:30,overflowX:'auto',cursor:'pointer'}}>
{csdata.map((item2, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div 
              className='box1' 
              style={{ backgroundImage: `url(${item2.image})` }}>
               < h1 style={{color:'black',marginTop:430,marginRight:10,fontFamily:'"Helvetica Now Text Medium", Helvetica, Arial, sans-serif'}}>{item2.name}</h1>
            </div>
            
          </div>
        ))}
      </div>
      <h2 className='heading2'>Shop by Sport</h2>
      <div style={{display:'flex',justifyContent:'flex-start',marginLeft:30,overflowX:'auto',cursor:'pointer'}}>
{sportdata.map((item3, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div 
              className='box1' 
              style={{ backgroundImage: `url(${item3.image})` }}>
            </div>
            <h5 >{item3.name}</h5>
            <h5 style={{color:'gray'}}>{item3.title}</h5>
            <a href={item3.link} style={{cursor:'pointer'}}>Shop</a>
          </div>
        ))}
      </div>
    </div>
    
  );
}

      
  

