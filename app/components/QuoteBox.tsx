'use client';

import { useState, useEffect } from 'react';
import RandomBtn from './RandomBtn';
import getQuote from '../util/getQuote';

type Slip = {
  id: number;
  advice: string;
};

type Quote = {
  slip: Slip;
};

export default function QuoteBox() {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    async function initialQuote() {
      setQuote(await getQuote());
    }

    initialQuote();
  }, []);

  const handleQuote = async () => {
    let info = await getQuote();
    console.table(info);
    setQuote(info);
  };

  return (
    <div className='bg-[--clr-dark-gray-blue] min-w-full min-h-52 rounded-xl relative'>
      <div className='text-center flex flex-col items-center gap-6 pt-10 pb-8 px-4'>
        <h1 className='text-[--clr-green] tracking-[0.2em] uppercase font-bold text-sm'>
          Advice <span className='pl-2'># {quote?.slip.id}</span>
        </h1>
        <h2 className={`text-[--clr-cyan] font-bold text-quote`}>
          “{quote?.slip.advice}”
        </h2>
        <svg
          className='mb-8'
          width='295'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
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
