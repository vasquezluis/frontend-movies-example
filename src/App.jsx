import './App.css'
import Navbar from './components/Navbar'
import MoviesList from './components/MoviesList'

import Footer from './components/Footer'

// * componente basico de React
function App () {
  return (
    <>

      <Navbar />

      <div className='p-2'>
        <MoviesList />
      </div>

      <Footer />

    </>

  )
}

export default App
