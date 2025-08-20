"use client";
import { useState } from "react";

const Page = () => {
  const [number1, setnumber1] = useState("");
  const [number2, setnumber2] = useState("");
  const [sellect, setsellect] = useState("+");
  const [result, setresult] = useState("");

  const handleSelect = (event) => {
    setsellect(event.target.value);
  };

  const resulti = () => {
    let res = 0;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (sellect === "+") {
      res = num1 + num2;
    } else if (sellect === "-") {
      res = num1 - num2;
    } else if (sellect === "*") {
      res = num1 * num2;
    } else if (sellect === "/") {
      res = num1 / num2;
    }
    setresult(res);
  };

  return (
    <div className="flex gap-4">
      <input
        placeholder="number1"
        type="number"
        value={number1}
        className="border border-indigo-600"
        onChange={(e) => setnumber1(e.target.value)}
      />

      <select onChange={(e) => handleSelect(e)} value={sellect}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        placeholder="number2"
        type="number"
        className="border border-indigo-600"
        value={number2}
        onChange={(e) => setnumber2(e.target.value)}
      />

      <button className="border border-indigo-600" onClick={resulti}>
        =
      </button>

      <div>result:{result}</div>
    </div>
  );
};

export default Page;
