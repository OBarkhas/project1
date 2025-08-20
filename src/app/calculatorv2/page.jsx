"use client";
import { useState, useEffect } from "react";

const Page = () => {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [sellect, setsellect] = useState("+");
  const [result, setresult] = useState();

  const handleSelect = (event) => {
    setsellect(event.target.value);
  };

  const resulti = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (sellect === "+") {
      setresult(num1 + num2);
    } else if (sellect === "-") {
      setresult(num1 - num2);
    } else if (sellect === "*") {
      setresult(num1 * num2);
    } else if (sellect === "/") {
      setresult(num1 / num2);
    }
  };

  useEffect(() => {
    resulti();
  }, [number1, number2, sellect]);

  return (
    <div className="flex gap-4">
      <input
        placeholder="number1"
        type="number"
        value={number1}
        className="border border-indigo-600"
        onChange={(e) => setnumber1(e.target.value)}
      />

      <select
        onChange={(e) => handleSelect(e)}
        value={sellect}
        className="border border-indigo-600"
      >
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

      <div className="border border-indigo-600">{result}</div>
    </div>
  );
};

export default Page;
