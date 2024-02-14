"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Barchar from "./Component/Barchart"
import Details from "./Component/Details"
import Types from "@/app/Navbar/UI/types"

interface Type {
    slot: number;
    type: { name: string; url: string; }
}

const PokemonDetail = () => {
    const params = useParams<{name:string}>()
    const [pokemon, setPokemon] = useState<any>()

    useEffect(() => {
        const PokemonByName = async() => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            const data = await response.json()
            setPokemon(data)
        }
        PokemonByName()
    },[])
    console.log(pokemon);
    return(
        <section className="flex justify-center items-center flex-col bg-[#FFFFFF] mx-auto">
            <div className=" my-4 flex flex-col w-10/12 lg:w-8/12 mx-auto">
                <h1 className="text-center text-2xl font-extrabold first-letter:uppercase my-6">{pokemon?.name}</h1>
                <div className="bg-[#F2F2F2] h-[250px] rounded-lg w-full flex items-center justify-center">
                    <img src={pokemon?.sprites.front_default} className="h-[250px]" alt="" />
                </div>
                <div className="my-4 bg-[#A4A4A4] rounded-lg">
                    <Barchar stats={pokemon?.stats}/>
                </div>
            </div>
            <div className="w-10/12 lg:w-8/12 mx-auto mb-4">
                <div className="flex flex-col bg-[#30A7D7] rounded-lg mb-4">
                    <Details 
                    experience={pokemon?.base_experience} 
                    height={pokemon?.height} 
                    weight={pokemon?.weight} 
                    abilities={pokemon?.abilities} 
                    id={pokemon?.id} />
                </div>
                <div className="bg-[#B6F1F1] rounded-lg lg:flex lg:flex-col lg:justify-center lg:items-center p-4">
                    <h1 className="mb-2.5 text-xl">Type:</h1>
                    <div className="flex">
                    {pokemon?.types.map((type:Type) => {
                            return(
                                <Types types={type.type.name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PokemonDetail