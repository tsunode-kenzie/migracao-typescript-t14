import { api } from './api';

export interface IPokemon {
    id: number;
    name: string;
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    }
}

export async function getPokemonByName(name: string | undefined): Promise<IPokemon> {
    const { data } = await api.get<IPokemon>(`/pokemon/${name}`);

    return data;
}