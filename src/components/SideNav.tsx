import { Logo } from '../assets'
import styles from '../styles'
import {SideNavLinks} from './'
// import { links } from '../constants'

const SideNav = () => {
  return (
    <div className={`bg-white h-full grid grid-rows-[100px_1fr]`}>
        <div className={`flex items-center gap-3 px-8`}>
            <img src={Logo} alt="Logo Image" />
            <h1 className={`${styles.heading2}`}>Work Fos</h1>
        </div>
        <SideNavLinks />
    </div>
  )
}

export default SideNav