import { Link } from "./styles"

interface IPokemonCardProps {
    name: string;
} 

export const PokemonCard = ({ name }: IPokemonCardProps) => {
    return(
        <li>
            <Link to={`${name}`}>
                <span>{name}</span>
                <span>Ver</span>
            </Link>
        </li>
    )
}
