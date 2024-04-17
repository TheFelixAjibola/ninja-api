import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Peace Ajibola', skill: 'Professional HairStyler' },
    { id: 1, name: 'Felix Ajibola', skill: 'Software Engineer' },
  ];

  getNinjas(skill?: 'Professional HairStyler' | 'Software Engineer') {
    if (skill) {
      return this.ninjas.filter((ninja) => ninja.skill === skill);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const findingNinja = this.ninjas.find((ninja) => ninja.id === id);
    if (!findingNinja) {
      throw new Error('Ninja not found');
    }
    return findingNinja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const NewNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(NewNinja);

    return NewNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return toBeRemoved;
  }
}
