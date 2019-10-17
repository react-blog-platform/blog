import { ActionTypes } from '../constants';
import { LoginAction } from '../actions';
type imageData = {
  url: string;
  copyright: string
}
export interface LoginState {
  name: string
  email: string
  images: Array<imageData>
  token: string
}

export const initialState: LoginState = {
  name: '',
  images: [],
  email: '',
  token: ''
};

export default function user(state: LoginState = initialState, action: LoginAction): any {
  console.log(action)
  switch (action.type) {
    case ActionTypes.FETCH_BACKGROUND_IMAGE_SUCCESS:
      return { ...state, images: action.payload.data && action.payload.data.data };
    case ActionTypes.SIGN_UP_SUCCESS:
      return { ...state, ...action.payload.data && action.payload.data.data };
    case ActionTypes.SIGN_IN_SUCCESS:
      return { ...state, ...action.payload.data && action.payload.data.data };
    default:
      return initialState;
  }
}