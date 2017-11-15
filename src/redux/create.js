/**
 * Created by DELL on 2017/11/15.
 */
import { createStore } from 'redux';
import reducers from './reducers';
export const store = createStore(reducers);