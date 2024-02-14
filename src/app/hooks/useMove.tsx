import { useState, useEffect } from "react"

interface IUrl {
    url:string
}

const useMove = ({url}:IUrl) => {
    const [move,setMove] = useState<Array<any>>([])
    const [nextUrl, setNextUrl] = useState<string>("")
   

    useEffect(() => {
        const getMove = async() => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setNextUrl(data.next)
            const moves:any = []
            data.results.forEach((pokemon:{url:string}) => moves.push(fetchOneMove(pokemon.url)))
            Promise.all(moves).then((result) => {
                setMove(state => [...state, ...result])
            })
        }
        getMove()
        const fetchOneMove = async(url:string) => {
            const response = await fetch(url);
            const data = await response.json()
            return data
        }
    },[url])

    return {move, nextUrl}
}

export default useMove