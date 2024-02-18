import Link from "next/link"

interface IAbility {
    ability: {name:string, url: string, is_hidden: boolean, slot: number}
}

interface IDetail {
    experience: number,
    height: number, 
    weight: number,
    id: number, 
    abilities: IAbility[]
}


const Details = ({experience, weight, height, id, abilities}: IDetail) => {

    return(
        <div className="w-full flex flex-row p-4">
            <div className="flex flex-col w-[49%] text-left lg:text-center">
                <ul className="mt-2.5 ml-2.5">
                    <li className="flex flex-col mb-2 [&>*:nth-child(1)]:text-[#FFFFFF] [&>*:nth-child(2)]:text-[#212121]">
                        <span className="">Height:</span>
                        <span>{height}M</span>
                    </li>
                    <li className="flex flex-col mb-2 [&>*:nth-child(1)]:text-[#FFFFFF] [&>*:nth-child(2)]:text-[#212121]">
                        <span className="">Weight:</span>
                        <span>{weight}Kg</span>
                    </li>
                    <li className="flex flex-col mb-2 [&>*:nth-child(1)]:text-[#FFFFFF] [&>*:nth-child(2)]:text-[#212121]">
                        <span className="">Base experience:</span>
                        <span>{experience}</span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col w-[51%] text-left lg:text-center">
                <ul className="mt-2.5 ml-2.5">
                    <li className="flex flex-col mb-2 [&>*:nth-child(1)]:text-[#FFFFFF] [&>*:nth-child(2)]:text-[#212121]">
                        <span className="">Pokedex ID:</span>
                        <span>{id}</span>
                    </li>
                    <li className="flex flex-col mb-2 [&>*:nth-child(1)]:text-[#FFFFFF]">
                        <span className="">Ability:</span>
                        {abilities?.map((ab, index) => {
                            return(
                                <Link href={`/ability/${ab.ability.name}`} key={index}>
                                    <li className="first-letter:uppercase text-[#212121]">{ab.ability.name}</li>
                                </Link>
                            )
                        })}
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Details