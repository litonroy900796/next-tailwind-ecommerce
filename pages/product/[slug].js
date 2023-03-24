import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

export default function ProductScreen() {
 
  

 
  return (
    <Layout title={"Iphone Mobile"}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg"
            alt="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg"
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">Iphone Mobile</h1>
            </li>
            <li>Category: Iphone</li>
            <li>Brand: Mobile</li>
            <li>
              {5} of {5} reviews
            </li>
            <li>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, minima placeat numquam eos et obcaecati, doloribus hic eum ut iusto nobis quod? Consequatur quod dolorem quisquam temporibus quia animi! Repellat?</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>120000</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{true ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

