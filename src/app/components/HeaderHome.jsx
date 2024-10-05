"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

const HeaderHome = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
    // bs5-navbar-background
  return (
 <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <link className="navbar-brand" href="/"/>Cybersoft
  {/* <p>{keyword}</p> */}
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <link className="nav-link active" href="/" aria-current="page" />Home <span className="visually-hidden">(current)</span>
      </li>
      <li className="nav-item">
        <link className="nav-link" href="/login" />Login
      </li>
      <li className="nav-item dropdown">
        <link className="nav-link dropdown-toggle" href="/register" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />Register
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0"onSubmit={(e)=>{
      router.push(`/search?keyword=${keyword}`)
    }}>
      <input onChange={(e)=>{
        setKeyword(e.target.value);
      }}  className="form-control me-sm-2" type="text" placeholder="Search" />
      <Link href={`/search?keyword=${keyword}`} className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </Link>
    </form>
  </div>
</nav>
)
}

export default HeaderHome