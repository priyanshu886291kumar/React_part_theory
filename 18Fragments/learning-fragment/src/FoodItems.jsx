
function foodItems(){
  let foodItems = ["dal", "green vegetable", "Roti", "salad", "milk", "Ghee"];

return (
<ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
);
}
      export default foodItems;