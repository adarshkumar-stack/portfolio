import Navbar from "./components/navbar"
import Header from "./components/header"
import Projects from "./components/projects"
import Socials from "./components/socials"
import About from "./components/about"
import Divider from "./components/divider"
import Stack from "./components/techstack"
import Footer from "./components/footer"

export default function Home() {
  const title = "Adarsh Kumar Singh"
  const description = "I am a software developer with a passion for building scalable andefficient systems. I am currently lookig for any oppurtunity . I love building webapps and products that can impact millions of lives"
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <br />
      <Header title={title} description={description} width={750}></Header>
      <Divider id="about"></Divider>
      <About></About>
      <Divider id="stack"></Divider>
      <Stack></Stack>
      <Divider id="projects"></Divider>
      <Projects></Projects>
      <Socials></Socials>
      <Footer></Footer>
    </main>
  )
}
