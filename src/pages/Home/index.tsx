import { useEffect, useState } from "react"
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container"
import { PokemonCard } from '../../components/PokemonCard'
import { List } from "./styles";
import { getAllPokemon, IPokemonResponse } from "../../services/getAllPokemon";

export const Home = () => {
    const [pokemon, setPokemon] = useState<IPokemonResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams({
        page: '0'
    })

    useEffect(() => {
        async function getPokemon() {
            try {
                const limit = 151;
                const response = await getAllPokemon(
                    limit, limit * Number(searchParams.get('page'))
                );

                const { results, next, previous } = response;

                localStorage.setItem('', JSON.stringify(results))

                const teste = localStorage.getItem('');

                if(teste) {
                    const array = JSON.parse(teste)
                }

                setPokemon(results)
                setIsNextDisabled(!next)
                setIsPreviousDisabled(!previous)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }

        getPokemon();
    }, [searchParams])

    return (
        <Container>
            {loading && <div>Carregando...</div>}

            <Outlet />

            <div>
                <Button 
                    onClick={() => setSearchParams({
                        page: Number(searchParams.get('page')) - 1 + ''  
                    })}
                    disabled={isPreviousDisabled}
                >
                    Previous
                </Button>
                <Button 
                    onClick={() => setSearchParams({
                        page: Number(searchParams.get('page')) + 1 + '' 
                    })}
                    disabled={isNextDisabled}
                >
                    Next
                </Button>
            </div>
            <List>
                {
                    pokemon.map(item => 
                        <PokemonCard key={item.name} name={item.name} />
                    )
                }
            </List>
        </Container>
    )
}