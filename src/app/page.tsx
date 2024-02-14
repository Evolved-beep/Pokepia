"use client"
import { useEffect, useRef, useState } from "react";
import Card from "./Component/Card";
import usePokemon from "./hooks/usePokemon";

export default function Home() {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=121&offset=0')
  const pokemonData = usePokemon({url})
  const lastCardRef = useRef<any>(null)

  useEffect(() => {
    if(lastCardRef.current){
      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting){
          setUrl(pokemonData.nextUrl)
          lastCardRef.current = null
          observer.disconnect()
        }
      })
      observer.observe(lastCardRef.current)
    }
  },[pokemonData])
  
  return(
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {pokemonData.pokemon.map((pkmn,index) => {
            if(pokemonData.pokemon.length === index + 1){
              return(
                <div className="w-full m-3 flex place-self-center flex-wrap md:w-10/12" ref={lastCardRef}>
                <Card
                  name={pkmn.name} 
                  img={pkmn.sprites.front_default}
                  types={pkmn.types}
                />
              </div>
              )
            } else {
              return(
                <div className="w-full m-3 flex place-self-center flex-wrap md:w-10/12">
                  <Card
                    name={pkmn.name} 
                    img={pkmn.sprites.front_default}
                    types={pkmn.types}
                  />
                </div>
              )
            }
          })}
    </section>
  )
  
}
