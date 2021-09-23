import { combineReducers } from 'redux';

import authFirebase from './authFirebase';
import { taskReducer } from './taskReducer';

const rootReducer = combineReducers({
  authFirebase,
  taskReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { RootState };
