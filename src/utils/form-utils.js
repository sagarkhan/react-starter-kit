import validator from 'validator';
import { Subject } from 'rxjs';

const resetFormSubject = new Subject();

export const checkInitialValid = (inputValues) => {
  const defaults = Object.values(inputValues);
  let flag = true;
  if (!defaults.length) {
    flag = false;
  }
  defaults.forEach((item) => {
    if (validator.isEmpty(item.toString())) {
      flag = false;
    }
  });
  return flag;
};

export const resetForm = (emit) => {
  if (emit) {
    return resetFormSubject.next(emit);
  }
  return resetFormSubject.asObservable();
};
