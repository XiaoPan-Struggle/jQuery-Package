// const api = jQuery('.test')
// api.addClass('.red').addClass('.blue')
jQuery('.test')
  .addClass('.red')
  .addClass('.blue')

const child = jQuery('.test').find('.child').addClass('.tex').end().addClass('.xxx')
console.log(child)

const arr = jQuery('.test').find('.child')
arr.each((element, index) => {
  console.log(index)
  console.log(element)
})


jQuery('.test').parent().print()
jQuery('.test').children().print()

jQuery('.test').find('.child1').siblings().print()