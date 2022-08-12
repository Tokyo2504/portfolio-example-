const value = document.querySelectorAll('.rating__value');
const line = document.querySelectorAll('.rating__line');

value.forEach( (item, i) => {
  line[i].style.width = item.innerHTML;
});
