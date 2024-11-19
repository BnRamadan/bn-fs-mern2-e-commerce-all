//  ! 🔥 💪🏻 Bn Ramadan fullstack MERN project 2 ( E-commerce fullstack app )
//  ! " The end of this project is the completing of future successes and creativity , Just strive, be patient, commit and keep going. "
//  ! 🔥 💪🏻 Always forward ! 💪🏻 🔥
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
