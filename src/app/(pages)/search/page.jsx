import React from 'react';
import Link from 'next/link';
import { getProductByKeywordAction } from '@/app/actions/service/productApi';
import Image from 'next/image';

const Search = async (props) => {
    const keyword = props.searchParams.keyword || '';
    console.log('keyword', keyword);
    const data = await getProductByKeywordAction(keyword);

    return (
        <div className='container'>
            <h3>Ket qua tim kiem ({data.length})</h3>
            <div className='row'>
                {data.map((prod) => {
                    return (
                        <div className='col-md-4' key={prod.id}>
                            <div className='card'>
                                <Image
                                    src={prod.image}
                                    alt={prod.alias}
                                    quality={100}
                                    layout='responsive'
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }} // Thêm style trực tiếp
                                    crossOrigin={'anonymous'}
                                />
                                <div className='card-body'>
                                    <h3>{prod.name}</h3>
                                    <h3>{prod.price}</h3>
                                    <Link href={`/detail/${prod.id}`} className='btn btn-success'>Xem chi tiet</Link>
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    )
}

export default Search