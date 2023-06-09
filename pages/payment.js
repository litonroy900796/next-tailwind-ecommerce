import { useRouter } from 'next/router';
import React from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';

export default function PaymentScreen() {
    const router = useRouter()
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form className="mx-auto max-w-screen-md" >
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id="id"
              type="radio"
             
            />

            <label className="p-2" htmlFor="id">
              1234
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push('/shipping')}
            type="button"
            className="default-button"
          >
            Back
          </button>
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

PaymentScreen.auth = true;
