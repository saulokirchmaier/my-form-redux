export const SEND_FORM = 'SEND_FORM';
export const RESET_FORM = 'RESET_FORM';
export const CHANGE_HANDLER = 'CHANGE_HANDLER'; 
export const ERROR_HENDLER = 'ERROR_HENDLER';

export const sendForm = () => ({
  type: SEND_FORM,
  submitted: true,
})

export const resetForm = () => ({
  type: RESET_FORM,
})

export const changeHandler = ({ name, value }) => ({
  type: CHANGE_HANDLER,
  name,
  value,
})

export const errorHandler = ({ name, error }) => ({
  type: ERROR_HENDLER,
  name,
  error,
})

