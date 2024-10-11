'use client'
import { useState } from "react"
export default function TellJoke() {
    let [value , setvalue] = useState(" ")
    const jokes = [ "What did the policeman say to his hungry stomach? “Freeze. You're under a vest.”",
      " What did the left eye say to the right eye? Between us, something smells!",
      " What do you call a guy who's really loud? Mike.",
      "Why do birds fly south in the winter? It's faster than walking!",
      " What did the lava say to his girlfriend? “I lava you!”",
    " Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
      " What did Yoda say when he saw himself in 4k? HDMI.",
     "What is a room with no walls? A mushroom.",
     " What is brown, hairy and wears sunglasses? A coconut on vacation.",
  "   What did one math book say to the other? “I've got so many problems.",
      "Why did the blue jay get in trouble at school? For tweeting on a test!",
      "What social events do spiders love to attend? Webbings.",
      "What did one pickle say to the other? Dill with it.",
      " Why did the chicken cross the playground? To get to the other slide.",
      "Why do ducks have feathers on their tails? To cover their butt quacks.",
      " How does a vampire start a letter? “Tomb it may concern…"
      ]
    function handle(){
      let Random = Math.floor(Math.random() * jokes.length)
      let set = jokes[Random]
      setvalue(set)
    }
    return (
      <div className="min-h-screen text-center justify-center flex max-w-100% items-center ">
        <div className="justify-center bg-white border-4 border-black text-center h-80 w-72 rounded-lg">
        <h1 className="text-center m-2 p-2 text-3xl">Random Joke Genrator 😅</h1>
        <p className="m-2">{value}</p>
        <button  className= "border-x-2 border-t-2 border-b-2 m-2 p-2 rounded border-black hover:bg-slate-50"onClick={handle} >Tell me a Joke </button>
        </div>
        </div>
        )}
