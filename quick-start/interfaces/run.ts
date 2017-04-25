import { Animal } from './../classes/Animal';
import { AnimalDao } from './animal-dao';
import { DaoInterface } from './dao.interface';

// let dao: DaoInterface = new AnimalDao();
let dao: AnimalDao = new AnimalDao();
let animal: Animal = new Animal('Rex');

dao.insert(animal);