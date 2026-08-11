import Navbar from "./components/navbar"
import Header from "./components/header"
import Projects from "./components/projects"

export default function Home() {
  const title = "Adarsh Kumar Singh"
  const description = "I am a software developer with a passion for building scalable andefficient systems. I am currently lookig for any oppurtunity"
  return (
    <main className="min-h-screen w-full  px-2 py-2">
      <Navbar />
      <br />
      <Header title={title} description={description} width={750}></Header>
      <Projects></Projects>
      <section className="w-full h-600"></section>
    </main>
  )
}
