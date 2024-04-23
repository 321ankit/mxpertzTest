import { Link } from '@mui/material'
import React, { useEffect, useState } from 'react'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [Data, updateData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    fetch("https://child.onrender.com/api/sciencefiction").then((response) => {
      return response.json()
    }).then((data) => {
      updateData(data)
    })
  }, [])
  console.log(Data)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(Data.length / itemsPerPage)));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div style={{width:'100%'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', }}>
          <h3>BrainyLingo</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '2rem 15rem' }}>
            <Link ststyle={{ listStyleType: 'none' }}>Home</Link>
            <Link>Leaderboard</Link>
            <Link>Daily Quiz</Link>
            <Link>Genre</Link>
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', color: 'white', outline: 'none', backgroundImage: 'linear-gradient(to right, rgb(42, 42, 255) , rgb(0, 200, 255))'
            , padding: '0.3rem 2rem',
          }}>sign out</button>
        </div>
        <div >
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',fontWeight:'bolder' }}>Science Fiction Stories</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5rem', minHeight: '7rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', color: 'white', outline: 'none', backgroundColor: 'blue', padding: '0.5rem 3rem', }}>New</button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', color: 'white', outline: 'none', backgroundColor: 'rgb(255,208,0)', padding: '0.5rem 4rem', }}>In Progress</button>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', color: 'white', outline: 'none', backgroundColor: 'rgb(84, 253, 107)', padding: '0.5rem 4rem', }}>Completed</button>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', color: 'white', outline: 'none', backgroundImage: 'linear-gradient(to right, rgb(42, 42, 255) , rgb(0, 200, 255))'
            , padding: '0.5rem 3rem',
          }}>Clear</button>
        </div>
      </div>

      <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 5rem', backgroundColor: 'rgb(31, 5, 31)',}}>

        <div id="cards_landscape_wrap-2">
          <div className="container-fluid">
            <div className="row" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 3rem' }}>
              {Data.map((v, i) => {
                console.log(v);
                return (
                  <div key={i} className="card" style={{ width: "20%", padding: "0.5rem", backgroundImage: 'linear-gradient(to right, rgb(42, 42, 255) , rgb(0, 200, 255))', margin: '1rem', fontWeight: 'bolder' }}>
                    <img src={`https://ik.imagekit.io/dev24/${v.Image}`} alt="" />
                    <div className="card-body">
                      <p className="card-title">{v.Title}</p>
                      <button href="#" style={{ backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', outline: 'none', width: '100%', fontWeight: 'bolder' }}>{v.Status}</button>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>

        <div className="pagination" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 5rem', margin: '3rem 0 1rem 0' }}>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', outline: 'none', background: 'linear-gradient(to right, rgb(42, 42, 255) , rgb(0, 200, 255))'
            , padding: '0.5rem 3rem', width: '100px', color: 'white'
          }} onClick={prevPage} disabled={currentPage === 1}><span style={{ padding: '0 0.5rem 0 0' }}>{'<'}</span>Previous</button>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5rem', border: 'none', outline: 'none', background: 'linear-gradient(to right, rgb(42, 42, 255) , rgb(0, 200, 255))'
            , padding: '0.5rem 3rem', width: '100px', color: 'white'
          }} onClick={nextPage} disabled={currentPage === Math.ceil(Data.length / itemsPerPage)}>Next <span style={{ padding: '0 0 0 0.5rem' }}>{'>'}</span></button>
        </div>
      </div>
    </>
  )
}

export default App

