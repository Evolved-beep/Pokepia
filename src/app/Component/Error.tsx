import Link from "next/link"

const Error = () => {
    return(
        <div className="md:h-[calc(h-screen-h-24)] h-screen flex flex-col justify-center items-center text-[#F3F3F3] lg:text-3xl">
            <h1 className="mb-8">Oups something went wrong</h1>
            <Link href={"/"}><span>Click here and go to the homepage</span></Link>
        </div>
    )

}

export default Error 