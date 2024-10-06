
import Link from 'next/link'
import navbarStyle from '../styles/navbar.module.css'
function Navbar() {
  return (
    <div className={navbarStyle.navbar}>
      <h1>about me *_*</h1>
      <div>
        <p><Link href="/about" style={{color:"white",textDecoration:"none"}}>about</Link></p>
        <p><Link href="/skills" style={{color:"white",textDecoration:"none"}}>skills</Link></p>
        <p><Link href="/projects" style={{color:"white",textDecoration:"none"}}>projects</Link></p>
        <p><Link href="/contact" style={{color:"white",textDecoration:"none"}}>contact</Link></p>
      </div>
    </div>
  )
}

export default Navbar