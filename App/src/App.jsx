import Corpo from "./components/Corpo"
import Dados from "./components/Dados"
import Header from "./components/Header"
function App() {
  return (
    <section>
      <Header/>
      <Corpo>
        <Dados canal='CFB cursos' youtube='youtube.com' curso='React'/>
      </Corpo>
    </section>
  )
}

export default App
