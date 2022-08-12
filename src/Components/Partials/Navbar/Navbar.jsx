import './index.css'

const Navbar = ({ children, onClick, navList, liClass, ulClass}) => {

    const callback = (e) => {
        onClick(e.target.textContent)
    }

    return(
        <div className="nav">
            {children}
            <ul className={ulClass}>
            {navList.map((navEl) => (<li key={navEl} className={[liClass]}  onClick={callback}>{navEl}</li>) )}
        </ul>
        </div>
    )
}

export default Navbar;