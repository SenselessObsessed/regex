import Validator from "../js/app";

test('should be truthy username', () => {
  let truthyUsername = 'qwe123qwe';
  let truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeTruthy();

  truthyUsername = 'vasya203pro';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeTruthy();

  truthyUsername = 'vityaKrut0Y';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeTruthy();

  truthyUsername = 'va5ya20pr0s70Kra5AvA';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeTruthy();
});

test('should be falsy username', () => {
  let truthyUsername = '1qwe123qwe';
  let truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeFalsy();

  truthyUsername = 'vasya203pro2';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeFalsy();

  truthyUsername = 'vityaKrut0000Y';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeFalsy();

  truthyUsername = 'va5ya2003pr0s70Kra5AvA';
  truthyUser = new Validator(truthyUsername);
  expect(truthyUser.validateUsername()).toBeFalsy();
});

test('should number is normal changed', () => {
  let truthyUsername = '1qwe123qwe';
  let truthyUser = new Validator(truthyUsername, '8 (927) 000-00-00');
  expect(truthyUser.changeNumberToJSON()).toBe('+89270000000');

  truthyUsername = 'vasya203pro2';
  truthyUser = new Validator(truthyUsername, '+7 960 000 00 00');
  expect(truthyUser.changeNumberToJSON()).toBe('+79600000000');

  truthyUsername = 'vityaKrut0000Y';
  truthyUser = new Validator(truthyUsername, '+86 000 000 0000');
  expect(truthyUser.changeNumberToJSON()).toBe('+860000000000');
});
