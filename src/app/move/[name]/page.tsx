"use client"

import Types from "@/app/Navbar/UI/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Effect from "../component/Effect"
import MoveStats from "../component/MoveStats"
import Card from "@/app/Component/Card"
import Link from "next/link"

const moveByName = () => {
    const params = useParams<{name:string}>()
    const [moveDetail, setMoveDetail] = useState<any>()
    const [pokemon, setPokemon] = useState<Array<any>>([])  

    useEffect(() => {
        const MoveByName = async() => {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${params.name}`)
            const data = await response.json()
            setMoveDetail(data)
            const pokemons: any[] = []
            data.learned_by_pokemon.forEach((pokemon: { url: string }) => pokemons.push(pokemonByMove(pokemon.url)))
            Promise.all(pokemons).then((result) => {
                setPokemon(result)
            })
        }
        MoveByName()
        const pokemonByMove = async(url:string) => {
            const response = await fetch(url)
            const data = response.json()
            return data
        }
    },[params])
        return(
            <section className="text-center my-4 md:text-base lg:text-lg">
                <h1 className="text-[#CCCCCC] font-extrabold first-letter:uppercase">{moveDetail?.name}</h1>
                <MoveStats accuracy={moveDetail?.accuracy} pp={moveDetail?.pp} power={moveDetail?.power} damage={moveDetail?.damage_class.name}/>
                <div className="text-[#CCCCCC] flex flex-col items-center justify-center my-4">
                    <h2 className="mb-4">Types</h2>
                    <Types types={moveDetail?.type.name} />
                </div>
                <h2 className="text-[#CCCCCC] font-extrabold mt-4">Effect</h2>
                <Effect move_effect={moveDetail?.effect_entries[0].short_effect} />
                <h2 className="text-[#CCCCCC] font-extrabold">Pokemon who can learn {moveDetail?.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4">
                    {pokemon.map((pkmn) => {
                        return(
                            <div className="w-8/12 md:w-10/12 mx-auto m-2">
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

export default moveByName