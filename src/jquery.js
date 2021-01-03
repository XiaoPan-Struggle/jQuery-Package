window.$ = window.jQuery = function(selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  }else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  const api = Object.create(jQuery.prototype) // 创建一个对象这个对象的 __proto__ 是jQuery.prototype
  Object.assign(api,{
    elements:elements,
    oldApi:selectorOrArray.oldApi,
  })
  return api
}
jQuery.fn = jQuery.prototype = {
    
  addClass(className) {
    // 闭包： 函数访问外部的变量
    for(let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className)
    }
    return this // 链式编程,这里this就是这个对象
  },
  find(selector) {
    let array = []
    for(let i = 0; i < this.elements.length; i++) {
      const ele = Array.from(this.elements[i].querySelectorAll(selector))
      array = array.concat(ele)
    }
    array.oldApi = this
    return jQuery(array)
  },
  end() {
    return this.oldApi
  },
  each(fn) {
    for(let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i)
    }
    return this // this 就是 window.jQuery里返回的那个对象
  },
  parent() {
    const array = []
    this.each((node) => {
      if (array.indexOf(node.parentNode) === -1) {
        array.push(node.parentNode)
      }
    })
    return jQuery(array)
  },
  children() {
    const array = []
    this.each((node) => {
      array.push(...node.children)
    })
    return jQuery(array)
  },
  siblings() {
    const array = []
    this.each((node) => {
      let siblingsArr = Array.from(node.parentNode.children).filter(n => n !== node)
      array.push(...siblingsArr)
    })
    return jQuery(array)
  },
  print() {
    console.log(this.elements)
  }
}