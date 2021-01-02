window.jQuery = function(selector) {
  const elements = document.querySelectorAll(selector)
  const api = {
    addClass(className) {
      // 闭包： 函数访问外部的变量
      for(let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return api
    }
  }
  return api
}