import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function CartScreen() {
  const router = useRouter();
 
 
  

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
    
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {["Mobile","Laptop"].map((item) => (
                  <tr key={item} className="border-b">
                    <td>
                      <Link href={`/product/${item}`}>
                        <a className="flex items-center">
                          <Image
                            src="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg"
                            alt={item}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                       
                    
                      >
                      
                          <option>
                          hello
                          </option>
                          <option>
                          hello
                          </option>
                          <option>
                          hello
                          </option>
                    
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal 1200
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className="primary-button w-full"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
