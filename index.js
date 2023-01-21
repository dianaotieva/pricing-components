let mainContent = document.querySelector('.pr');
let secondaryContent = document.querySelector('.pri-after');

document.querySelector('.switch input').addEventListener('change', e => { 
  mainContent.style.display = e.target.checked ? 'block' : 'none';
  secondaryContent.style.display = e.target.checked ? 'none' : 'block';
});

