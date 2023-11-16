const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  const guide = document.querySelector('#guide')

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please give valid input';
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please give valid input';
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<div>${bmi}</div>`;

    if(bmi<18.6){
      guide.innerHTML = `<span>You are Under Weight</span>`
    } else if(bmi>=18.6 || bmi<=24.9){
      guide.innerHTML = `<span>You are Normal Weight</span>`
    } else {
      guide.innerHTML = `<span>You are Over Weight</span>`
    }
  }

  
});