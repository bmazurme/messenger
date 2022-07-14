export const inputs = [
  {
    label: 'Старый пароль',
    name: 'oldPassword',
    placeholder: '********',
    type: 'password',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input password-old',
    errClass: 'password-old-err',
    validationType: 'password',
    errSelector: '.password-old-err'
  },
  {
    label: 'Новый пароль',
    name: 'newPassword',
    placeholder: '********',
    type: 'password',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input password-new',
    errClass: 'password-new-err',
    validationType: 'password',
    errSelector: '.password-new-err'
  },
  {
    label: 'Повторите новый пароль',
    name: 'newPasswordConfirm',
    placeholder: '********',
    type: 'password',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input confirm-password',
    errClass: 'confirm-password-err',
    validationType: 'password',
    errSelector: '.confirm-password-err'
  }
];

