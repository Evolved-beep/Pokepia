"use client"
import Link from "next/link";
import useMove from "../hooks/useMove"
import Types from "../Navbar/UI/types";
import { useRef, useState, useEffect } from "react";

const Move = () => {
    const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/move")
    const pokemonMove = useMove({url})
    const lastMoveRef = useRef<any>(null)

    useEffect(() => {
        if(lastMoveRef.current){
            const observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting){
                    setUrl(pokemonMove.nextUrl)
                    lastMoveRef.current = null
                    observer.disconnect()
                }
            })
            observer.observe(lastMoveRef.current)
        }
    },[pokemonMove])
    return(
        <section className="w-8/12 md:w-full mt-10 mx-auto text-center md:text-base lg:text-lg">
            <h1 className="text-[#f3f3f3] mb-4 font-extrabold">Moves !</h1>
            {pokemonMove.move.map((moves, index) => {
                if(pokemonMove.move.length === index + 1){
                    return(
                        <Link href={`/move/${moves.name}`}>
                            <div className="p-6 rounded-lg border border-white mb-6 text-[azure] md:text-left md:flex md:items-center" ref={lastMoveRef}>
                                <div className="md:max-w-[150px] md:w-full md:items-center lg:max-w-[250px] xl:max-w-[350px]">
                                        <h1 className="first-letter:uppercase text-[#5098D6]">{moves.name}</h1>
                                </div>
                                <div className="hidden md:flex md:justify-around md:w-full md:items-center">
                                    <Types types={moves.type.name} />
                                    <span className="first-letter:uppercase">{moves.damage_class.name}</span>
                                </div>
                            </div>
                        </Link>
                    )
                } else {
                    return(
                        <Link href={`/move/${moves.name}`}>
                            <div className="p-6 rounded-lg border border-white mb-6 text-[azure] md:text-left md:flex md:items-center">
                                <div className="md:max-w-[150px] md:w-full md:items-center lg:max-w-[250px] xl:max-w-[350px]">
                                        <h1 className="first-letter:uppercase text-[#5098D6]">{moves.name}</h1>
                                </div>
                                <div className="hidden md:flex md:justify-around md:w-full md:items-center">
                                    <Types types={moves.type.name} />
                                    <span className="first-letter:uppercase">{moves.damage_class.name}</span>
                                </div>
                            </div>
                        </Link>
                    )

                }
            })}
        </section>
    )
}

export default Move