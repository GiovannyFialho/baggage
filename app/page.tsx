"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

import { fetchBags } from "@/app/api";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchBags(),
    queryKey: ["bags"],
    staleTime: Infinity
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ThreeDots color="#000" />
      </div>
    );
  }

  return (
    <main className="w-full">
      <div className="w-full flex flex-col gap-2">
        {data?.map((bag) => (
          <div
            key={bag.id}
            className="flex flex-col items-center md:flex-row gap-2"
          >
            <Image src={bag.thumb} width={300} height={300} alt={bag.name} />

            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-center md:text-left">
                  {bag.name}
                </h2>
                <p className="text-sm text-center md:text-left">
                  {bag.description}
                </p>
              </div>

              <p>{bag.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
