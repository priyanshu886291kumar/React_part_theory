
// first way
// This file contains one default export, the KgButton.



function KgButton(){
  return <button>subscribe  this video</button>
}

// export default KgButton;

// 2nd way(called multiple named exports)

// export function KgButton(){
//   return <button>subscribe  this video</button>
// }


//******************* part1 ****************** */

// 3. Component.js
// This file contains one default export, the KgButton.

// javascript
// Copy code
// export default function KgButton() {
//   return <button>Subscribe to this video</button>;
// }











 //***************** part2 *************** */
// 2. MixedComponents.js
// This file exports one default component (FriendsList) and one named component (Avatar).

// code
// Named export: Avatar
// export function Avatar() {
//   return <img src="https://via.placeholder.com/150" alt="Avatar" />;
// }

// // Default export: FriendsList
// export default function FriendsList() {
//   return <ul>
//     <li>Friend 1</li>
//     <li>Friend 2</li>
//     <li>Friend 3</li>
//   </ul>;
// }





//***************** part3 *************** */




// 1. Enables the use of a component in other parts.
// 2. Default Export: Allows exporting a single component as the default
// from a module.
// 3. Named Export: Allows exporting multiple items from a module.

// A Imnorting: To use an exported component, you need to import it in the destination  file using import syntax