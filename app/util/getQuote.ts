export default async function getQuote() {
  const url = 'https://api.adviceslip.com/advice?rand=' + Math.random();
  const data = (await fetch(url)).json();

  return data;
}
