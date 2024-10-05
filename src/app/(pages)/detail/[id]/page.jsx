import { getProductByIdAction } from '@/app/actions/service/productApi';
import React from 'react'
import Image from 'next/image';


const Detail = async (props) => {
  // props param cua server component
  const { params } = props;
  const prodDetail = await getProductByIdAction(params.id);
  console.log('data', prodDetail);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Image
            src={prodDetail.image}
            alt={prodDetail.alias}
            width={500}
            height={500}
            layout="responsive"
            quality={100}  // Giá trị từ 1 đến 100 (75 là giá trị mặc định của Next.js)
            crossOrigin={'anonymous'}  // Thuộc tính này không được hỗ trợ trực tiếp trong `next/image`
          />
          {/* <Image width={500} height={500} crossOrigin="anonymous" src={prodDetail.image} alt={prodDetail.alias} className='w-100'/> */}
        </div>
        <div className='col-md-8'>
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
    </div>
  )
}
export default Detail