//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:`"the best way to find yourself is to loseyourself in the service of others."`,
        person:`Mahatma Gandhi`
    },{
       quote:`"If you want to live a happy live, tie it to a goal, not
       to people or things"`,
        person:`Albert Einstein`
    },{
       quote:`"At his best, man is the noblest of all animals; separated from law
       and justice he is the worst."`,
        person:`Aristotle`
    },{
       quote:`"Your time is limited, so dont waste it living someone else's life."`,
        person:`Steve Jobs`
    },{
       quote:`"Tell me and i forget. Touch me and I remember. Involve me and I learn."`,
        person:`Benjamin Franklin`
    },{
       quote:`"If you look at what you have in life, you'll always have more. If You look at what you don't have in life, you'll never have enough."`,
        person:`Operah Winfrey`
    },{
       quote:`"t does not matter how slowly you go as long as you do not stop."`,
        person:`Confucius`
    },{
       quote:`"Our lives begin to end the day we become silent about things that matter."`,
        person:`Martin Luther, King Jr.`
    },
    {
       quote:`"Remember thet not getting what you want is sometimes a wonderful
       stroke of luck."`,
       person:`Dalai Lama`
    },{
       quote:`"The journey of a thousand miles begins with one step."`,
        person:`Lao tzu`
    },
];

btn.addEventListener('click', function(){
let random= Math.floor(Math.random() * quotes.length);

quote.innerText=quotes[random].quote
person.innerText=quotes[random].person

})
