import { Injectable, NotFoundException } from '@nestjs/common';
import { Ninja } from './entities/ninja.entity';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas: Ninja[] = [
        {
            id: 1, name: 'ninjaA', weapon: 'gun'
        },
        {
            id: 2, name: 'ninjaB', weapon: 'sword'
        }
    ];

    findAll(weapon?: 'sword' | 'gun') {
        if (weapon) {
            return this.ninjas.filter(i => i.weapon === weapon);
        }
        return this.ninjas;
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const ninja = {
            id: Date.now(), ...createNinjaDto
        }
        this.ninjas.push(ninja);

        return ninja;
    }

    findOneNinja(id: number) {
        const ninja = this.ninjas.filter(i => i.id === id);
        if (ninja.length === 0) {
            throw new NotFoundException('Ninja not found');
        }
        return ninja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map(i => {
            if (i.id === id) {
                return { ...i, ...updateNinjaDto }
            }
            return i;
        });
        return this.findOneNinja(id);
    }

    deleteNinja(id: number) {
        const removedNinja = this.findOneNinja(id);
        this.ninjas = this.ninjas.filter(i => i.id !== id);
        return removedNinja;
    }

}
