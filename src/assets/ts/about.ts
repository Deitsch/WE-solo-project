import '../styles/about.scss';

const formName = <HTMLInputElement>document.getElementById('form-name');
const formMail = <HTMLInputElement>document.getElementById('form-mail');
const formNumber = <HTMLInputElement>document.getElementById('form-number');
const formPw = <HTMLInputElement>document.getElementById('form-pw');
const form = document.getElementById('about-form');

export default function activateValidators() {
  console.log('validators active');
  formName.onkeyup = () => {
    if (/^[A-Za-z]{3,}$/.test(formName.value)) {
      formName.classList.remove('invalid');
    } else {
      formName.classList.add('invalid');
    }
  };

  formNumber.onkeyup = () => {
    if (/^[0-9]+$/.test(formNumber.value)) {
      formNumber.classList.remove('invalid');
    } else {
      formNumber.classList.add('invalid');
    }
  };

  formMail.onkeyup = () => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formMail.value)) {
      formMail.classList.remove('invalid');
    } else {
      formMail.classList.add('invalid');
    }
  };

  form.onsubmit = () => {
    let invalid = false;
    [formMail, formName, formNumber, formPw].forEach(input => {
      if (input.className.split(' ').indexOf('invalid') > -1 || input.value === '') {
        invalid = true;
      }
    });
    if (invalid) {
      console.error('form was invalid');
      return false;
    }

    console.log('form did submit');
    return true;
  };
}
