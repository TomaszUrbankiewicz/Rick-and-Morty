
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Heading from './Heading';
import Pagination from './Pagination';

function App() {
  const [ page, setPage ] = useState(1);
  const [ search_value, setSearch_value ] = useState('')
  const [ select_value, setSelect_value ] = useState('')
  const [quantity_page, setQuantity_page] = useState(1)


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res =>  res.json()
      )
      .then(res => {
        console.log(res)
        setQuantity_page(res.info.pages)
      })
      .catch(error => {
          console.error(error)
      });
  },[page])
  
  useEffect(() => {
    handleFiltration()
  },[select_value])

  const handleFiltration = () => {
    let name = search_value.toUpperCase()
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&species=${select_value}`)
    .then(res =>  res.json()
    )
    .then(res => {
      console.log(res)
    })
    .catch(error => {
        console.error(error)
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()  
    handleFiltration ()
  }

  const handleChangePage = (e,value) => {
    setPage(value)
  }
  const changeValue = (e) => {
    if(e.target.name == 'search' ){
      setSearch_value(e.target.value)
    }
    if(e.target.name == 'select' ){
      setSelect_value(e.target.value)
    }
  }

    return (
      <>
        <div className='page_content'>
            <div className='page_content__wrapper'>
              <Heading 
                search_value={search_value} 
                select_value={select_value}
                changeValue={changeValue}
                handleSubmit={handleSubmit}
              />
              <div className='pagination'>
                <Pagination page={page} handleChangePage={handleChangePage} quantity_page={quantity_page}/>
              </div>
            </div>
        </div>
      </>
    );
  }



ReactDOM.render(<App id='ap' name="page"/>, document.getElementById('app'));