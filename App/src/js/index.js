import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Heading from './Heading';
import Pagination from './Pagination';
import Table from './Table';

function App() {
  const [ page, setPage ] = useState(1);
  const [quantity_page, setQuantity_page] = useState(1);
  const [search_value, setSearch_value] = useState('');
  const [select_value, setSelect_value] = useState('');
  const [api_answer, setApi_answer] = useState(null);
  const [error, setError] = useState('');
  const [activ, setActiv] = useState(false)

  useEffect(() => {
    listDownload()
  },[]);
  useEffect(() => {
    if(activ){
      handleFiltration();
    }
  },[select_value]);

  const listDownload = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res =>  res.json()
    )
    .then(res => {
      if(res.info){
        setQuantity_page(res.info.pages);
        setApi_answer(res);
      }
      else{
        setError('Problem retrieving information');
      }
    })
    .catch(error => {
        console.error(error)
        setError('No connection to the API');
    });
  }
  const handleFiltration = () => {
    let name = search_value.toUpperCase();
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&species=${select_value}`)
    .then(res => {
      console.log(res)
      if(res.status == 200){
        return res.json()
      }else{
        setError("didn't find any characters")
        listDownload();
        setSearch_value('');
        setSelect_value('');
      }
    }
    )
    .then(res => {
    if(res != undefined){
      setPage(1)
      setError(`The number of characters found: ${res.info.count}`);
      setQuantity_page(res.info.pages);
      console.log(res)
    }
    })
    .catch(error => {
      listDownload();
      setSearch_value('');
      setSelect_value('');
      setError('No connection to the API');
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFiltration ();
  };
  const handleChangePage = (e,value) => {
    setPage(value);
    listDownload()
  };
  const changeValue = (e) => {
    setActiv(true)
    if(e.target.name == 'search' ){
      setSearch_value(e.target.value);
    };
    if(e.target.name == 'select' ){
      setSelect_value(e.target.value);
    };
  };

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
              {(api_answer != null) && <Table api_answer={api_answer} />}
              <div className='pagination'>
                <Pagination page={page} handleChangePage={handleChangePage} quantity_page={quantity_page}/>
              </div>
            </div>
        </div>
      </>
    );
  }



ReactDOM.render(<App id='ap' name="page"/>, document.getElementById('app'));