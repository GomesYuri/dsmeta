import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <h1></h1>
                <h5>@Gomes_yur1</h5>
            </div>
        </header>
    )
}

export default Header