import React from "react";
import { useCustomStore } from "../store/store";

const Home = () => {
  const { count, increment, decrement, reset } = useCustomStore();

  const name: string = "test";
  const fruits: string[] = [
    "apple",
    "pineapple",
    "grape",
    "watermelon",
    "cherry",
    "mango",
  ].join(", ");
  const persons = [
    { id: 1, name: "test1", amount: 5000 },
    { id: 2, name: "test2", amount: 4000 },
    { id: 3, name: "test3", amount: 3000 },
    { id: 4, name: "test4", amount: 2000 },
    { id: 5, name: "test5", amount: 1000 },
  ];
  const personFilter = persons.filter((val) => val.amount >= 2500);

  function sum(num1,num2){
    return num1 + num2 
  }
  let result = sum(10,20)


  function showGreeting(message:string){
    return message;
  }
  let message1 = showGreeting('welcome to typescript')
  
  function sum1(num1:number,num2:number){
    return num1 + num2 
  }
  let result1 = sum1(20,30)

  const isDeveloper:boolean = false


  let arrFrameworksDetails: string[] = [55,'JavaScript ',7.0];

  enum RGBColor { Red, Green, Blue };
  let wonderful = RGBColor.Blue

  let colorBlue: RGBColor = RGBColor.Blue;

   
  function findMax(num1,num2){
    return (num1 > num2) ? num1 : num2
  }
  let finalfindMax = findMax(20,30)
        
  return (
    <>
      <h1>Home page</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <br />
      {name}
      <br />
      {fruits}
      <br />
      {persons.map((val) => (
        <div key={val.id}>{val.name}</div>
      ))}
      <br />
      <hr />
      <h2>Filtered Persons :</h2>
      {personFilter.map((val) => (
        <div key={val.id}>
          {val.name} (Amount: {val.amount})
        </div>
      ))}
      {result}
      <br />
      {message1}
      <br />
      {result1}
      <br />
      {isDeveloper ? 'test1' : 'test2'}
      <br />
      {arrFrameworksDetails}
      <br />
      <br />
      {finalfindMax}
    </>
  );
};

export default Home;
