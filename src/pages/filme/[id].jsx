import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"
import { PiNotePencil } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import instance from "@/api/instance";


export default function Filme() {
    
    const router = useRouter()
    const {id} = router.query
    const [filme, setFilme] = useState([]);

  useEffect(() => {
    async function getFilmeById(){
      const response = await instance.get(`/api/movies/${id}`)
      setFilme(response.data)
    }

    if(id){
        getFilmeById()
    }
    
   
  }, [])
    
    return (
        <PageWrapper showHeader={false}>
            <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
                <button 
                onClick={() => router.back()}
                className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8]">
                <LuArrowLeft />
                <p>Voltar para a lista de filmes</p>
                </button>
                <div className="w-full min-h-[90vh] flex">
                    <div className="w-[35%] h-full flex flex-col">
                        <div className="w-full h-[90%]">
                            <img className="w-full h-full rounded-lg object-cover"
                             src={filme.banner} 
                             alt={filme.titulo} />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 flex items-center justify-center gap-2 py-2"><PiNotePencil size={20}/> Editar filme</button>
                            <button className="w-[46%] h-full border border-[#ef444433] hover:bg-[#ef4444]/20 rounded-md flex items-center justify-center gap-2 py-2 text-[#ef4444]"><FiTrash2 size={20}/>Excluir filme</button>
                        </div>
                    </div>
                    <div className="w-[65%] h-full pl-4 flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#9b87f5] font-bold">{filme.titulo}</h1>
                            <p className="font-semibold text-[#8a898c] text-[17px]">({filme.ano})</p>
                        </div>
                        <div className="w-full gap-4 flex">
                            <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                                <p className="text-[17px]">{filme.nota}/10</p>
                            </div>
                            <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                                <p className="text-[17px]">{filme.genero}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px] ">Diretor</h4>
                            <p className="text-[#8a898c]">{filme.diretor}</p>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px] ">Sinopse</h4>
                            <p className="text-[#8a898c]">{filme.sinopse}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}