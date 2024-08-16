import { atomWithStorage } from "jotai/utils";
import { v4 as uuidv4 } from "uuid";

export const usernameAtom = atomWithStorage("username", "");
export const joinedAtom = atomWithStorage("joined", false);
export const UUIDAtom = atomWithStorage("UUID", uuidv4());
