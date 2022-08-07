import { IsInt, IsPositive, IsString, Min, min, MinLength } from "class-validator";

export class CreatePokemonDto {

  @IsInt()
  @IsPositive()
  @Min(1)
  nro: number;

  @IsString()
  @MinLength(2)
  name: string;

  
}
