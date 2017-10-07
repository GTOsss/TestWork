import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Button from '../inputs/button';
import Input from '../inputs/input';
import InputSelect from '../inputs/input-select';
import FlagIcon from '../../flag-icon';
import { isRequired, phoneValidate } from './validation';

import style from './login-form.scss';

const optionsCountry = [
  { label: <FlagIcon />, value: '+7' },
  { label: <FlagIcon x={1} y={1} />, value: '+1' },
  { label: <FlagIcon x={2} y={1} />, value: '+2' },
  { label: <FlagIcon x={3} y={1} />, value: '+3' },
  { label: <FlagIcon x={4} y={1} />, value: '+4' },
  { label: <FlagIcon x={5} y={1} />, value: '+5' },
  { label: <FlagIcon x={6} y={1} />, value: '+6' },
  { label: <FlagIcon x={7} y={1} />, value: '+99' },
  { label: <FlagIcon x={8} y={1} />, value: '+8' },
  { label: <FlagIcon x={9} y={1} />, value: '+9' },
  { label: <FlagIcon x={1} y={2} />, value: '+11' },
  { label: <FlagIcon x={2} y={2} />, value: '+12' },
  { label: <FlagIcon x={3} y={2} />, value: '+13' },
  { label: <FlagIcon x={4} y={2} />, value: '+14' },
  { label: <FlagIcon x={5} y={2} />, value: '+15' },
  { label: <FlagIcon x={6} y={2} />, value: '+16' },
  { label: <FlagIcon x={7} y={2} />, value: '+17' },
  { label: <FlagIcon x={8} y={2} />, value: '+18' },
  { label: <FlagIcon x={1} y={3} />, value: '+19' },
  { label: <FlagIcon x={2} y={3} />, value: '+20' },
  { label: <FlagIcon x={3} y={3} />, value: '+21' },
  { label: <FlagIcon x={4} y={3} />, value: '+22' },
  { label: <FlagIcon x={5} y={3} />, value: '+23' },
  { label: <FlagIcon x={6} y={3} />, value: '+24' },
  { label: <FlagIcon x={7} y={3} />, value: '+25' },
  { label: <FlagIcon x={8} y={3} />, value: '+26' },
  { label: <FlagIcon x={1} y={4} />, value: '+27' },
  { label: <FlagIcon x={2} y={4} />, value: '+28' },
  { label: <FlagIcon x={3} y={4} />, value: '+29' },
  { label: <FlagIcon x={4} y={4} />, value: '+30' },
  { label: <FlagIcon x={5} y={4} />, value: '+31' },
  { label: <FlagIcon x={6} y={4} />, value: '+32' },
  { label: <FlagIcon x={7} y={4} />, value: '+33' },
  { label: <FlagIcon x={8} y={4} />, value: '+34' },
  { label: <FlagIcon x={1} y={5} />, value: '+35' },
  { label: <FlagIcon x={2} y={5} />, value: '+36' },
  { label: <FlagIcon x={3} y={5} />, value: '+37' },
  { label: <FlagIcon x={4} y={5} />, value: '+38' },
  { label: <FlagIcon x={5} y={5} />, value: '+39' },
  { label: <FlagIcon x={6} y={5} />, value: '+40' },
  { label: <FlagIcon x={7} y={5} />, value: '+41' },
  { label: <FlagIcon x={8} y={5} />, value: '+42' },
  { label: <FlagIcon x={1} y={6} />, value: '+43' },
  { label: <FlagIcon x={2} y={6} />, value: '+45' },
  { label: <FlagIcon x={3} y={6} />, value: '+56' },
  { label: <FlagIcon x={4} y={6} />, value: '+63' },
  { label: <FlagIcon x={5} y={6} />, value: '+64' },
  { label: <FlagIcon x={6} y={6} />, value: '+70' },
  { label: <FlagIcon x={7} y={6} />, value: '+71' },
  { label: <FlagIcon x={8} y={6} />, value: '+73' },

];

const loadOptions = (input, callback) => {
  const options = [
    { label: 'Водитель', value: 'Водитель' },
    { label: 'Парикмахер', value: 'Парикмахер' },
    { label: 'Программист', value: 'Программист' },
  ];

  setTimeout(() => callback(null, { options, complete: true }), 500);
};

