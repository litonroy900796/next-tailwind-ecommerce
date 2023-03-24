import Link from 'next/link';

import Layout from '../components/Layout';


export default function LoginScreen() {
 
  return (
    <Layout title="Create Account">
      <form
        className="mx-auto max-w-screen-md"
        
      >
        <h1 className="mb-4 text-xl">Create Account</h1>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            
          />
         
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            
            className="w-full"
            id="email"
          ></input>
         
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            
            className="w-full"
            id="password"
            autoFocus
          ></input>
          
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
           
          />
         
        </div>

        <div className="mb-4 ">
          <button className="primary-button">Register</button>
        </div>
        <div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <button>Register</button>
        </div>
      </form>
    </Layout>
  );
}
