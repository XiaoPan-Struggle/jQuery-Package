window.jQuery = function(selector) {
  const elements = document.querySelectorAll(selector)
  return {
    addClass(className) {
      // 闭包： 函数访问外部的变量
      for(let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this // 链式编程,这里this就是这个对象
    }
  }
}