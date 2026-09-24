export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song,
    };
};

export const removeSong = (songId) => {
    return {
        type: "REMOVE_SONG",
        payload: songId,
    };
};