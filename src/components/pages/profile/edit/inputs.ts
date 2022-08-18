export const inputs = [
  {
    label: 'Почта',
    name: 'email',
    type: 'email',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input email',
    placeholder: '',
    errClass: 'email-err',
    validationType: 'email',
    errSelector: '.email-err',
  },
  {
    label: 'Логин',
    name: 'login',
    type: 'text',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input login',
    placeholder: '',
    errClass: 'login-err',
    validationType: 'login',
    errSelector: '.login-err'
  },
  {
    label: 'Имя',
    name: 'first_name',
    type: 'text',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input first-name',
    placeholder: '',
    errClass: 'first-name-err',
    validationType: 'first_name',
    errSelector: '.first-name-err'
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    type: 'text',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input second-name',
    placeholder: '',
    errClass: 'second-name-err',
    validationType: 'second_name',
    errSelector: '.second-name-err'
  },
  {
    label: 'Имя в чате',
    name: 'display_name',
    type: 'text',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input nickname',
    placeholder: '',
    errClass: 'nickname-err',
    validationType: 'nickname',
    errSelector: '.nickname-err'
  },
  {
    label: 'Телефон',
    name: 'phone',
    type: 'tel',
    labelClass: 'list__label',
    inputClass: 'input list__value list__value_input phone',
    placeholder: '',
    errClass: 'phone-err',
    validationType: 'phone',
    errSelector: '.phone-err'
  }
];
