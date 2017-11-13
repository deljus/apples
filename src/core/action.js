import { APPLE } from './constants';

export const addApple = obj => ({
  type: APPLE.ADD,
  obj,
});
export const deleteApple = id => ({
  type: APPLE.DELETE,
  id,
});
export const editApple = (id, obj) => ({
  type: APPLE.EDIT,
  id,
  obj,
});
