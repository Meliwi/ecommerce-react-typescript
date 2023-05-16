import { atom } from "recoil";
import { CartProduct } from "./interfaces/CartProduct";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: localStorage,
});
export const shoppingHistoryState = atom<CartProduct[]>({
    key: "shoppingHistoryState",
    default: [],
    effects_UNSTABLE: [persistAtom],
});