import { superIfChainedSolution } from "./base-solution";
import { refactorOne } from "./refactor-one";
import { refactorTwo } from "./refactor-two";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


  // Mejoras sugeridas:
  // - Implementar Strategy Pattern
  // - Reutilizar funciones
  // - Crear una clase para cada tipo de item
  // - Test coverage 100%
  // - Usar ternarios en IFs

  updateQuality() {

    // superIfChainedSolution(this.items);

    refactorOne(this.items);

    // refactorTwo(this.items);
    
    return this.items;
  }
}

