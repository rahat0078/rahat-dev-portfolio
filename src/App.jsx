import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="font-Roboto ">
      <Navbar/>
      <header
        style={{ background: "radial-gradient(circle, rgba(33,38,67,0.9044994706867122) 0%, rgba(33,38,67,1) 36%, rgba(33,38,67,0.9941353250284489) 69%, rgba(33,38,67,0.9773286023393732) 100%)" }}>
        <Banner />
      </header>
      <main>
        <section className="bg-[#29303C]">
          <AboutMe />
        </section>
        <section className="bg-[#212643] h-[500px]">
          <Skills />
        </section>
        {/* projects  */}
        <section className="bg-[#29303C]">
          <Projects/>
        </section>
        <section style={{ background: "radial-gradient(circle, rgba(33,38,67,0.9044994706867122) 0%, rgba(33,38,67,1) 36%, rgba(33,38,67,0.9941353250284489) 69%, rgba(33,38,67,0.9773286023393732) 100%)" }}>
          <Contact />
        </section>
      </main>


     


    </div>
  )
}

export default App
