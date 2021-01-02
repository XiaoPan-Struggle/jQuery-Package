window.jQuery = function(selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  }else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  return {
    addClass(className) {
      // 闭包： 函数访问外部的变量
      for(let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this // 链式编程,这里this就是这个对象
    },
    find(selector) {
      let array = []
      for(let i = 0; i < elements.length; i++) {
        const ele = Array.from(elements[i].querySelectorAll(selector))
        array = array.concat(ele)
      }
      return jQuery(array)
    }
  }
}