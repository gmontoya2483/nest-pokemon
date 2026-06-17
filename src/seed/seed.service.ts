import { BadRequestException, Injectable } from '@nestjs/common';

import { PokeResponse } from './interfaces/poke-respobse.interface';

import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed(): Promise<any> {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=651',
    );

    const pokemonsToInsert = data.results.map(({ name, url }) => {
      const segments = url.split('/').filter(Boolean);
      const no: number = +segments[segments.length - 1];
      return { no, name };
    });

    try {
      const createdPokemons = await this.pokemonModel.insertMany(
        pokemonsToInsert,
        {
          ordered: false,
        },
      );
      return {
        message: `Seed executed successfully. Created ${createdPokemons.length} pokemons.`,
      };
    } catch (error) {
      throw new BadRequestException(`Error seeding the database: ${error}`);
    }
  }
}
