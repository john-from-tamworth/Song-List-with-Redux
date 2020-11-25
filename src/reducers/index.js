import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Bad', duration: '4:10' },
    { title: 'Gimme all your lovin', duration: '4:45' },
    { title: 'Mr Loverman', duration: '4.35' },
    { title: 'Gordons Grove', duration: '7:00' },
    { title: 'Come Over', duration: '3:49' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
