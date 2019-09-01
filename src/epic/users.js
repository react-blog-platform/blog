import { ajax } from 'rxjs/ajax';
import Axios from 'axios';

// action creators
const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action =>
    Axios.get(`https://api.github.com/users/${action.payload.user}`).pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);
