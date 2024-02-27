"use client"
import { useEffect, useRef, useState } from "react";
import Card from "./Component/Card";
import usePokemon from "./hooks/usePokemon";

export default function Home() {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=121&offset=0')
  const pokemonData = usePokemon({url})
  const lastCardRef = useRef<any>(null)
  const [search, setSearch] = useState<string>("")

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

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const userSearch = e.target.value.toLowerCase()
    setSearch(userSearch)
  }
  console.log(search);
  
  return(
    <section className="">
      <div className="flex items-center flex-col justify-center my-8">
        <h1 className="mb-6 text-[azure]">Pokemon Glossaire</h1>
        <input type="text" className="rounded-lg p-2 w-7/12" placeholder="Enter your search" onChange={handleSearch}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
          {pokemonData.pokemon
          .filter((pkmnSearch) => {
            return pkmnSearch.name.includes(search)
          })
          .map((pkmn,index) => {
            if(pokemonData.pokemon.length === index + 1){
              return(
                <div className="w-[258px] m-3 flex place-self-center flex-wrap md:w-10/12" ref={lastCardRef} key={index}>
                <Card
                  name={pkmn.name} 
                  img={pkmn.sprites.front_default}
                  types={pkmn.types}
                />
              </div>
              )
            } else {
              return(
                <div className="w-[258px] m-3 flex place-self-center flex-wrap md:w-10/12" key={index}>
                  <Card
                    name={pkmn.name} 
                    img={pkmn.sprites.front_default}
                    types={pkmn.types}
                  />
                </div>
              )
            }
          })}
      </div>
    </section>
  )
  
}
