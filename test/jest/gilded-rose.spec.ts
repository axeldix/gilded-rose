import { Item, GildedRose } from '@/gilded-rose';

let gildedRose

const initializeItems = (name, sellIn, quality) => {
  gildedRose = new GildedRose([new Item(name, sellIn, quality)])
}

describe('Gilded Rose +5 Dexterity Vest', () => {
  beforeAll(() => {
    initializeItems("+5 Dexterity Vest", 10, 20)
  })
  it('After 1 day +5 Dexterity Vest should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('+5 Dexterity Vest'); 
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });
  it('After 2 days +5 Dexterity Vest should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('+5 Dexterity Vest');
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(18);
  });
  it('After 3 days +5 Dexterity Vest should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('+5 Dexterity Vest');
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(17);
  });
  it('After 4 days +5 Dexterity Vest should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('+5 Dexterity Vest');
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(16);
  });
});

describe('Gilded Rose Aged Brie', () => {
  beforeAll(() => {
    initializeItems("Aged Brie", 2, 0)
  })
  it('After 1 day Aged Brie should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie'); 
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });
  it('After 2 days Aged Brie should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
  });
  it('After 3 days Aged Brie should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(4);
  });
  it('After 4 days Aged Brie should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(6);
  });
});

describe('Gilded Rose Elixir of the Mongoose', () => {
  beforeAll(() => {
    initializeItems("Elixir of the Mongoose", 5, 7)
  })
  it('After 1 day Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });
  it('After 2 days Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(5);
  });
  it('After 3 days Elixir of the Mongoose should have this values ', () => {    
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });
  it('After 4 days Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(3);
  });
  it('After 5 days Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
  });
  it('After 6 days Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it('After 7 days Elixir of the Mongoose should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Elixir of the Mongoose');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose Sulfuras, Hand of Ragnaros', () => {
  beforeAll(() => {
    initializeItems("Sulfuras, Hand of Ragnaros", 0, 80)
  })
  it('After 1 day Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });
  it('After 2 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);;
  });
  it('After 3 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });
  it('After 4 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });
});

describe('Gilded Rose Sulfuras, Hand of Ragnaros N2', () => {
  beforeAll(() => {
    initializeItems("Sulfuras, Hand of Ragnaros", -1, 80)
  })
  it('After 1 day Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });
  it('After 2 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);;
  });
  it('After 3 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });
  it('After 4 days Sulfuras, Hand of Ragnaros should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });
});

describe('Gilded Rose Backstage passes to a TAFKAL80ETC concert', () => {
  beforeAll(() => {
    initializeItems("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  })
  it('After 1 day Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });
  it('After 2 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(13);
    expect(items[0].quality).toBe(22);;
  });
  it('After 3 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(12);
    expect(items[0].quality).toBe(23);
  });
  it('After 4 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(24);
  });
  it('After 5 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(25);
  });
  it('After 6 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(27);
  });
 
  it('After 7 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(29);
  });
});

describe('Gilded Rose Backstage passes to a TAFKAL80ETC concert N2', () => {
  beforeAll(() => {
    initializeItems("Backstage passes to a TAFKAL80ETC concert", 10, 49)
  })
  it('After 1 day Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
  it('After 2 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(50);;
  });
  it('After 3 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(50);
  });
  it('After 4 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(50);
  });
});


describe('Gilded Rose Backstage passes to a TAFKAL80ETC concert N3', () => {
  beforeAll(() => {
    initializeItems("Backstage passes to a TAFKAL80ETC concert", 5, 49)
  })
  it('After 1 day Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });
  it('After 2 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(50);;
  });
  it('After 3 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(50);
  });
  it('After 4 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });
  it('After 5 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it('After 6 days Backstage passes to a TAFKAL80ETC concert should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});

describe('Gilded Rose Conjured Mana Cake', () => {
  beforeAll(() => {
    initializeItems("Conjured Mana Cake", 3, 6)
  })
  it('After 1 day Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });
  it('After 2 days Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);;
  });
  it('After 3 days Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it('After 4 days Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it('After 5 days Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it('After 6 days Conjured Mana Cake should have this values ', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(0);
  });
});