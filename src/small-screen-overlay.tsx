import { useState } from "react"
import { useMediaQuery } from "./hooks/use-media-query"

export const SmallScreenOverlay = () => {

  const isSmall = useMediaQuery('(max-width: 715px)')
  
  const [explore, setExplore] = useState(false)


  if(!isSmall || explore) return null

  return (
    <div className="small-screen-overlay">
      <span>
        This portfolio is an interactive 3D scene, designed for desktop or landscape tablet. Open it on a computer to explore everything.
      </span>
      <a href="https://wave-grid-rho.vercel.app/" target="_blank">
        <span>Portfolio Content</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link preview-icon">
          <path d="M15 3h6v6"/>
          <path d="M10 14 21 3"/>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        </svg>
      </a>
      <button className="btn btn-overlay" onClick={() => setExplore(true)}>
        Explore anyway
      </button>
    </div>
  )
}
