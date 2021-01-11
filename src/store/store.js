import { configureStore } from '@reduxjs/toolkit';
import darkModeToggleSlice from '../header/darkModeToggleSlice';
import spacesListSlice from '../spaces/spacesListSlice';

export default configureStore({
  reducer: {
    themeMode: darkModeToggleSlice,
    spaces: spacesListSlice,
  },
});
