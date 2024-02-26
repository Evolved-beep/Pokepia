import Types from "@/app/Component/types"

interface IStats {
    accuracy: number | undefined,
    power: number, 
    pp: number,
    damage: string

}

const MoveStats = ({accuracy, power, pp, damage}: IStats) => {
    return(
        <div className="bg-[#1D1D1D] my-5 mx-2 py-4 px-8 flex justify-between items-center text-white rounded-lg text-sm md:text-base lg:text-lg">
        <div className="p-2">
            <p className="mb-2 text-[#666666]">Accuracy</p>
            <p>{accuracy}</p>
        </div>
        <div className="m-2">
            <p className="mb-2 text-[#666666]">Damages</p>
            <p className="first-letter:uppercase">{damage}</p>
        </div>
        <div className="m-2">
            <p className="mb-2 text-[#666666]">Power</p>
            <p>{power}</p>
        </div>
        <div className="m-2">
            <p className="mb-2 text-[#666666]">PP</p>
            <p>{pp}</p>
        </div>
    </div>
    )

}

export default MoveStats