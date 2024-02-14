"use client"
import { useEffect, useState } from "react"

interface usePokemonProps {
    name:string
}

const usePokemonDetail = ({name}:usePokemonProps) => {
    const [pokemonDetail, setPokemonDetail] = useState<Array<string>>([])
    console.log(name)

    useEffect(() => {
        const fetchPokemonByName = () => {
            const response = fetch("https://pokeapi.co/api/v2/pokemon")

        }
        fetchPokemonByName()
    })

}

export default usePokemonDetail