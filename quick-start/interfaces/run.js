"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./../classes/Animal");
var animal_dao_1 = require("./animal-dao");
// let dao: DaoInterface = new AnimalDao();
var dao = new animal_dao_1.AnimalDao();
var animal = new Animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map