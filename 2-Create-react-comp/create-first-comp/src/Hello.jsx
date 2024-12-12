function Hello(){

  let myName='priyanshu';
  let number=456;
  let fullName= ()=>{  // this is method
   return 'prashant Jain';
  }

  // return <p>
  //    Hello this is the future speaking. I am your master {fullName()} and {myName}
  // </p>

  return <p>
    MessageNo: {number} I am your master {fullName()}
  </p>
}
export default Hello;