// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
const devJoke1 = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(devJoke1);
console.log(jokeJS1.setup);
p1.innerText= jokeJS1.setup;
p2.innerText=jokeJS1.punchline;




// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

.then(friendsJS2 => {
    console.log(friendsJS2.data.character);
    console.log(friendsJS2.data.quote);
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})

.catch (rejected =>{
    console.log(`Nope, try again:)!`);
    console.log(rejected);
    alert(`No dice, try again.`);
})


// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

async function quoteFunc(){
    try {
      const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
      console.log(`Successful`);
      console.log(quoteJS3.data);
      p5.innerText = (`Quote: ${quoteJS3.data.quote}`);
      p6.innerText = (`Character: ${quoteJS3.data.character}`);
    } catch (rejected){
      console.log(`Nope give it another go!`);
      console.log(rejected);
      alert ('Nope, try again dude!')
    }
  }
  quoteFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// My little addition :)
const p8 = document.createElement(`p`);
fourth.append(p8);
async function tvMazeFunc(){

  try{
    // api source page
  const tvmaze = `https://api.tvmaze.com`;
  // The Mandalorian main page https://www.tvmaze.com/shows/38963/the-mandalorian
  const epNum = `/shows/38963/episodebynumber?season=2&number=8`;
  // Episode by number URL:  /shows/:id/episodebynumber?season=:season&number=:number
  const Episode = tvmaze + epNum;
  const results = await axios.get(Episode);
  console.log(results.data.name);
  p7.innerText = (`${results.data.name}`);
  p8.innerText = `And what a great show it is!`

  } catch(err){
      console.log(`Danger Will Robinson, Danger!`);
      console.log(err);
      console.log(`Big No to that request! Try again!!`);

  }
}
tvMazeFunc();

//! Bonus Time
//* 5

//* https://pokeapi.co/ 

async function pokePic(){
  try{
      const pikachuImg = `https://pokeapi.co/api/v2/pokemon/pikachu`;
      const psyDuckImg = `https://pokeapi.co/api/v2/pokemon/psyduck`;
     
      const psyDuck = await axios.get(psyDuckImg);
      const pikachu = await axios.get(pikachuImg);
     
      const img1 = document.createElement(`img`);
      const img2 = document.createElement(`img`);
     
      img1.src = pikachu.data.sprites.front_default;
      img2.src = psyDuck.data.sprites.front_default;
      
      fourth.after(img1 , img2);
  } catch(err){
      console.log(err);
      console.log(`You have been defeated, Try again!`);
      alert (`You have been defeated, Try again!`)
  }
}
pokePic();

//* 6
// http://www.omdbapi.com/
// http://www.omdbapi.com/apikey.aspx
// my key http://www.omdbapi.com/?i=tt3896198&apikey=c896a7ce

async function getMoviePoster(){
  try{
      const source = `http://www.omdbapi.com/?i=tt0371724&apikey=c896a7ce`;
      const moviePic = await axios.get(source);
      console.log(moviePic);
      console.log(moviePic.data);
      
      const poster1 = document.createElement(`img`);
      poster1.src = moviePic.data.Poster;
      fourth.after(poster1);
  }
  catch(error){
      console.log(error);
      console.log(`7.5 million years and you still get it wrong!`);
      alert (`You need to put some Deep Thought into this problem!, maybe you forgot your towel?`);
  }

}
getMoviePoster();   