/* eslint-disable camelcase */
import _ from 'lodash';

/*
  @params source:=> source object
  @params destination:=> destination object
  @params field:=> field array

  return new object with the fields defined in field array
*/
export const intersection = (source, destination, fields) => {
  const result = {};
  fields.forEach((field) => {
    if (destination[field]) {
      result[field] = destination[field];
    } else {
      result[field] = source[field];
    }
  });
  return result;
};

export const compareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return _.difference(keys1, keys2);
};
