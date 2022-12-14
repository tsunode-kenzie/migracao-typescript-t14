import { api } from './api';

export interface IPokemonResponse {
    name: string;
    url: string;
}

interface IGetAllPokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemonResponse[];
}

export async function getAllPokemon(
    limit: number, 
    offset: number
): Promise<IGetAllPokemonResponse> {
    const { data } = await api.get<IGetAllPokemonResponse>('pokemon', {
        params: {
            limit,
            offset,
        }
    });

    return data;
}