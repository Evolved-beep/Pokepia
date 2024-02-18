import { Cog, HomeIcon, Sword } from "lucide-react"
import Link from "next/link"

const MobileLinkArray = [{
    content: <HomeIcon color="white" />,
    Link: "/"
},{
    content: <Cog color="white"/>,
    Link:"/ability"
},{
    content: <Sword color="white"/>,
    Link:"/move"
}]

const Mobile = () => {
    return(
        <div className="fixed mb-4 h-16 rounded-full bottom-0 w-8/12 z-50 bg-[#040614d9] flex flex-row justify-center items-center ">
            <ul className="flex mx-8 flex-row w-full justify-between items-center">
                {MobileLinkArray.map((link,index) => {
                    return(
                        <Link href={link.Link} key={index}>
                            <li>{link.content}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )

} 

export default Mobile