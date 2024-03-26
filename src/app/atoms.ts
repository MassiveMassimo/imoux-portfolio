import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const usernameAtom = atomWithStorage("username", "");
export const joinedAtom = atomWithStorage("joined", false);
// export const UUIDAtom = atomWithStorage("UUID", "");

export const UUIDAtom = atomWithStorage("UUID", () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
});
