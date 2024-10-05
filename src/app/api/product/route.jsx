// file backend: api route la cach tao api tren backend
import { NextResponse } from "next/server";


export async function GET(req) {
    // console.log(req)
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const keyword = params.get('keyword');
    console.log(keyword);
    // ket noi database bang Connectionstring....̣select, from, wwhere   
    // const res = [{id:1, name: 'Nam'}, {id:2, name: 'Thinh'}, {id:3, name: 'Khang'}];
    // tu backend nextjs => ket noi den backend cua apistore.cybersoft.vn
    let uri = 'https://apistore.cybersoft.edu.vn/api/Product'
    if(keyword) {
        uri = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`;
    }
    const res = await fetch(uri);
    if(!res.ok){
        return new Error('fail to fetch data');
    }
    const data = await res.json();
    return NextResponse.json(data, { status:200});
}
export async function POST() {
    
}
export async function PUT() {
    
}
export async function DELETE() {
    
}