"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cavalo_1 = require("./../classes/Cavalo");
var dao_1 = require("./dao");
var Animal_1 = require("./../classes/Animal");
var dao = new dao_1.Dao();
var animal = new Animal_1.Animal('Rex');
var cavalo = new Cavalo_1.Cavalo('Titã');
dao.insert(animal);
//# sourceMappingURL=run.js.map