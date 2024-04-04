import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"

import usersReducer from "./slices/userSlice"

const rootReducer = combineReducers({
  
  users: usersReducer
})

export const persistedReducer = persistReducer(
  {
    key: "auth",
    storage
  },
  rootReducer
)