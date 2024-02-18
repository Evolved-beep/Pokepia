"use client"
import { useEffect, useRef, useState } from "react"
import useAbility from "../hooks/useAbility"
import Link from "next/link"

const Ability = () => {
    const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/ability')
    const pokemonAbility = useAbility({url})
    const lastAbilityRef = useRef<any>(null)
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        if(lastAbilityRef.current){
            const observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting){
                    setUrl(pokemonAbility.nextUrl)
                    lastAbilityRef.current = null
                    observer.disconnect()
                }
            })
            observer.observe(lastAbilityRef.current)
        }
    },[pokemonAbility])

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        const userSearch = e.target.value
        setSearch(userSearch)
    }    

    return(
        <section className="w-8/12 md:w-full mt-10 mx-auto text-center md:text-base lg:text-lg">
            <div className="my-8">
                <h1 className="text-[#f3f3f3] mb-4 font-extrabold">Ability</h1>
                <input type="text" className="rounded-lg p-2 w-7/12" placeholder="Enter your search" onChange={handleSearch}/>
            </div>
            {pokemonAbility.allAbility
            .filter((ab) => {
                return ab.name.includes(search)
            })
            .map((ability, index) => {
                if(pokemonAbility.allAbility?.length === index + 1){
                    return(
                       <Link href={`/ability/${ability.name}`} key={index}>
                           <div className="p-6 rounded-lg border border-white mb-6 text-[azure] md:text-center md:flex md:items-center" ref={lastAbilityRef}>
                               <div className="md:w-full md:items-center">
                                       <h1 className="first-letter:uppercase text-[#5098D6]">{ability.name}</h1>
                               </div>
                           </div>
                       </Link>
                   )
                }
                else {
                    return(
                        <Link href={`/ability/${ability.name}`} key={index}>
                            <div className="p-6 rounded-lg border border-white mb-6 text-[azure] md:text-center md:flex md:items-center">
                                <div className="md:w-full md:items-center">
                                        <h1 className="first-letter:uppercase text-[#5098D6]">{ability.name}</h1>
                                </div>
                            </div>
                        </Link>
                    )
                }
            })}
        </section>
    )
} 

export default Ability