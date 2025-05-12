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
                             src="data:image/jpeg;base64,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" 
                             alt="" />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 flex items-center justify-center gap-2 py-2"><PiNotePencil size={20}/> Editar filme</button>
                            <button className="w-[46%] h-full border border-[#ef444433] hover:bg-[#ef4444]/20 rounded-md flex items-center justify-center gap-2 py-2 text-[#ef4444]"><FiTrash2 size={20}/>Excluir filme</button>
                        </div>
                    </div>
                    <div className="w-[65%] h-full pl-4 flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#9b87f5] font-bold">Your Name</h1>
                            <p className="font-semibold text-[#8a898c] text-[17px]">(2016)</p>
                        </div>
                        <div className="w-full gap-4 flex">
                            <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                                <p className="text-[17px]">10/10</p>
                            </div>
                            <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                                <p className="text-[17px]">Drama</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px] ">Diretor</h4>
                            <p className="text-[#8a898c]">Makoto Shinkai</p>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px] ">Sinopse</h4>
                            <p className="text-[#8a898c]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur voluptas rerum unde similique dolor esse odit repellendus asperiores fugiat eveniet ea minima architecto incidunt fugit sint dolore laudantium totam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}