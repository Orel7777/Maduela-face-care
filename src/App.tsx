import Header from './Sections/Navbar'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        {/* כאן תוסיפי אחר כך את שאר האתר */}
        <h1 className="text-red-500">Tailwind is working in App!</h1>
      </main>
    </>
  )
}

export default App
