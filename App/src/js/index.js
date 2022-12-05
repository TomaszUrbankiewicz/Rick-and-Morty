
import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Heading from './Heading';


function App() {
    return (
      <>
        <div className='page_content'>
            <div className='page_content__wrapper'>
              <Heading/>

            </div>
        </div>
      </>
    );
  }



ReactDOM.render(<App id='ap' name="page"/>, document.getElementById('app'));