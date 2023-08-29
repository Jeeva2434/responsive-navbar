import React, { useEffect, useRef, useState } from 'react';
import {links,social} from '../data';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {

    const [showList,setShowList] = useState(false); 
    const listNav = useRef(null);    


    const toggleNav = () => {
        setShowList(prev => !prev);
    }

    useEffect(()=>{
        console.log(showList);
      if(showList){
        listNav.current.classList.add('showList');
      }else{
        listNav.current.classList.remove('showList');
      }

    },[showList]);


  return (
    <nav>
        <div className='headerContainer'>
            <div className='title_wrapper'>
                <div className="title">
                    <h3>Coding <span>Addict</span></h3>
                </div>
                <div className='toggle' onClick={()=>toggleNav()}>
                    <FaBars/>
                </div>
            </div>
            <div className='navSection'ref={listNav}>
                <ul className='navList'>
                    {links.map((item)=>{
                        return (
                            <li key={item.id}>{item.text}</li>
                        )
                    })}
                </ul>
            </div>
            <ul className='socialLinks'>
                {social.map((item)=>{
                    return (
                        <li key={item.id}>{item.icon}</li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar