let priceBasic = document.querySelector('#price-bas');
let pricePro = document.querySelector('#price-pro')
let priceMas = document.querySelector('#price-mas')
let afterBas = document.querySelector('#after-bas');
let afterPro = document.querySelector('#after-pro');
let afterMas = document.querySelector('#after-mas')

document.querySelector('#switch').addEventListener('change', e => { 
  priceBasic.style.display = e.target.checked ? 'none' : 'block';
  afterBas.style.display = e.target.checked ? 'block' : 'none' ;

  pricePro.style.display = e.target.checked ? 'none' : 'block';
  afterPro.style.display = e.target.checked ? 'block' : 'none' ;

  priceMas.style.display = e.target.checked ? 'none' : 'block';
  afterMas.style.display = e.target.checked ? 'block' : 'none' ;

});