let Form = class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phoneFocus: false };
    this.onFocusPhoneNumber = this.onFocusPhoneNumber.bind(this);
    this.onBlurPhoneNumber = this.onBlurPhoneNumber.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
  }

  componentDidUpdate() {
    if (this.inputCountry && this.props.phoneCountry) {
      this.inputCountry.value = this.props.phoneCountry;
    }

    if (this.inputPhoneNumber && this.props.phoneNumber) {
      this.inputPhoneNumber.value = this.props.phoneNumber;
    }

    if (this.state.phoneFocus) {
      this.inputPhoneNumber.focus();
    }
  }

  onFocusPhoneNumber() {
    if (!this.state.phoneFocus) {
      this.setState({ phoneFocus: true });
    }
  }

  onBlurPhoneNumber() {
    this.setState({ phoneFocus: false });
  }

  onChangePhoneNumber(e) {
    let text = e.target.value;
    text = text.match(/([0-9]+)/g) || [];
    text = text.join('').slice(0, 10);
    text = text.replace(/([0-9]{3})([0-9]{1,3})([0-9]{0,2})([0-9]{0,2})/,
      (substring, g1, g2, g3, g4) => {
        let result = '';
        if (g1) result += g1;
        if (g2) result += ` ${g2}`;
        if (g3) result += `-${g3}`;
        if (g4) result += `-${g4}`;

        return result;
      });
    this.inputPhoneNumber.value = text;
  }


  render() {
    const { handleSubmit, isBtnSearchDisable } = this.props;

    return (
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
        </div>
        <div className={style.wrapRow}>
          <div className={style.wrapColumn}>
            <label className={style.label} htmlFor="firstName">Имя</label>
            <Field
              name="firstName"
              validate={isRequired}
              component={props => (
                <Input
                  {...props}
                />
              )}
            />
          </div>
            &nbsp;
            &nbsp;
            &nbsp;
          <div className={style.wrapColumn}>
            <label className={style.label} htmlFor="lastName">Фамилия</label>
            <Field
              name="lastName"
              validate={isRequired}
              component={props => (
                <Input
                  {...props}
                />
              )}
            />
          </div>
        </div>

        <label className={style.label} htmlFor="profession">Профессия</label>
        <Field
          name="profession"
          component={props => (
            <InputSelect
              {...props}
              loadOptions={loadOptions}
            />
          )}
        />

        <label className={style.label} htmlFor="phoneCountry">Телефон</label>
        <div className={style.wrapRow}>
          <Field
            name="phoneCountry"
            component={props => (
              <InputSelect
                {...props}
                cssTypeGroup={'right'}
                cssWidth={'21%'}
                options={optionsCountry}
                defaultValue={'+7'}
              />)}
          />
          <Input
            cssTypeGroup={'both'}
            cssWidth={'21%'}
            setRef={(e) => {
              this.inputCountry = e;
            }}
            cssInput={{
              borderRight: 'none',
              borderColor: this.state.phoneFocus ? '#1787FD' : '#CBCBCB',
            }}
            defaultValue={'+7'}
            readOnly
          />
          <Field
            name="phoneNumber"
            validate={[isRequired, phoneValidate]}
            component={props => (
              <Input
                {...props}
                cssTypeGroup={'left'}
                cssWidth={'61%'}
                setRef={(e) => {
                  this.inputPhoneNumber = e;
                }}
                cssInput={{ borderLeft: 'none' }}
                placeholder={'987 654-32-10'}
                onFocus={this.onFocusPhoneNumber}
                onBlur={this.onBlurPhoneNumber}
                onChange={this.onChangePhoneNumber}
              />)}
          />
        </div>

        <Button type="submit" disabled={isBtnSearchDisable} value="Зарегистрироваться" />
      </form>
    );
  }
}
;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isBtnSearchDisable: PropTypes.bool,
  phoneCountry: PropTypes.string,
  phoneNumber: PropTypes.string,
};

Form.defaultProps = {
  isBtnSearchDisable: false,
  phoneCountry: '',
  phoneNumber: '',
};

Form = reduxForm({ form: 'login' })(Form);

const selector = formValueSelector('login');
const mapStateToProps = (state) => {
  const { phoneCountry, phoneNumber } = selector(state, 'phoneCountry', 'phoneNumber');
  const initialValues = { phoneCountry: '+7' };
  return { phoneCountry, phoneNumber, initialValues };
};

export default connect(mapStateToProps)(Form);
