import footerStyle from '../styles/footer.module.css'
import Link from 'next/link'
function Footer() {
  return (
    <div className={footerStyle.footer}>
        <p>© 2024. All rights reserved.</p>
        <p><Link href="/" style={{color:"white",textDecoration:"none"}}>Go Home</Link></p>
    </div>
  )
}

export default Footer