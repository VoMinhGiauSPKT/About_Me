import "../styles/components/header.css"

function Header(){
    return(
        <header className="header">
            <ul className="header-lists">
                <li className="header-item"><a href="#">Home</a></li>
                <li className="header-item"><a href="#">About</a></li>
                <li className="header-item"><a href="#">Skills</a></li>
                <li className="header-item"><a href="#">Projects</a></li>
                <li className="header-item"><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header