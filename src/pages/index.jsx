import instance from "@/api/instance";
import CardFilm from "@/components/CardFilm";
import PageWrapper from "@/components/PageWrapper";
import { useEffect, useState } from "react";

export default function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function getFilmes(){
      const response = await instance.get("/api/movies")
      setFilmes(response.data)
    }
    getFilmes()
  }, [])

  return(
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[#907cda] font-bold" >Sua Coleção de Filmes</h1>
        <p className="text-[#8a898c] text-[20px]">Acompanhe seus favoritos. Adicione novos filmes à sua coleção.</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-2 pt-8">
        {
          filmes.map((filme) => {
            return (
              <CardFilm filme={filme} key={filme.id}/>
            )
          })
        }
      </div>
    </PageWrapper>

  )
}