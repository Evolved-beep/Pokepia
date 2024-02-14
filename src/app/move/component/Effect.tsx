interface IEffect {
    move_effect:string
}
const Effect = ({move_effect}: IEffect) => {
    console.log(move_effect);
    return(
        <div className="my-5 mx-2 py-4 px-4 text-center bg-[#F3F3F3] rounded-lg text-sm md:text-base lg:text-lg flex flex-wrap">
            <p className="w-full">{move_effect}</p>
        </div>
    )

}

export default Effect