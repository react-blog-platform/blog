import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk'
import reducers from '../reducers'
import {middlewareConfig} from '../config/interceptor'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../epic/root';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:8080/api',
  responseType: 'json'
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducers, //custom reducers
  applyMiddleware(
    thunk,
    epicMiddleware,
    axiosMiddleware(client,middlewareConfig)
  )
)

epicMiddleware.run(rootEpic);

export default store;