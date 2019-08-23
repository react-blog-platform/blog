import { ActionTypes } from '../constants';
import { LoginAction, SignUpAction } from '../actions';
type imageData={
  url:string;
  copyright:string
}
export interface LoginState {
  name: string;
  addressList: Array<string>;
  images: Array<imageData>
}

export const initialState: LoginState = {
  name: '',
  addressList: [],
  images: []
};

export default function user(state: LoginState = initialState, action: LoginAction|SignUpAction): any {
  switch (action.type) {
    case ActionTypes.FETCH_BACKGROUND_IMAGE_SUCCESS:
      console.log(action)
      return { ...state, images: action.payload.data && action.payload.data.data };
    case ActionTypes.SIGN_UP_SUCCESS:
      console.log(action)
      return { ...state,  };
    default:
      return initialState;
  }
}