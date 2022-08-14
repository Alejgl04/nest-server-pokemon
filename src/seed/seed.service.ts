import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import axios, { AxiosInstance } from 'axios';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/pokemon.interfaces';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,

    private http: AxiosAdapter

  ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert: { name: string, nro: number }[] = [];

    data.results.forEach( ( { name, url } ) => {

      const segments = url.split('/');
      const nro = +segments[ segments.length - 2 ];
      pokemonToInsert.push({ name, nro });
 
    });

    await this.pokemonModel.insertMany( pokemonToInsert );

    return 'Seed Executed';

  }
}
