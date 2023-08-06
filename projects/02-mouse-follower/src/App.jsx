import { useEffect, useState } from 'react'
import '/src/App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect( () => { // Try any -> when the dependecies are on. b
    const handleMove = ( event ) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if ( enabled ) { window.addEventListener('pointermove', handleMove) } // Execute the listenener when the dependency is true
    return () => { window.removeEventListener('pointermove', handleMove) } // Clean up events when the dependency is false

  }, [ enabled ]) // -> Dependecies

  return (
    <>
      <div style={ {
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        top: 0,
        left: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      } }
      />

      <button onClick={() => setEnabled(!enabled)}>
        { enabled ? 'Inactive' : 'Active' }
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
