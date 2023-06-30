const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getRandomFact() {
  try {
    const response = await fetch('https://api.tickleskitty.repl.co/random-fact');
    const data = await response.json();
    const fact = data.fact;
    return fact;
  } catch (error) {
    console.error('Error retrieving random fact:', error);
    return null;
  }
}

async function getRandomQuote() {
  try {
    const response = await fetch('https://api.tickleskitty.repl.co/random-quote');
    const data = await response.json();
    const quote = data.quote;
    return quote;
  } catch (error) {
    console.error('Error retrieving random quote:', error);
    return null;
  }
}

async function main() {
  const fact = await getRandomFact();
  const quote = await getRandomQuote();

  console.log('Random Fact:', fact);
  console.log('Random Quote:', quote);
}

module.exports = {
  main
};
