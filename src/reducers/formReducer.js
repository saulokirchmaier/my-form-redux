import { SEND_FORM, RESET_FORM, CHANGE_HANDLER, ERROR_HENDLER } from '../actions';

const INITIAL_FORM = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

const formReducer = (state = INITIAL_FORM, action) => {
  switch (action.type) {
    case SEND_FORM:
      return { ...state, submitted: action.submitted };
    case RESET_FORM:
      return { ...INITIAL_FORM };
    case CHANGE_HANDLER:
      return { ...state, [action.name]: action.value };
    case ERROR_HENDLER:
      return { ...state, formError: { ...state.formError, [action.name]: action.error} }
    default:
      return state;
  }
};

export default formReducer;
