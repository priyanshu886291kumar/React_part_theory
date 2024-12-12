//*************** part20() */


// Conditional Rendering in React (Short Explanation)
// What is it?
// Conditional rendering means showing different content based on whether a condition is true or false. It makes apps interactive and dynamic.

// Methods of Conditional Rendering
// If-Else Statements
// Used to display one of two blocks of content.

// jsx
// Copy code
// function App() {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <div>Welcome Back!</div>;
//   } else {
//     return <div>Please Log In</div>;
//   }
// }
// export default App;
// Output:

// If isLoggedIn is true: "Welcome Back!"
// If isLoggedIn is false: "Please Log In"
// Ternary Operator (condition ? trueBlock : falseBlock)
// A shorthand way to decide between two options.

// jsx
// Copy code
// function App() {
//   const isSuccess = true;

//   return (
//     <div>
//       {isSuccess ? <div>Congratulations!</div> : <div>Error, try again.</div>}
//     </div>
//   );
// }
// export default App;
// Output:

// If isSuccess is true: "Congratulations!"
// If isSuccess is false: "Error, try again."
// Logical Operator (&&)
// Renders content only if the condition is true.

// jsx
// Copy code
// function App() {
//   const showMessage = true;

//   return (
//     <div>
//       {showMessage && <div>You have a new message!</div>}
//     </div>
//   );
// }
// export default App;
// Output:

// If showMessage is true: "You have a new message!"
// If showMessage is false: Nothing is displayed.
// Benefits of Conditional Rendering:
// Dynamic UI: Makes your app change based on user interaction.
// Efficiency: Prevents unnecessary rendering of content.
// Better UX: Tailors the app’s content to specific conditions.
// Summary:
// Use if-else, ? :, or && to control what gets displayed. Choose the method based on the complexity of your condition.


































//******************** part21(passing data via pops) */


// Why Props Exist and What They Do in React
// 1. What Props Do:
// Props (short for "properties") allow parent components to send data to child components. They act like arguments passed to a function.

// For example:

// If your app needs to display user information like a name or age in multiple places, you can create one reusable component and pass different data to it using props.
// 2. Why Props Were Introduced:

// Reusability: Instead of creating multiple similar components, we pass different data to the same component using props.
// Dynamic Behavior: Props make components adaptable by changing the data they display based on the input.
// Separation of Concerns: Parents handle the logic, while children focus on rendering.
// 3. Why We Use Props:

// To customize components without rewriting them.
// To create dynamic user interfaces where content changes based on input.
// To enable data communication between components (parent-to-child).
// Example to Understand
// Suppose you have a component that shows a product name and price. Without props, you'd need separate components for each product:




// jsx
// Copy code
// function App() {
//   return (
//     <div>
//       <Product1 />
//       <Product2 />
//     </div>
//   );
// }

// function Product1() {
//   return <h1>Product: Laptop | Price: $1000</h1>;
// }

// function Product2() {
//   return <h1>Product: Phone | Price: $500</h1>;
// }
// This approach is repetitive and hard to manage.






// With Props:

// jsx
// Copy code
// function App() {
//   return (
//     <div>
//       <Product name="Laptop" price={1000} />
//       <Product name="Phone" price={500} />
//     </div>
//   );
// }

// function Product(props) {
//   return <h1>Product: {props.name} | Price: ${props.price}</h1>;
// }


// What is happening?
// The App component sends data (name and price) to the Product component using props.
// The Product component displays the data dynamically.
// Output:

// Product: Laptop | Price: $1000
// Product: Phone | Price: $500

// Key Benefits:
// Reusable Components: You write one Product component but can reuse it with different data.
// Dynamic Behavior: You can render different outputs by just changing the props passed to a component.
// Cleaner Code: Props make your code organized and efficient.
// Props are a foundation for component communication in React. Without them, building flexible and reusable components would be much harder!




// one example with props

// import React from "react";

// function App() {
//   return (
//     <div>
//       {/* Passing name and age as props */}
//       <UserInfo name="John Doe" age={25} />
//       <UserInfo name="Jane Smith" age={30} />
//       <UserInfo name="Alice Johnson" age={22} />
//     </div>
//   );
// }

// // Reusable component that receives props
// function UserInfo(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Age: {props.age}</h3>
//       <hr />
//     </div>
//   );
// }

// export default App;







