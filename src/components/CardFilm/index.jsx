export default function CardFilm(){
    return (
        <div className="w-[280px] h-[250px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-[100%] h-[70%] rounded-t-lg">
                <img className="w-full h-full rounded-t-lg object-cover"
                 src="https://th.bing.com/th/id/OIP.ol6bXutpoZhylzXBjd09TwHaEU?w=305&h=180&c=7&r=0&o=5&pid=1.7" 
                 alt="" />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-0 px-4">
                <p className="text-[15px] font-bold">O Jardim das Palavras</p>
                <p className="text-15px] text-[#8a898c]">Makoto Shinkai</p>
                <div className="w-full flex justify-between ">
                    <p className="text-[15px] text-[#8a898c]">2013</p>
                    <div className="px-1 py-0 bg-[#8f7bd8]/10 text-[#8f7bd8] rounded-md">Drama</div>
                </div>
            </div>
        </div>
    )
}