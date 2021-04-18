import { atom, selector } from "recoil";

export const songsState = atom({
    key: 'songs',
    default: [],
});


export const songsSelector = selector({
    key: 'songsSelector', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const songs = get(songsState);
        return songs;
    },
});
