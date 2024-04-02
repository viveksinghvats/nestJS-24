import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto{
    @MinLength(3)
    name: string;
    @IsEnum(['sword', 'gun'], {message: 'use correct weapon'})
    weapon: 'sword' | 'gun'
}