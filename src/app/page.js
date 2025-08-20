// import User from "./_components/userComponent.jsx";

// const user = {
//   name: "Bob",
//   age: 30,
//   email: "bob@example.com",
//   imgUrl:
//     "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
// };
// export default function Home() {
//   return (
//     <div>
//       <div>User Card</div>
//       <User ner={user} />
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// const NumberCounter = () => {
//   const [count, setCount] = useState(0);
//   const add = () => {
//     setCount(count + 1);
//   };
//   const minus = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={() => minus()}>Minus Number</button>
//       <h1>Number Incrementers</h1>
//       <p>Current Number: {count}</p>
//       <button onClick={() => add()}>Add Number</button>
//     </div>
//   );
// };
// export default NumberCounter;

const Page = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/independent?status=true",
    { method: "GET" }
  );
  const data = await response.json();
  console.log(data[0]);
  return <div>Haha</div>;
};
export default Page;
