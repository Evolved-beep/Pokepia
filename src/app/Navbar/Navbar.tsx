import Link from "next/link"
import Mobile from "./UI/Mobile"

const Navbar = () => {
    return(
        <nav className="">
            <div className="md:hidden flex justify-center items-center mb-4">
                <Mobile />
            </div>
            <div className="hidden md:flex items-center h-24 p-6 border-b text-xl justify-between border-white text-[#CCCCCC]">
                <h1>Pokepia</h1>
                <div>
                    <ul className="flex">
                        <Link href={"/ability"} className="mr-8">
                            <li>Ability</li>
                        </Link>
                        <Link href={"/move"} className="mr-8">
                            <li>Move</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
} 

export default Navbar