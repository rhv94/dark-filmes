export default function CustonInput({label, placeholder, type, onChange}){
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <input
                className="w-full h-[45px] bg-[#141414] rounded-lg pl-2 border border-[#ffffff1a] outline-none focus:border-purple-400"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}