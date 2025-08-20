"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  const params = useParams();
  const countryName = params.CountryName;
  const [Country, setCountry] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-yellow-300 h-screen">
      <div className=" border-b-1 text-3xl">Flags of The worlds</div>
      <div className="m-10 ml-50 mr-50">
        <div className="flex gap-5 border-b-1">
          <Link href="/countries">
            <button className="border-b-1 text-3xl rounded-full border-4">
              BACK
            </button>
          </Link>
          <div className=" border-b-1 text-3xl">{Country[0]?.name?.common}</div>
        </div>

        <div className="flex gap-15 mt-10">
          <span>
            <img
              className="W-[650px] h-[400px] border-2"
              src={Country[0]?.flags?.png}
              alt={Country[0]?.name?.common}
            />
          </span>

          <div className="ml-90">
            <div className="mt-5 text-xl">
              <div>Capital:</div>
              <div className="text-3xl">{Country[0]?.capital[0]}</div>
            </div>

            <div className=" mt-5 text-xl">
              <div>Currency:</div>
              <div className="text-3xl"></div>
            </div>

            <div className=" mt-5 text-xl">
              <div>Area:</div>
              <div className="text-3xl">{Country[0]?.area}</div>
            </div>

            <div className=" mt-5 text-xl">
              <div>Population:</div>
              <div className="text-3xl">{Country[0]?.population}</div>
            </div>
          </div>

          <div>
            <div className=" mt-5 text-xl">
              <div>Location:</div>
              <div className="text-3xl">{Country[0]?.region}</div>
            </div>

            <div className=" mt-5 text-xl">
              <div>Continents:</div>
              <div className="text-3xl">{Country[0]?.continents}</div>
            </div>

            <div className="mt-5 text-xl">
              <div>Map:</div>
              <Link href={Country[0]?.maps?.googleMaps ?? ""}>
                <button className="underline text-3xl">
                  See in google maps
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
