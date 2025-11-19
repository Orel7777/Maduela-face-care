import { useState } from 'react'
import Header from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loading onDone={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Header />
          <main
            style={{
              paddingTop: '100px',
              minHeight: '100vh',
              backgroundColor: '#fffcf0', // Off White, שונה מהרקע של ה-navbar
              color: '#5b4f47',
            }}
          >
            <HeroSection />
          </main>
        </>
      )}
    </>
  )
}

export default App
