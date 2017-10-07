export const isRequired = value => (value ? undefined : 'Это поле обязательно');
export const phoneValidate = value => (value.length === 13 ? undefined : 'Некорректный номер');
