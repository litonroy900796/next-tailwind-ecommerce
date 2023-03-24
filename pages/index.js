import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import React from 'react';

export default function Home() {
 
  
  return (
    <Layout title="Home Page">
      <Carousel showThumbs={false} autoPlay>
        {[0,2,3,4,5].map((product) => (
          <div key={product}>
            <Link href={`/product/${product}`} passHref>
              <a className="flex">
                <img src="https://i.postimg.cc/FFCN19x6/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg" alt={product} />
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
      <h2 className="h2 my-4">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {[0,1,2,3,4,5].map((product) => (
          <React.Fragment key={product}>
            <ProductItem />

          </React.Fragment>
           
            
        ))}
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   await db.connect();
//   const products = await Product.find().lean();
//   const featuredProducts = await Product.find({ isFeatured: true }).lean();
//   return {
//     props: {
//       featuredProducts: featuredProducts.map(db.convertDocToObj),
//       products: products.map(db.convertDocToObj),
//     },
//   };
// }
