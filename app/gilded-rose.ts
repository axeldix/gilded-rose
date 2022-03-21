import { isDefaultClause } from "typescript";
import { ITEM } from "./constants";
import { defaultCase, updateAgedBrieQuality, updateBackstagePassesQuality, updateConjuredQuality } from "./updateQuality";

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

  updateQuality() {

    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case ITEM.AGED_BRIE:
          updateAgedBrieQuality(this.items[i]);
          break;
        case ITEM.BACKSTAGE_PASSES:
          updateBackstagePassesQuality(this.items[i]);
          break;
        case ITEM.CONJURED:
          updateConjuredQuality(this.items[i]);
          break;
        case ITEM.SULFURAS:
          break;
        default:
          defaultCase(this.items[i]);
          break;
      }
    }
    return this.items;
  }
}

