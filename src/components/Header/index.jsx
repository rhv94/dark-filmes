import { LuFilm } from "react-icons/lu";

export default function Header({ showButton = true }){
    return (
        <header className="w-full h-[75px] flex bg-[#0c0f15] justify-between items-center pr-2">
            <div className="flex h-full gap-2 items-center justify-center pl-2">
            <LuFilm color="#9b87f5" size={28}/>
            <h2 className="font-bold text-[20px] ">Dark Films</h2>
            </div>
            {showButton && (
                <button className="w-[150px] h-[60%] rounded-md bg-[#9b87f5] font-bold hover:bg-[#9b87f5]/70 cursor-pointer">Adicionar Filme</button>
            )}
        </header>
    )
}