import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInfoReducer from "./Profile/ProfileInfo/ProfileInfoReducer";

const rootReducer = combineReducers({
  profile: combineReducers({
    info: ProfileInfoReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
