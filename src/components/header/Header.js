import React from 'react'
import alogo from '../../assests/image/ashokstamb.png'
import clogo from '../../assests/image/cetlogo.png';
import mlogo from '../../assests/image/Seal_of_Maharashtra.png'
import './Header.css'
const Header = () => {
  return (
    <div className='container d-sm-block'>
        <div className='d-flex'><img src={alogo} alt='ashok stamb' className='custom-max-width custom-max-height mx-5 my-3'/>
        <img src={clogo} className='custom-max-width custom-max-height mx-2 my-3'  alt="CET Logo" />
        <div className='my-4 mx-3 text-primary'><h3 className=''>GOVERNMENT OF MAHARASHTRA</h3>
        <h4 className=''>State Common Entrance Test Cell</h4>
        </div>
        <img src={mlogo} className='custom-max-width custom-max-height  mx-5 my-3 ' alt="maharashtra seal"/>
        </div>
    </div>
  )
}

export default Header