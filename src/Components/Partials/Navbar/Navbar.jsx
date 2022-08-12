import './index.css'

const Navbar = ({onClick}) => {
    const callback = (e) => {
        onClick(e.target.textContent)
    }
    return(
        <ul>
            <li onClick={callback}>Home</li>
            <li onClick={callback}>Destination</li>
            <li onClick={callback}>Crew</li>
            <li onClick={callback}>Technology</li>
        </ul>
    )
}

export default Navbar;