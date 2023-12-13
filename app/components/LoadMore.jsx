"use client"
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { getSeries } from "../action";
let page = 2

function LoadMore() {


  const { ref, inView } = useInView()
  const [data, setData] = useState([])  
  
  useEffect(() => {
    console.log(data);
    if (inView) {
      getSeries(page, 8).then((res) => {
        setData([...data, ...res])
        page++
      })
    }
  }, [inView])
  return (
    <>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item, index) => (
        <AnimeCard key={index} anime={item} index={index} />
      ))}
    </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
