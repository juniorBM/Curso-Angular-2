import { Cavalo } from './../classes/Cavalo';
import { Dao } from './dao';
import { Animal } from './../classes/Animal';

let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal =  new Animal('Rex');
let cavalo: Cavalo = new Cavalo('Titã');

dao.insert(animal);