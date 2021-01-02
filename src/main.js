// const api = jQuery('.test')
// api.addClass('.red').addClass('.blue')
jQuery('.test')
  .addClass('.red')
  .addClass('.blue')

const child = jQuery('.test').find('.child')
console.log(child)