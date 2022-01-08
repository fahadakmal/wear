import SHopActionTypes from "./shop.types";

export const updateCollections=(collectionsMap)=>({
    type:SHopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
})