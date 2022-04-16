
import { useState } from 'react';
import './App.css';

function App() {

const [tip, setTip] = useState(0);
const [value, setValue] = useState(0);
const [people, setPeople] = useState(1);



 
const b5 = () =>{
  setTip(0.05);
}
const b10= () =>{
  setTip(0.1);
}
const b15= () =>{
  setTip(0.15);
}
const b25= () =>{
  setTip(0.25);
}
const b50= () =>{
  setTip(0.5);
}

const reset= () =>{
  setTip(0);
}


const getBill = (val) => {
  setValue(val.target.value);
}

const getPeople = (ef) => {
  setPeople(ef.target.people);
}
const getValues= (event) => {
    const target = event.target;
   
    if(target.name === 'isBill'){
      setValue(target.value);
    }
    if(target.name === 'isCustom'){
      setTip(target.value/100);}
    if(target.name === 'isPeople'){
      setPeople(target.value);}
}



  return (
    <div className="font-SpaceMono bg-Lightgrayishcyan" >
      <header className='m-8 text-center md:m-16 text-Darkgrayishcyan'>
            <p>SPLI</p>
            <p>TTER</p>
      </header>
      <div className='container flex flex-wrap w-full max-w-screen-lg gap-6 p-6 mx-auto place-content-center bg-White rounded-2xl'>
        <div className='p-6 izquierda md:basis-1/2 rounded-3xl grow-0 text-Grayishcyan'>
          
          <h3> Bill </h3>
          <input name="isBill" className='w-11/12 p-2 m-5 text-2xl text-right rounded-md bg-Verylightgrayishcyan text-Verydarkcyan' type="number" onChange={getValues}></input>
          <h3>Select Tip %</h3>
          <div className='grid grid-cols-3 gap-5 m-5 text-2xl font-black w-100'>
            <button className='p-2 rounded bg-Verydarkcyan text-White hover:bg-Strongcyan hover:text-Verydarkcyan' onClick={b5} > 5% </button>
            <button className='p-2 rounded bg-Verydarkcyan text-White hover:bg-Strongcyan hover:text-Verydarkcyan' onClick={b10}> 10% </button>
            <button className='p-2 rounded bg-Verydarkcyan text-White hover:bg-Strongcyan hover:text-Verydarkcyan'onClick={b15} > 15% </button>
            <button className='p-2 rounded bg-Verydarkcyan text-White hover:bg-Strongcyan hover:text-Verydarkcyan' onClick={b25}> 25% </button>
            <button className='p-2 rounded bg-Verydarkcyan text-White hover:bg-Strongcyan hover:text-Verydarkcyan' onClick={b50} > 50% </button>
            <input  name="isCustom" className='text-center rounded-md bg-Verylightgrayishcyan text-Verydarkcyan' type="number" onChange={getValues}></input>
          </div>
          <h3>Number of People</h3>

            <div>
            <input  name="isPeople" className='w-11/12 p-2 m-5 text-2xl text-right rounded-md bg-Verylightgrayishcyan text-Verydarkcyan' type="number" onChange={getValues}></input>
            
            </div>
         
        </div>

        <div className='flex flex-col justify-between flex-1 h-auto p-8 md:flex-auto derecha basis-1/2 rounded-2xl bg-Verydarkcyan text-si' >

          <div className='flex flex-row'>
                        <div className='basis-1/2'>
                          <div className='flex flex-col my-3'>
                            <div className='my-4'>
                                <h3 className='text-xs text-White'>Tip Amount</h3>
                                <p className='m-0 text-xs text-Darkgrayishcyan'>/ person</p>
                              </div>
                            <div className='my-4'>
                              <h3 className='text-xs text-White'>Total</h3>
                              <p className='m-0 text-xs text-Darkgrayishcyan'>/ person</p>
                            </div>
                          </div>
                        </div>
                <div className='text-right basis-3/4' >
                  <p className='my-6 text-4xl font-bold text-Strongcyan '>{(value/people*(tip)).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
                  <p className='my-6 text-4xl font-bold text-Strongcyan'>{(value/people*(1+tip)).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
                </div>

          </div>
          
          <button className='w-11/12 gap-5 p-2 mx-auto text-xl uppercase rounded bg-Strongcyan hover:bg-Lightgrayishcyan text-Verydarkcyan' onClick={reset}> Reset </button>
         
        </div>



      </div>

    </div>
  );
}

export default App;
