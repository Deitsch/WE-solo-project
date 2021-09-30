import '../styles/validation.scss';

export default function activateValidators() {
  console.log('validators active');
  const formName = <HTMLInputElement>document.getElementById('form-name');
  formName.onkeyup = () => {
    if (/^[A-Za-z]{3,}$/.test(formName.value)) {
      formName.classList.remove('invalid');
    } else {
      formName.classList.add('invalid');
    }
  };

  const formNumber = <HTMLInputElement>document.getElementById('form-number');
  formNumber.onkeyup = () => {
    if (/^[0-9]+$/.test(formNumber.value)) {
      formNumber.classList.remove('invalid');
    } else {
      formNumber.classList.add('invalid');
    }
  };

  const formMail = <HTMLInputElement>document.getElementById('form-mail');
  formMail.onkeyup = () => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formMail.value)) {
      formMail.classList.remove('invalid');
    } else {
      formMail.classList.add('invalid');
    }
  };
}
