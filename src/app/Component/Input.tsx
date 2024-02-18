interface IProps {
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({onChange}:IProps) => {

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        {onChange}
    }

    return(
        <input type="text" onChange={handleSearch} />
    )

}

export default Input