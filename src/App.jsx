import './App.css'
import SocialSidebar from './components/SocialSidebar.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div style={{ overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <div
        style={{
          transform: 'scale(0.9)',
          transformOrigin: 'top left',
          width: `${100 / 0.9}%`,  // ~111.11%
          height: `${100 / 0.9}%`, // Optional, helps avoid bottom space
        }}
        className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
      >
        <SocialSidebar />
        <Home />
      </div>
    </div>
  )
}

export default App