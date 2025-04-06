import './App.css'
import SocialSidebar from './components/SocialSidebar.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <body style={{margin: 0, overflow: 'hidden'}} className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div style={{
          transform: "scale(0.9)",
          transformOrigin: "top left",
          width: `${100 / 0.9}%`
        }}>
        <SocialSidebar />
        <Home />
      </div>
  </body>
  )
}

export default App
