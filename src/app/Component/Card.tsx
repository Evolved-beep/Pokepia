import Link from "next/link"
import Types from "../Navbar/UI/types"

interface Type {
    slot: number;
    type: { name: string; url: string; }
}

interface Pokemon {
    name: string;
    img: string;
    types: Type[];

}
const Card = ({name,img,types}:Pokemon) => {
    return(
        <Link className="w-full" href={`/pokemon/${name}`}>
            <article className="text-center border flex justify-center items-center rounded-lg flex-col px-10 py-6">
                <h1 className="text-sm md:text-base lg:text-lg first-letter:uppercase font-extrabold text-[azure]">{name}</h1>
                <img src={img} className="h-32 w-32" alt="" />
                <div className="flex flex-row">
                {types.map((type: Type) =>{
                    return(
                        <Types types={type.type.name} />
                            )
                        })}
                </div>
            </article>
        </Link>
    )
}

export default Card