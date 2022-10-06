import { createStore } from "redux";

import {LoginReducer as authReducer} from "./reducer";




export const store = createStore(authReducer)
