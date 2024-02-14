import { useEffect, useState } from "react"

interface IUrl {
    url: string,
}

const usePokemon = ({url}:IUrl) => {
    const [pokemon, setPokemon] = useState<Array<any>>([])
    const [nextUrl, setNextUrl] = useState<string>("")
    useEffect(() => {
        const fetchAllPokemon = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setNextUrl(data.next)
            const pokemons:any = []
            data.results.forEach((pokemon: { url: string }) => pokemons.push(fetchOnePokemon(pokemon.url)))
            Promise.all(pokemons).then((results) => {
                setPokemon(state => [...state, ...results])
            })
        }
        fetchAllPokemon()
       const fetchOnePokemon = async(url:string) => {
            const response = await fetch(url)
            const data = await response.json()
            return data;
        }
    },[url])
    return {pokemon, nextUrl}
}

export default usePokemon