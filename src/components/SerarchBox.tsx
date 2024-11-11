'use client';

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function SearchBox({ search }: { search: string }) {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push(`?search=${e.target.value}`);
  };

  return (
    <header className="sticky mb-5 top-0 left-0 w-full bg-emerald-700 shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Aula do Allan</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md p-2 border text-black border-gray-300 rounded-md"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </header>
  );
}

export default SearchBox;