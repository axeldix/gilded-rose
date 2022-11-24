import { ITEM } from "./constants";
import { defaultCase, updateAgedBrieQuality, updateBackstagePassesQuality, updateConjuredQuality } from "./updateQuality";

export const refactorOne = (items) => {
    for (const item of items) {
        switch (item.name) {
            case ITEM.AGED_BRIE:
                updateAgedBrieQuality(item);
                break;
            case ITEM.BACKSTAGE_PASSES:
                updateBackstagePassesQuality(item);
                break;
            case ITEM.CONJURED:
                updateConjuredQuality(item);
                break;
            case ITEM.SULFURAS:
                break;
            default:
                defaultCase(item);
                break;
        }
    }
}