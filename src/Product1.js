import React, { useState } from 'react';
import logo from './nike.png';
import { amddata } from './Airmaxdn/amd';
import './product1.css';

export default function Product1() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sort, setsort] = useState('low-to-high');

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? amddata
    : amddata.filter(product => product.category === selectedCategory);

  // Sort products based on the selected sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'low-to-high') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sort === 'high-to-low') {
      return parseFloat(b.price) - parseFloat(a.price);
    }
    return 0;
  });

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="nike" className="navbar-logo" />
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link"
                onClick={() => setSelectedCategory('All')}
                style={{ cursor: 'pointer' }}
              >
                All
              </a>
              <a
                className="nav-link"
                onClick={() => setSelectedCategory('Men')}
                style={{ cursor: 'pointer' }}
              >
                Men
              </a>
              <a
                className="nav-link"
                onClick={() => setSelectedCategory('Women')}
                style={{ cursor: 'pointer' }}
              >
                Women
              </a>
              <a
                className="nav-link"
                onClick={() => setSelectedCategory('Kids')}
                style={{ cursor: 'pointer' }}
              >
                Kids
              </a>

              {/* Sort Dropdown in Navbar */}
              <div style={{ marginLeft: 'auto', marginRight: 10 }}>
                <label style={{ marginRight: 10 }}>Sort by:</label>
                <select
                  onChange={(e) => setsort(e.target.value)}
                  style={{ fontFamily: 'monospace' }}
                >
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Listing */}
      <h2 className="heading1">Air Max Dn Shoes</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: 30,
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        {sortedProducts.map((item, index) => (
          <div key={index} style={{ textAlign: 'center'}}>
            <div className="box1" style={{ backgroundImage: `url(${item.image})` }} />
            <h5>{item.name}</h5>
            <h5>{item.category}</h5>
            <p>Price: {item.price}</p>
            <a style={{ cursor: 'pointer' }}>Shop</a>
          </div>
        ))}
      </div>
    </div>
  );
}
