let mainContent = document.querySelector('.pr');
let secondaryContent = document.querySelector('.pr-after');

document.querySelector('#switch').addEventListener('change', e => { 
  mainContent.style.display = e.target.checked ? 'none' : 'block';
  secondaryContent.style.display = e.target.checked ? 'block' : 'none' ;
});
