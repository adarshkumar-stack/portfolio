import Navbar from "./components/navbar"
import Header from "./components/header"

export default function Home() {
  const title = "Hello there !!"
  const description = "I am a software developer with a passion for building scalable andefficient systems. I am currently lookig for any oppurtunity"
  return (
    <main className="min-h-screen w-full  px-2">
      <Navbar />
      <br />
      <Header title={title} description={description} width={800}></Header>
      <section className="w-full h-600"></section>
    </main>
  )
}
