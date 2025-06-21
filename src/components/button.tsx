type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void
};

export default function Button ({onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className="text-white bg-[#D8CEFF] lg:py-1.5 lg:px-4 lg:w-[10%] rounded-md float-end 
            focus:bg-[#BEADFF]  focus:shadow-lg focus:shadow-[#d2cbec]
            py-2 w-[100%] ">Save</button>
    )
}