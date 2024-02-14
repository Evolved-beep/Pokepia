import { Cog, HomeIcon, Sword } from "lucide-react"
import Link from "next/link"

const MobileLinkArray = [{
    content: <HomeIcon />,
    Link: "/"
},{
    content: <Cog/>,
    Link:"/ability"
},{
    content: <Sword />,
    Link:"/move"
}]

const Mobile = () => {
    return(
        <div className="fixed mb-4 h-16 rounded-full bottom-0 w-10/12 z-50 bg-[#F3F3F3] flex flex-row justify-center items-center ">
            <ul className="flex flex-row">
                {MobileLinkArray.map((link) => {
                    return(
                        <Link href={link.Link}>
                            <li className="mr-4">{link.content}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )

} 

export default Mobile