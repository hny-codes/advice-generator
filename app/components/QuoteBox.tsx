'use client';

import { useState, useEffect } from 'react';
import { useQuote } from '../hook/useQuote';
import RandomBtn from './RandomBtn';
import { useSWRConfig } from 'swr';

export default function QuoteBox() {
  const { data, error, isLoading, mutate } = useQuote();
  // const [quote, setQuote] = useState(data);

  // const { mutate } = useSWRConfig();d

  const handleQuote = async () => {
    const newData = (await fetch('https://api.adviceslip.com/advice')).json();
    mutate();
    console.log(data?.slip.advice);
    console.log(await newData);
    
  };

  return (
    <div className='bg-[--clr-dark-gray-blue] min-w-full min-h-60 rounded-xl relative'>
      <div className='text-center flex flex-col items-center gap-6 py-4 px-4'>
        {isLoading ? (
          <h1 className='text-[--clr-green] tracking-[0.2em] uppercase font-bold'>
            Advice # ..
          </h1>
        ) : (
          <h1 className='text-[--clr-green] tracking-[0.2em] uppercase font-bold'>
            Advice # {data?.slip.id}
          </h1>
        )}
        {isLoading ? (
          <h2 className='text-[--clr-cyan] tracking-widest uppercase font-bold'>
            Loading..
          </h2>
        ) : (
          <h2 className='text-[--clr-cyan] font-bold text-2xl'>
            &quot;{data?.slip.advice}&quot;
          </h2>
        )}
        <svg className='mb-10' width='295' height='16' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
            <g transform='translate(138)' fill='#CEE3E9'>
              <rect width='6' height='16' rx='3' />
              <rect x='14' width='6' height='16' rx='3' />
            </g>
          </g>
        </svg>
        <RandomBtn handleQuote={handleQuote} className='absolute -bottom-8' />
      </div>
    </div>
  );
}
