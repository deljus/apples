import { APPLE } from './constants';

const initState = [{
  id: 1,
  variety: 'Зима',
  name: 'Антоновка',
  description: 'Хранятся до конца света',
}];

export const apples = (state = initState, action) => {
  switch (action.type) {
    case APPLE.ADD:
      return [
        {
          id: state.reduce((maxId, apple) => Math.max(apple.id, maxId), 0) + 1,
          ...action.obj,
        },
        ...state,
      ];

    case APPLE.DELETE:
      return state.filter(apple =>
        apple.id !== action.id,
      );
    case APPLE.EDIT:
      return state.map(apple =>
        (apple.id === action.id ?
          { ...apple, ...action.obj } :
          apple),
      );

    default:
      return state;
  }
};
