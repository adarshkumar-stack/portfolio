

export default function Header({title, description, width}: {
    title: string,
    description: string,
    width: number
}) {
    return(
        <div style={{
            maxWidth: width,
            marginLeft: 20
        }}>
            <h1 className="text-neutral-700 font-bold text-shadow-sm text-[50px]">{title}</h1>
            <p className="pt-4 text-neutral-400 tracking-tight text-xl">{description}</p>
        </div>
    )
}