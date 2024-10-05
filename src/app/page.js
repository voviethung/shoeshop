import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { getAllProductAction } from "./actions/service/productApi";

// SEO bang Metadata
export const metadata = {
  title: "Shoes App - Home",
  description: "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description: "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoeshop-teal.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description: "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd:{
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Shoes App",
    "url": "https://yourwebsite.com",
    "description": "Explore our wide range of shoes with the best prices and quality.",
    "image": "https://yourwebsite.com/images/og-image.jpg",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}
// server component
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        {data?.map((prod) => {
          return <div className="col-4 mt-2" key={prod.id}>
            <div className="card">
              <Image src={prod.image} alt={prod.name} crossOrigin="anonymous" width={500} height={500} className="w-100" />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <p>{prod.shortDescription}</p>
                <Link href={`/detail/${prod.id}`} className="btn btn-success" >Xem chi tiet</Link>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  );
}
export default Home
