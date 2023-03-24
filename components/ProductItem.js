/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem() {
  return (
    <div className="card">
      <Link href={`/product/${"mobile"}`}>
        <a>
          <img
            src="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg"
            alt="mobile"
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${"mobile"}`}>
          <a>
            <h2 className="text-lg">Iphone Mobile</h2>
          </a>
        </Link>
        <p className="mb-2">{"IPhone"}</p>
        <p>${"1200000"}</p>
        <button
          className="primary-button"
          type="button"
          
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
