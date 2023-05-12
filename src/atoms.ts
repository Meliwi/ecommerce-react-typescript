import { atom } from "recoil";
import { CartProduct } from "./interfaces/CartProduct";

export const shoppingHistoryState = atom<CartProduct[]>({
    key: "shoppingHistoryState",
    default: [],
});