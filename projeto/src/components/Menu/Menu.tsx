import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/produtos">Produtos</Link>
            <Link to="/card/produtos">Card</Link>
        </nav>
    )
}