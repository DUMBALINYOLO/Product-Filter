import axios from 'axios';

const END_POINT = '/api/all';

const requestData = () => ({
  type: 'REQUEST_DATA',
});

const receiveData = (json: any, pageNumber: number) => ({
  type: 'RECEIVE_DATA',
  payload: {
    data: json.data,
    pageNumber,
  },
});

/*
Thunk Middleware:
When we dispatch a function, Redux Thunk will give it dispatch as an argument.
If Redux Thunk middleware is enabled, any time you attempt to dispatch a function instead of an
action object, the middleware will call that function with dispatch method itself as the first
argument.
This is required to dispatch functions one by one, abstracting from component itself.
*/
const fetchData = (url: string, pageNumber?: number = 1) => (
  dispatch: Function
) => {
  dispatch(requestData);
  const axiosEndPoint = `${END_POINT}?page=${pageNumber}${url}`;
  axios(axiosEndPoint).then(json => dispatch(receiveData(json, pageNumber)));
};

export default fetchData;
