import React, { useState } from "react";
import data from './data'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count);                   //typeof means number will be in string
    let amouunt = parseInt(count);

    // setting amount 

    if (amouunt <= 0){
      amouunt = 1
    }
    if (amouunt > 8){
      amouunt = 8
    }
    // for seting the value user is requesting  usue slice method is return a new copy of array and start to end
    setText(data.slice(0,amouunt));     // last is not count 
  }


  return (
    <section className="section-center">
      <h3> tried of boring ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count}     //type in number
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) =>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
