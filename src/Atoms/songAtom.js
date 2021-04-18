import { atom, selector } from "recoil";

export const songsState = atom({
    key: 'songs',
    default: null,
});


export const songFilterState = atom({
    key: 'songFilter',
    default: ''
})

export const songsSelector = selector({
    key: 'songsSelector', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const songs = get(songsState);
        return songs;
    },
});


export const songsFilterSelector = selector({
    key: 'songsFilterSelector', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const songFilter = get(songFilterState);
        return songFilter;
    },
});
