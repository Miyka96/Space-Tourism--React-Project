import './index.css'

const Navbar = ({ children, onClick, navList, liClass, ulClass, currentSect, currentDestination, currentCrew}) => {

    const callback = (e) => {
        onClick(e.target.textContent)
    }


    return(
        <div className="nav"> 
            {children}
            <ul className={ulClass}>
            {navList.map((navEl) => (<li key={navEl} className={ (currentSect||currentDestination||currentCrew) === navEl ? ['active' + ' ' + liClass] : liClass}  onClick={callback}>{navEl}</li>) )}
        </ul>
        </div>
    )
}

export default Navbar;