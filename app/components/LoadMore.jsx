"use client"
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { getSeries } from "../action";
let page = 2

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true); // New state variable

  useEffect(() => {
    setIsLoading(true);
    if (inView && hasMorePages) {
      getSeries(page, 8)
        .then((res) => {
          if (res.length > 0) {
            setData([...data, ...res]);
            page++;
          } else {
            // If no more data, set hasMorePages to false
            setHasMorePages(false);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [inView, hasMorePages]);
  return (
    <>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item, index) => (
        <AnimeCard key={index} anime={item} index={index} />
      ))}
    </section>
      <section className="flex justify-center items-center w-full mt-32">
        <div ref={ref}>
          {isLoading && hasMorePages &&  (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
