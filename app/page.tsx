import Navbar from "./components/navbar"
import Header from "./components/header"
import Projects from "./components/projects"
import Banner from "./components/banner"
import About from "./components/about"
import Stack from "./components/techstack"

export default function Home() {
  const title = "Adarsh Kumar Singh"
  const description = "I am a software developer with a passion for building scalable andefficient systems. I am currently lookig for any oppurtunity . I love building webapps and products that can impact millions of lives"
  return (
    <main className="min-h-screen w-full py-2">
      <Navbar />
      <Banner></Banner>
      <br />
      <Header title={title} description={description} width={750}></Header>
      <About></About>
      <Stack></Stack>
      <Projects></Projects>
    </main>
  )
}
