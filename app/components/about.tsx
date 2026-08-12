import { Agbalumo } from "next/font/google"

const agbalumo = Agbalumo({
  subsets: ['latin'],
  weight: ['400'], 
  style: ['normal'],
});

export default function About() {
    return(
        <div className="px-15 mt-8 ">
            <div className="h-[40px] w-full bg-linear-to-r from-red-300 via-pink-300 to-purple-300">
                <h1 className={`${agbalumo.className}w-full pl-5 h-[39px] text-2xl text-neutral-800 tracking-wide text-shadow-lg text-shadow-neutral-300 bg-white`}>
                    About me
                </h1>
            </div>

        </div>
    )
}