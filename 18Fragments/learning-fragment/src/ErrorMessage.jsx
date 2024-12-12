

const ErrorMessage= () =>{
  let foodItems = ["dal", "green vegetable", "Roti", "salad", "milk", "Ghee"];


 return <>  {foodItems.length===0 && <h3>I am still hungry.</h3>}</>;
};

export default ErrorMessage;