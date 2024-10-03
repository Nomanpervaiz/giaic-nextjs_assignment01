import About from "./about/page"
import Hero from "./Components/Hero"

import Contact from "./contact/page"
import Product from "./product/page"


const App = () => {
  return (
    <section className=' flex flex-col  items-center'>
        <Hero/>
        <Product/>
        <About/>
        <Contact/>
    </section>

  )
}

export default App