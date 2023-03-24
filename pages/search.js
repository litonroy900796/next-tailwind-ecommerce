
import React from 'react';

import Layout from '../components/Layout';

import ProductItem from '../components/ProductItem';

export default function Search() {

 
  return (
    <Layout title="search">
      <div className="grid md:grid-cols-4 md:gap-5">
        <div>
          <div className="my-3">
            <h2>Categories</h2>
            <select
              className="w-full"
             
            >
              <option value="all">All</option>
              
            </select>
          </div>
          <div className="mb-3">
            <h2>Brands</h2>
            <select className="w-full">
              <option value="all">All</option>
              
            </select>
          </div>
          <div className="mb-3">
            <h2>Prices</h2>
            <select className="w-full" >
              <option value="all">All</option>
            
              
            </select>
          </div>
          <div className="mb-3">
            <h2>Ratings</h2>
            <select className="w-full">
              <option value="all">All</option>
              
            </select>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              
            </div>
            <div>
              Sort by{' '}
              <select>
                <option value="featured">Featured</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Customer Reviews</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3  ">
              {[0,1,2,3,4].map((product) => (
                <React.Fragment key={product}>
                  <ProductItem />
                  
                </React.Fragment>
              ))}
            </div>
            <ul className="flex">
              {
                [1,3,4,5,6].map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                     
                      
                    >
                      {1 + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

