interface IEffect {
    effect:string
}

const AbilityEffect = ({effect}:IEffect) => {
    return(
        <div className="bg-[#1D1D1D] my-5 mx-2 py-4 px-8 flex justify-between items-center text-white rounded-lg text-sm md:text-base lg:text-lg">
            <p>{effect}</p>
        </div>
    )
}

export default AbilityEffect