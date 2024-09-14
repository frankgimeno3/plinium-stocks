"use client";

import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';  

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const [inputContent, setInputContent] = useState("");
  const router = useRouter();  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputContent.trim()) {
       router.push(`/pages/${encodeURIComponent(inputContent)}`);
    } 
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="flex flex-row justify-end my-5">
      <div className="flex flex-row bg-white rounded-lg border shadow p-1 items-center my-auto mr-5 py-2 w-80">
        <div className="p-1 flex items-center pl-3 hover:opacity-50" onClick={handleSearchClick}>
          <svg
            data-id="63"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          className="ml-2 text-gray-500 w-full"
          placeholder="Search products..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}  
        />
      </div>
      <div
        className="bg-gray-50 shadow border rounded-full w-12 h-12 flex items-center justify-center hover:bg-white cursor-pointer"
          
      ></div>
    </div>
  );
};

export default SearchBar;
