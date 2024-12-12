import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './FoodItems';
import ErrorMessage from './ErrorMessage';

// function App() {

//   let foodItems=["dal","green ","vegetable","Roti","salad","milk","Ghee"];

//   return (
    // <div>
    // <React.Fragment>

//     <>
//       <h1>Healthy Fodd</h1>
//   <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Green vegetable</li>
//   <li class="list-group-item">Roti</li>
//   <li class="list-group-item">Salad</li>
//   <li class="list-group-item">Milk</li>
// </ul>
// {/* </div> */}
// {/* </React.Fragment> */}

// </>
// );
// } 



/////////////************* MAP and  conditional rendering ***************** */


{/* <h1>Healthy Fodd</h1>
<ul className="list-group">
  {foodItems.map((item) => {
     <li className='list-group-item'>{item}</li>
  })}
</ul>
 
 </>
// by using React fragment that extra div go outside means it would not present

export default App */}


function App() {
  let foodItems = ["dal", "green vegetable", "Roti", "salad", "milk", "Ghee"];

let emptyMessage=foodItems.length===0 ? <h3>I am still hungry.</h3> : null;

    // if(foodItems.length===0){
    //    return <h3>I am still hungry</h3>
    // }

  return (
    <>
      <h1>Healthy Food</h1>
      {/* ternary operator  */}
      {/* {foodItems.length===0?<h3>I am still hungry.</h3>:null}   */}

     {/* {emptyMessage} */}
     <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;










