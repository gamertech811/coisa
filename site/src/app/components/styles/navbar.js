import "./navbar.css"
export default function NavBar() {
    return (
        <gridnav>
            <a href="#">
                <h1 className="hj">BABA VIADO</h1>
            </a>
            <nav>
                <a href="/">Início</a>
                <a href="/postagens">Postagens</a>
            </nav>
        </gridnav>
    );
}