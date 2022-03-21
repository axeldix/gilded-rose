import { Item } from "./gilded-rose";

export function updateBackstagePassesQuality(item: Item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
        item.quality = item.quality - item.quality
    }
}

export function updateConjuredQuality(item: Item) {
    if (item.quality > 0) {
        item.quality = item.quality - 2
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
        if (item.quality > 0) {
            item.quality = item.quality - 2
        }
    }
}

export function updateAgedBrieQuality(item: Item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
        if (item.quality < 50) {
            item.quality = item.quality + 1
        }
    }
}

export function defaultCase(item: Item) {
    if (item.quality > 0) {
        item.quality = item.quality - 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
        if (item.quality > 0) {
            item.quality = item.quality - 1
        }
    }
}


