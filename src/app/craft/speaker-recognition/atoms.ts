import { atom } from "jotai";

interface RecognizedSpeaker {
  id: string;
  recognized: true;
  firstName: string;
  lastName: string;
}

interface UnrecognizedSpeaker {
  id: string;
  recognized: false;
}

export type Speaker = RecognizedSpeaker | UnrecognizedSpeaker;

export type Speakers = {
  [key: string]: Speaker;
};

const firstNames = [
  "James",
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Oliver",
  "Isabella",
  "William",
  "Sophia",
  "Lucas",
  "Mia",
  "Henry",
  "Charlotte",
  "Theodore",
  "Amelia",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
];

export const getRandomName = () => ({
  firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
  lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
});

export const speakersAtom = atom<Speakers>({});

export const newSpeakerAtom = atom<Speaker | null>(null);

export const editingSpeakerAtom = atom<Speaker | null>(null);
