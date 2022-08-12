import './index.css'

const Navbar = ({onClick}) => {
    const navList = ['Home','Destination','Crew','Technology'];
    const callback = (e) => {
        onClick(e.target.textContent)
    }
    return(
        <ul className="navbar">
            {navList.map((navEl) => (<li className="navEl" onClick={callback}>{navEl}</li>) )}
        </ul>
    )
}

export default Navbar;