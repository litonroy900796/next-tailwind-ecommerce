import Link from 'next/link';
import React  from 'react';
import Layout from '../components/Layout';


function OrderHistoryScreen() {
 

 
  return (
    <Layout title="Order History">
      <h1 className="mb-4 text-xl">Order History</h1>
     
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">ID</th>
                <th className="p-5 text-left">DATE</th>
                <th className="p-5 text-left">TOTAL</th>
                <th className="p-5 text-left">PAID</th>
                <th className="p-5 text-left">DELIVERED</th>
                <th className="p-5 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
            
                <tr  className="border-b">
                  <td className=" p-5 ">123</td>
                  <td className=" p-5 ">223</td>
                  <td className=" p-5 ">123</td>
                  <td className=" p-5 ">
                 
                  </td>
                  <td className=" p-5 ">
                   
                  </td>
                  <td className=" p-5 ">
                    <Link href={`/order/${"12"}`} passHref>
                      <a>Details</a>
                    </Link>
                  </td>
                </tr>
            
            </tbody>
          </table>
        </div>
    
    </Layout>
  );
}

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
