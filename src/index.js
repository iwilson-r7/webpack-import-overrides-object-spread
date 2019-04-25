import { test } from './thing';

const x = () => {
  const {
    ...test
  } = {
    a: 1
  };

  console.log('The value of test is:', test);
};

x();
