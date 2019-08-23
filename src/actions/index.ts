import qs from 'qs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ActionTypes } from '../constants';

interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  user: object;
}
interface fetchBackgroundImageAction {
  type: ActionTypes.FETCH_BACKGROUND_IMAGE;
  payload: {
    request: AxiosRequestConfig
  };
}


interface fetchBackgroundImageSuccessAction {
  type: ActionTypes.FETCH_BACKGROUND_IMAGE_SUCCESS;
  payload: {
    data: AxiosResponse
  };
}

interface signUpAction {
  type: ActionTypes.SIGN_UP;
  payload: {
    request: AxiosRequestConfig
  };
}

interface signUpSuccessAction {
  type: ActionTypes.SIGN_UP_SUCCESS;
  payload: {
    request: AxiosResponse
  };
}

export type UserAction = UpdateUserAction;
export type LoginAction = fetchBackgroundImageAction | fetchBackgroundImageSuccessAction
export type SignUpAction = signUpAction|signUpSuccessAction;


export function upateUser(user: object): UpdateUserAction {
  return {
    type: ActionTypes.UPDATE_USER,
    user
  };
}

// 获取bing背景图
export function fetchBackgroundImage(payload: AxiosRequestConfig):fetchBackgroundImageAction {
  const query = qs.stringify(payload)
  return {
    type: ActionTypes.FETCH_BACKGROUND_IMAGE,
    payload: {
      request: {
        url: `bing/bgImage?${query}`,
      }
    }
  }
}

// 注册
export function signUp(payload: AxiosRequestConfig):signUpAction {
  return {
    type: ActionTypes.SIGN_UP,
    payload: {
      request: {
        url: `user/signup`,
        method: 'post',
        data: payload
      }
    }
  }
}