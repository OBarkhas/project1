"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/independent?status=true",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setCountries(data);
  };
  console.log(countries);
  useEffect(() => {
    fetchData();
  }, []);
  const filteredcountries = countries.filter((countri) =>
    countri.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="ml-4 mr-4">
      <div className="border-b-1 text-3xl">Flags of the worlds</div>
      <div className="flex place-content-between mt-2">
        <div className="text-decoration-line: underline">
          {filteredcountries.length} countries in the world right now
        </div>
        <input
          className=" border border-indigo-600"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="search country..."
        />
      </div>

      <div className="mx-auto max-w-[1000px]">
        <div className="grid grid-cols-5 gap-8">
          {filteredcountries.length > 0
            ? filteredcountries.map((country, index) => {
                return (
                  <Link key={index} href={country.name.common}>
                    <div className="bg-white rounded shadow text-center p-3 hover:-translate-y-1 transition-transform duration-200">
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        className="w-full h-auto rounded"
                      />
                      <p className="mt-2 font-medium">{country.name.common} </p>
                    </div>
                  </Link>
                );
              })
            : "No Such Country Found..."}
        </div>
      </div>
    </div>
  );
};
export default Page;
