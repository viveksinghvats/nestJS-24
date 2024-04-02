import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService) { }

    @Get()
    findAll(@Query('weapon') weapon: 'sword' | 'gun') {
        return this.ninjaService.findAll(weapon);
    }

    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjaService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateNinjaDto) {
        return this.ninjaService.updateNinja(id, updateUserDto);
    }

    @Get(':id')
    findOneNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjaService.findOneNinja(id);
    }

    @Delete(':id')
    deleteNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjaService.deleteNinja(id);
    }
}
