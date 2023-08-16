import './style.css';
import validator from 'validator';

const dataInput = document.querySelector('#data');
const dataSelect = document.querySelector('#data-select');
const button = document.querySelector('#submit');
const textResult = document.querySelector('#result');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const textAnswer = dataInput.value;
  const values = {
    cpf: validator.isTaxID(textAnswer, 'pt-BR'),
    email: validator.isEmail(textAnswer),
    url: validator.isURL(textAnswer),
    cellphone: validator.isMobilePhone(textAnswer, 'pt-BR'),
  };
  if (values[dataSelect.value] === true) {
    textResult.innerText = 'O dado passado está no formato correto!';
  } else {
    textResult.innerText = 'O dado passado não está no formato correto!';
  }
});
