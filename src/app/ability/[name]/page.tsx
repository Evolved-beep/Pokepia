"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import AbilityEffect from "../Component/AbilityEffect"
import Card from "@/app/Component/Card"
import Link from "next/link"
import Error from "@/app/Component/Error"

const AbilityName = () => {
    const params = useParams()
    const [ability, setAbility] = useState<any>()
    const [pokemon, setPokemon] = useState<Array<any>>([])
    const [error, setError] = useState<any>()
    useEffect(() => {
        const AbilityByName = async() => {
            const response = await fetch(`https://pokeapi.co/api/v2/ability/${params.name}`)
            setError(response.ok ? false : response.status)
            const data = await response.json()
            const pokemons: any[] = []
            setAbility(data)
            data.pokemon.forEach((pokemon : {
                pokemon: any,
                url:string}) => pokemons.push(PokemonByAbility(pokemon.pokemon.url)) )
            Promise.all(pokemons).then((result) => {
                console.log(result)
                setPokemon(result)
            })
        }
        AbilityByName()

        const PokemonByAbility = async(url:string) => {
            const response = await fetch(url)
            const data = await response.json()
            return data
        }

    },[params])
    if(error){
        return(
            <Error />
        ) 
    } else {
        return(
            <section className="text-center my-4 md:text-base lg:text-lg">
                <h1 className="text-[#CCCCCC] font-extrabold first-letter:uppercase">{ability?.name}</h1>
                <AbilityEffect effect={ability?.effect_entries[1].effect} />
                <h2 className="text-[#CCCCCC] font-extrabold mt-4">Pokemon who can get {ability?.name} ability</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4">
                        {pokemon.map((pkmn, index) => {
                            return(
                                <div className="w-8/12 md:w-10/12 mx-auto m-2" key={index}>
                                    <Link href={`/pokemon/${pkmn.name}`}>
                                        <Card types={pkmn?.types} img={pkmn?.sprites.front_default} name={pkmn?.name}/>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
            </section>
        )
    }
}

export default AbilityName