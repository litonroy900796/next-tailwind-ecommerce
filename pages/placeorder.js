import Image from 'next/image';
import Link from 'next/link';

import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';

export default function PlaceOrderScreen() {
  

  
  
 
  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">Place Order</h1>
  
        
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {"Liton Roy"}, {"Dhaka , Bangladesh"},{' '}
                {"Bangladesh"}, {"5100"},{' '}
                
              </div>
              <div>
                <Link href="/shipping">Edit</Link>
              </div>
            </div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div>{"Bikas"}</div>
              <div>
                <Link href="/payment">Edit</Link>
              </div>
            </div>
            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr  className="border-b">
                      <td>
                        <Link href={`/product/${"12"}`}>
                          <a className="flex items-center">
                            <Image
                              src="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg"
                              alt="image"
                              width={50}
                              height={50}
                            />
                            &nbsp;
                            Iphone
                          </a>
                        </Link>
                      </td>
                      <td className=" p-5 text-right">0</td>
                      <td className="p-5 text-right">120000</td>
                      <td className="p-5 text-right">
                       12
                      </td>
                    </tr>
                
                </tbody>
              </table>
              <div>
                <Link href="/cart">Edit</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>20000</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>120</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>150</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>120000</div>
                  </div>
                </li>
                <li>
                  <button
                    
                    className="primary-button w-full"
                  >
                    {'Place Order'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
    </Layout>
  );
}

PlaceOrderScreen.auth = true;
