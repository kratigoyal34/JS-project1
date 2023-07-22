// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: ' "Fate tried to conceal him by naming him Smith." ' ,
    person: 'Oliver Wendell Holmes, Jr'
},{
    quote: '"All that we are is the result of what we have thought."' ,
    person: 'Buddha'
},{
    quote:  '"If you judge people, you have no time to love them."',
    person: 'Mother Teresa'
},{
    quote:  '"I have no special talent. I am only passionately curious."',
    person: 'Albert Einstein'
},{
    quote:  '"The successful warrior is the average man, with laser-like focus."',
    person: ' Bruce Lee'
},{
    quote:  '"Be a good person, it is easier than pretending to be a good person."',
    person: 'Nitin Namdeo'
},{
    quote:  '“Be the kind of person who not only pretends to be good but is also a really good person.”',
    person: 'Nitin Namdeo'
},{
    quote:  '“Those who are really good do not give up their goodness because of bad people.”',
    person: 'Nitin Namdeo'
},{
    quote:  '“A good person always seeks good in others.”',
    person: 'Nitin Namdeo'
},{
     quote:  '“How good a person you are depends only on how much compassion and sympathy you have in your heart for others.”',
     person: 'Nitin Namdeo'
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

// for (var a = 0; a < quotes.length; a++){
    
//     btn.addEventListener('click' , function(){
   
//         quote.innerText = quotes[a].quote;
//         person.innerText = quotes[a].person;
// })

// }

