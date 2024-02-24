import QuoteBox from './components/QuoteBox';

export default function Home() {
  return (
    <main className='grid grid-cols-1 items-center justify-center h-screen'>
      <div className='px-4 max-w-[--max-width] mx-auto'>
        <QuoteBox />
      </div>
    </main>
  );
}
