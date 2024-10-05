import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { getAllProductAction } from "./actions/service/productApi";

// server component
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes app</h3>
      {data?.map((prod) => {
        return <h3 key={prod.id}>
          {prod.name}
          <Link href={`/detail/${prod.id}`} className="btn btn-success" >Xem chi tiet</Link>
        </h3>
      })}
    </div>
  );
}
export default Home
