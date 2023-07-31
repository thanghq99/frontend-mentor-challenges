'use client';

import React, { useState } from 'react';

const regions = ['', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'] as const;

export type Region = (typeof regions)[number];

const FilterBar = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);

  const selectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value as Region);
  };

  return (
    <div className='relative w-1/2 lg:w-1/4'>
      <select
        value={selectedRegion}
        onChange={selectRegion}
        className='w-full p-4 rounded-md focus:outline-none text-l-text dark:text-d-text bg-l-element dark:bg-d-element shadow-md'
      >
        {regions.map((region, key) => (
          <option key={key} value={region}>
            {region === '' ? 'Filter by Region' : region}
          </option>
        ))}
      </select>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='absolute w-4 h-4 bottom-5 right-4 pointer-events-none'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
    </div>
  );
};

export default FilterBar;
