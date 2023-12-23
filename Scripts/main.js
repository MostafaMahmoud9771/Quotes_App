var quotes = [
  {
    quote: `<p>“Be yourself; everyone else is already taken.”</p>`,
    author: `<p>--Oscar Wilde</p>`,
  },

  {
    quote: `<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
    `,
    author: `<p>--Albert Einstein</p>`,
  },
  {
    quote: `<p>“Be the change that you wish to see in the world.”</p>
    `,
    author: `<p>--Mahatma Gandhi</p>
    `,
  },
  {
    quote: `<p>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p>
    `,
    author: `<p>--Ralph Waldo Emerson</p>
    `,
  },
  {
    quote: `<p>“You only live once, but if you do it right, once is enough.”</p>
    `,
    author: `<p>--Mae West</p>
    `,
  },
  {
    quote: `<p>“It is nobler to declare oneself wrong than to insist on being right --especially when one is right.”</p>
    `,
    author: `<p>--Nietzsche, Friedrich Wilhelms</p>
    `,
  },
  {
    quote: `<p>“You cannot change anyone, but you can be the reason someone changes.”</p>
    `,
    author: `<p>--Roy T. Bennett, The Light in the Heart</p>
    `,
  },
  {
    quote: `<p>“Happiness is not the absence of problems, it's the ability to deal with them.”</p>
    `,
    author: `<p>--Steve Maraboli, Life, the Truth, and Being Free</p>
    `,
  },
  {
    quote: `<p>“The trouble is if you don't spend your life yourself, other people spend it for you.”</p>
    `,
    author: `<p>--Peter Shaffer, Five Finger Exercise</p>
    `,
  },
  {
    quote: `<p>“Instead of worrying about what you cannot control, shift your energy to what you can create.”</p>
    `,
    author: `<p>--Roy T. Bennett, The Light in the Heart</p>
    `,
  },
];

var randomNums = [];

function generateQuote() {
  var randomNumberGenerator = Math.floor(Math.random() * quotes.length);

  if (randomNums.length !== 0) {
    while (randomNumberGenerator == randomNums[randomNums.length - 1]) {
      randomNumberGenerator = Math.floor(Math.random() * quotes.length);
    }
  }
  document.getElementById("theQuote").innerHTML =
    quotes[randomNumberGenerator].quote;

  document.getElementById("theAuthor").innerHTML =
    quotes[randomNumberGenerator].author;

  randomNums.push(randomNumberGenerator);
}
