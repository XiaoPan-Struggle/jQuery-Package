window.jQuery = function(selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  }else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  return {
    oldApi:selectorOrArray.oldApi,
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
      array.oldApi = this
      return jQuery(array)
    },
    end() {
      return this.oldApi
    },
    each(fn) {
      for(let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this // this 就是 window.jQuery里返回的那个对象
    }
  }
}