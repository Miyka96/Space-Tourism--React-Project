import './index.css'

const Navbar = ({onClick, navList, liClass, ulClass}) => {
    const callback = (e) => {
        onClick(e.target.textContent)
    }
    return(
        <ul className={ulClass}>
            {navList.map((navEl) => (<li key={navEl} className={liClass} onClick={callback}>{navEl}</li>) )}
        </ul>
    )
}

export default Navbar;