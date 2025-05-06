import Header from "../Header";

export default function PageWrapper({ children, showButton  }){
    return (
        <div className="w-full h-screen flex flex-col ">
            <Header showButton={showButton} />
            <div className="w-full h-auto bg-gradient-to-t from-[#020304] to-[#181d29]">
                {children}
            </div>
        </div>
    )
}