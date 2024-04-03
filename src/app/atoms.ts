import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const usernameAtom = atomWithStorage("username", "");
export const joinedAtom = atomWithStorage("joined", false);
// export const UUIDAtom = atomWithStorage("UUID", "");

