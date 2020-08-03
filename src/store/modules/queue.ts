import { MutationTree } from 'vuex';

import shuffleArray from '@/helpers/shuffleArray';

import { QueueState } from '../types';

const state: QueueState = {
  queue: [],
  allSongs: [],
  loop: false,
  shuffle: false,
  index: -1,
};

interface EnqueueEvent {
  songs: SongData[];
  shuffle?: boolean;
}

const mutations: MutationTree<QueueState> = {
  enqueue(state, { songs, shuffle }: EnqueueEvent) {
    shuffle = shuffle ?? false;

    console.log({ songs, shuffle });
    // state.index = 0;
    // state.shuffle = shuffle;
    // state.allSongs = [...songs];

    // if (shuffle) {
    //   state.queue = shuffleArray([...songs], 0);
    // } else {
    //   state.queue = [...songs];
    // }
  },
  dequeue(state) {
    state.allSongs = [];
    state.queue = [];
  },
  gotoSong(state, index: number) {
    state.index = index;
  },
  nextSong(state) {
    if (!state.loop) {
      state.index += 1;
    }
  },
  prevSong(state) {
    if (!state.loop) {
      state.index -= 1;
    }
  },
  toggleShuffle(state) {
    state.shuffle = !state.shuffle;

    if (state.shuffle) {
      state.queue = shuffleArray([...state.allSongs], state.index);
      state.index = 0;
    } else {
      state.queue = [...state.allSongs];
    }
  },
  toggleLoop(state) {
    state.loop = !state.loop;
  },
  toggleLiked(state, song: SongData) {
    const liked = !song.liked;

    const allSongsIndex = state.allSongs.findIndex(s => s.title === song.title);
    if (allSongsIndex >= 0) {
      state.allSongs[allSongsIndex].liked = liked;
    }

    const songsIndex = state.queue.findIndex(s => s.title === song.title);
    if (songsIndex >= 0) {
      state.queue[songsIndex].liked = liked;
    }
  },
  removeSong(state, song: SongData) {
    const allSongsIndex = state.queue.findIndex(s => s.title === song.title);
    if (allSongsIndex >= 0) {
      state.allSongs.splice(allSongsIndex, 1);
    }

    const songsIndex = state.queue.findIndex(s => s.title === song.title);
    if (songsIndex >= 0) {
      state.queue.splice(songsIndex, 1);
      if (songsIndex === state.queue.length) {
        state.index = 0;
      }
    }
  },
};

export default {
  state,
  mutations,
  namespaced: true,
};
