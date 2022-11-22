const jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('jokeBtn');

const jokes = {
    joke1:"Ant didn't wear a helmet.",
    joke2:"My wife said I should do lunges to stay in shape. That would be a big step forward.",
    joke3:"Dear Math, grow up and solve your own problems.",
    joke4:"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
    joke5:"Did you hear the rumor about butter? Well, I'm not going to spread it!",
    joke6:"How do you make 7 even? 'Take away the s'",
    joke7:"Why did the math book look so sad? Because of all of its problems!",
    joke8:"How do you stop a bull from charging? Cancel its credit card.",
    joke9:"What do you call two monkeys who share an Amazon Prime account? Prime mates.",
    joke10:"I just came across my wife’s Tinder profile and I’m so angry about her lies. She is not “fun to be around."
}


btnEl.addEventListener("click", () => {

    generateJoke();

  });


  function generateJoke()
  {
    var keys = Object.keys(jokes);
    displayJokes = jokes[keys[ keys.length * Math.random() << 0]];
    jokeEl.textContent = displayJokes;

  }

    
