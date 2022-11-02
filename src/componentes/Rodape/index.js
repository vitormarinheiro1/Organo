import './Rodape.css'
import Link from "@material-ui/core/Link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";


function Rodape() {
    return (
        <footer className='footer'>
            <ul>
                
                <Link href="https://www.instagram.com/marinheiroz">
                    <li><FaInstagram /></li>
                </Link>
                <Link href="https://www.linkedin.com/in/vitor-marinheiro-590a461ba/">
                    <li><CiLinkedin /></li>
                </Link>
                <Link href="https://github.com/vitormarinheiro1">
                    <li><AiFillGithub /></li>
                </Link>
            </ul>
            <img src="/imagens/logo.png" alt="logo"/>
            <p>Desenvolvido por Vitor Marinheiro.</p>
        </footer>
    )
}

export default Rodape