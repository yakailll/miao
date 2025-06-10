/*
var yakailll = function() {
  function chunk() {

  }
  function flattem() {

  }
  function reverse() {

  }

  return (
    chunk: chumk,
    flatten: flatten,
    reverse: reverse,
  )
}()
  表示定义一个名为 "yakailll" 的变量，指向一个函数，函数里面定义了很多函数
  返回值是一个对象，对象中将函数名作为属性名，属性值是各自的函数
  最后的 "()" 表示调用函数，即 yakailll 等于 函数运行后返回的那个对象
  yakailll.chunk() 就可以调用函数内定义的 chunk 函数
*/


"use strict"
var yakailll = function() {
  // 将 array 分块，每块 size 个
  function chunk(array, size = 1) { // chunk 块
    // 空数组或者数组长度小于 size
    if (!array || array.length <= size) {
      return array
    }
    let result = []
    let count = 0
    while (count < array.length) {
      let middle = []
      for(let i = 0 ; i < size ; i++) {
        if (count < array.length) {
          middle[i] = array[count]
        }
        count++
      }
      result.push(middle)
    }
    return result
  }

  // 将 array 压实，去掉 "" undefined NaN null false
  function compact(array) { // compact 压实
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  // 数组合并
  function concat(array, ...other) { // concat 合并
    if (other) { // 如果不传，直接返回 array
      for(let i = 0 ; i < other.length ; i++) { // other[i] 就是传入的值集合的其中一个
        if (typeof(other[i]) == "number" || typeof(other[i]) == "string") { // 如果是数值或者字符串，直接 push
          array.push(other[i])
        } else {
          for (let j = 0 ; j < other[i].length ; j++) {  // 如果 other[i] 不是数值或字符串，则看作是数组
            array.push(other[i][j])
          }
        }
        
      }
    }
    return array
  }

  // 返回第一个数组内不包含第二个数组的内容
  function difference(array1, array2) {
    let result = []
    let is = true
    for (let i = 0 ; i < array1.length ; i++) {
      for (let j = 0 ; j < array2.length ; j++) {
        if (array1[i] == array2[j]) {
          is = false
        }
      }
      if (is) {
        result.push(array1[i])
      }
      is = true
    }
    return result
  }

  // 从 array 前面开始丢弃 n 个元素
  function drop(array, n = 1) { // drop 丢
    if (!array || n == 0) {
      return array
    }
    if (array.length <= n) {
      return []
    }
    let result = []
    for (let i = n ; i < array.length ; i++) {
      result[i - n] = array[i]
    }
    return result
  }

  // 从 start 到 end 填充 val 到 array（包括开始不包括结束）
  function fill(array, val, start = 0, end = array.length) {
    if (end > array.length) { // 结束位置太大
      end = array.length
    }
    if (!val) { // 填充值为空
      return array
    }
    for (let i = start ; i < end ; i++) {
      array[i] = val
    }
    return array
  }

  // 去除一层数组嵌套深度
  function flatten(array) {
    let result = []
    for (let i = 0 ; i < array.length ; i++) {
      if (typeof(array[i]) == "number") {
        result.push(array[i])
      } else {
        for(let j = 0 ; j < array[i].length ; j++) {
          result.push(array[i][j])
        }
      }
    }
    return result
  }

  // 去除数组所有嵌套深度
  function flattenDeep(array, result = []) {
    for(let i = 0 ; i < array.length ; i++) {
      if (typeof(array[i]) !== "number") {
        flattenDeep(array[i], result)
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  // 去除数组 depth 层嵌套深度
  function flattenDepth(array, depth = 1, result = []) {
    for (let i = 0 ; i < array.length ; i++) {
      if (typeof(array[i]) == "number") {
        result.push(array[i])
      } else {
        if (depth > 0) {
          flattenDepth(array[i], depth--, result)
        } else {
          result.push(array[i])
        }
        
      }
    }
    return result
  }

  // 数组中成对的两个值转为对象中的 key value
  function fromPairs(array, obj = {}) {
    for(let i = 0 ; i < array.length ; i++) {
      obj[array[i][0]] = array[i][1]
    }
    return obj
  }

  // 对象中的 key val 转为数组中的成对的值
  function toPairs(obj) {
    let array = []
    let result = []
    for(let item in obj) {
      array.push(item + '', obj[item])
      result.push(array)
      array = []
    }
    return result
  }

  // 返回数组的第一项
  function head(array) {
    return array ? array[0] : undefined
  }

  // 查找数组中值的下标
  function indexOf(array, val, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = array.length + fromIndex
    }
    for(let i = fromIndex ; i < array.length ; i++) {
      if (array[i] == val) {
        return i
      }
    }
    return -1
  }

  // 查找数组中值的下标（从右往左）
  function lastIndexOf(array, val, fromIndex = array.length - 1) {
    for (let i = fromIndex ; i > 0 ; i--) {
      if (array[i] == val) {
        return i
      }
    }
    return -1
  }

  // 返回去除最后一项之后的数组
  function initial(array) {
    let result = []
    if (!array) {
      return result
    }
    for(let i = 0 ; i < array.length - 1 ; i++) {
      result.push(array[i])
    }
    return result
  }

  // 将数组中的值用分隔符分开并连接成字符串并返回
  function join(array, separator = ',') {
    let result = ''
    for (let i = 0 ; i < array.length - 1 ; i++) {
      result = result + array[i] + separator
    }
    result = result + array[array.length - 1]
    return result
  }

  // 返回数组最后一项
  function last(array) {
    if (!array) {
      return undefined
    }
    return array[array.length - 1]
  }

  // 移除数组中满足条件的项
  function remove(array, func) {
    for(let i = array.length - 1 ; i >= 0 ; i--) {
      if (func(array[i])) {
        array.splice(i,1)
      }
    }
    return array
  }

  // 返回数组中不重复的项
  function pull(array, ...args) {
    remove(array, it => args.includes(it))
    return array
  }

  // 对数组进行反转
  function reverse(array) {
    let result = []
    for (let i = array.length - 1 ; i >=0 ; i--) {
      result.push(array[i])
    }
    return result
  }

  // 是否每个值都满足
  function every(array, func) {
    if (array == null) {
      return true
    }
    if (typeof(func) == 'function') { // 函数：Boolean
      for (var item of array) {
        if (!func(item)) {
          return false
        }
      }
      return true
    }
    if (typeof(func) == 'object') { // 数组/对象
      if (Array.isArray(func)) { // func 是数组
        for (var item of array) {
          if (item[func[0]] !== func[1]) {
            return false
          }
        }
        return true
      }
      for (var item of array) { // func 是对象
        for (var key in func) {
          if (item[key] !== func.key) {
            return false
          }
        }
      }
      return true
    }
    if (typeof(func) == 'string') { // 字符串
      for (var item of array) {
        if (!item[key]) {
          return false
        }
      }
      return true
    }
    throw new SyntaxError('unexpected type: ' + func)
  }

  // 是否有值满足
  function some(array,func) {
    if (typeof(func) == 'function') { // 函数
      for (var item of array) {
        if (func(item)) {
          return true
        }
      }
      return false
    }
    if (typeof(func) == 'string') { // 字符串
      for (var item of array) {
        if (item.func) {
          return true
        }
      }
      return false
    }
    if (Array.isArray(func)) { // 数组
      for (var item of array) {
        if (item[func[0]] == func[1]) {
          return true
        }
      }
      return false
    }
    if (typeof(func) == 'object') { // 对象
      let is = true
      for (var item of array) {
        for (var key in func) {
          if (item[key] !== func.key) {
            is = false
          }
        }
        if (is) {
          return true
        }
      }
      return false
    }
    throw new SyntaxError('unexpected type of : ' + func)
  }

  // 数组中的每一项带入函数的返回值作为 key ，value 是这个key 出现的次数
  function countBy(array, func) {
    let result = {}
    if (typeof(func) == 'function') {
      for (var i = 0; i < array.length; i++) {
        let key = func(array[i])
        if (result[key]) {
          result[key]++
        } else {
          result[key] = 1
        }
      }
    } else if (typeof(func) == 'string') {
      for (let i = 0; i < array.length; i++) {
        let key = array[i][func]
        if (result[key]) {
          result[key]++
        }  else {
          result[key] = 1
        }
      }
    }
    return result
  }

  // 数组中的每一项带入函数的返回值作为 key ，这一项作为值 push 进 value，value 是一个数组
  function groupBy(array, func) {
    let result = {}
    if (typeof(func) == 'function') {
      for (let i = 0; i < array.length; i++) {
        let key = func(array[i])
        if (result[key]) {
          result[key].push(array[i])
        } else {
          result[key] = [array[i]]
        }
      }
    } else if (typeof(func) == 'string') {
      for (let i = 0; i < array.length; i++) {
        let key = array[i][func]
        if (result[key]) {
          result[key].push(array[i])
        } else {
          result[key] = [array[i]]
        }
      }
    }
    return result
  }

  // 数组中的每一项带入函数的返回值作为 key ， 这一项作为 key 的value（相同的 key 的 value 会覆盖）
  function keyBy(array, func) {
    let result = {}
    if (typeof(func) == 'function') {
      for (let i = 0; i < array.length; i++) {
        let key = func(array[i])
        result[key] = array[i]
      }
    } else if (typeof(func) == 'string') {
      for (let i = 0; i < array.length; i++) {
        let key = array[i][func]
        result[key] = array[i]
      }
    }
    return result
  }

  // 遍历每一项
  function forEach(collection, func) {
    if (Array.isArray(collection)) {
      for (let item of collection) {
        func(item)
      }
    } else {
      for (let item in collection) {
        func(collection[item], item)
      }
    }
  }

  // map
  function map (collection, func) {
    let result = []
    if (typeof(func) == 'function') {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          result.push(func(collection[i]))
        }
        return result
      } else {  // collection 是对象
        for (let item in collection) {
          result.push(func(collection[item]))
        }
        return result
      }
    } else if (typeof(func) == 'string') {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          result.push(collection[i][func])
        }
        return result
      }
    }
  }

  // filter
  function filter (collection, func) {
    let result = []
    if (typeof(func) == 'function') {
      for (let item of collection) {
        if (func(item)) {
          result.push(item)
        }
      }
      return result
    } else if (typeof(func) == 'string') {
      for (let item of collection) {
        if (item[func]) {
          result.push(item)
        }
      }
      return result
    } else if (Array.isArray(func)) {
      for (let item of collection) {
        if (item[func[0]] == func[1]) {
          result.push(item)
        }
      }
      return result
    } else {
      let is = true
      for (let item of collection) {
        for (let it in func) {
          if(item[it] !== func[it]) {
            is = false
            break
          }
        }
        if (is) {
          result.push(item)
        }
        is = true
      }
      return result
    }
  }

  // reduce
  function reduce (obj, func, initial) {
    if (typeof(obj) !== 'object') {
      throw new Error('The first argument must be array or object')
    }

    if (Array.isArray(obj)) {  // 数组
      for (var it of obj) {
        initial = func(initial, it)
      }
    } else {  // 对象
      for (var it in obj) {
        initial = func(initial, obj[it], it)
      }
    }

    return initial
  }

  // reduceRight （从右往左传入 obj 的值）
  function reduceRight(obj, func, initial) {
    if (typeof(obj) !== 'object') {
      throw new Error('The first argument must be array or object')
    }

    if (Array.isArray(obj)) {  // 数组
      let length = obj.length
      for (var i = length - 1; i >= 0; i-- ) {
        initial = func(initial, obj[i])
      }
    } else {  // 对象
      for (var it in obj) {
        initial = func(initial, obj[it], it)
      }
    }

    return initial
  }

  // size
  function size (collection) {
    let count = 0
    for (var it in collection) {
      count++
    }
    return count
  }

  // sortBy
  function sortBy(array, foo) {
    // 交换位置
    function exchange(array,x,y) {
      let val = array[x]
      array[x] = array[y]
      array[y] = val
      return array
    }
    // 执行一遍冒泡排序
    let count1 = 0
    function sort1(array) {
      for (var i = 0; i < array.length - 1; i++) {
        if (item(array[i]) > item(array[i + 1])) {
          exchange(array,i,i+1)
          count1++
        }
      }
    }
    let count2 = 0
    function sort2(array) {
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i][item] > array[i + 1][item]) {
          exchange(array,i,i+1)
          count2++
        }
      }
    }

    for (var item of foo) {
      if (typeof(item) == 'function') {
        sort1(array)
        while (count1 !== 0) {
          count1 = 0
          sort1(array)
        }
      } else {
        sort2(array)
        while (count2 !== 0) {
          count2 = 0
          sort2(array)
        }
      }
    }
    return array
  }

  // 抽取样本
  function sample(collection) {
    let randomIdx = 0
    if (Array.isArray(collection)) {
      randomIdx = Math.trunc( Math.random() * collection.length )
      return collection[randomIdx]
    } else {
      randomIdx = Math.trunc( Math.random() * collection.keys().length )
      return collection[randomIdx]
    }
  }

  function isUndefined(collection) {
    if (collection == undefined) {
      return true
    } else {
      return false
    }
  }

  function isNull(collection) {
    if (collection == null) {
      return true
    }  else {
      return false
    }
  }

  // 是否是 null / undefined
  function isNil(collection) {
    if (collection == null || collection == undefined) {
      return true
    } else {
      return false
    }
  }

  function max(array) {
    if (array.length == 0) {
      return undefined
    }
    let maxVal = -Infinity
    for (let i = 0; i < array.length; i++) {
      if (maxVal < array[i]) {
        maxVal = array[i]
      }
    }
    return maxVal
  }

  function min(array) {
    if (array.length == 0) {
      return undefined
    }
    let minVal = Infinity
    for (let i = 0; i < array.length; i++) {
      if (minVal > array[i]) {
        minVal = array[i]
      }
    }
    return minVal
  }

  function maxBy(array, func) {
    if (array.length == 0) {
      return undefined
    }
    let max = -Infinity
    let idx

    if (typeof(func) == 'function') {
      for (let i = 0; i < array.length; i++) {
        if (max < func(array[i])) {
          max = func(array[i])
          idx = i
        }
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (max < array[i][func]) {
          max = array[i][func]
          idx = i
        }
      }
    }
    
    return array[idx]
  }

  function minBy(array, func) {
    let min = Infinity
    let result
    if (typeof(func) == 'function') {
      for (let item of array) {
        if (min > func(item)) {
          min = func(item)
          result = item
        }
      }
    } else {
      for (let item of array) {
        if (min > item[func]) {
          min = item[func]
          result = item
        }
      }
    }
    return result
  }

  // 返回精确到某一位的四舍五入结果
  function round(num, precision=0) {
    let [pro, next] = num.toString().split('.')
    if (precision > 0) {
      // 小数点后
      let count
      if (next) {
        count = next.length
      } else {
        count = 0
      }

      if (count == 0) {
        return num
      }
      if (count > precision) {
        if (next[precision] >= 5) {
          next = next.split('')
          next[precision - 1] = '1'
          return Number(pro + '.' + arrayToString(next).slice(0,precision))
        }
        next = next.slice(0,precision)
        return Number(pro + '.' + next)
      } else {
        return num
      }
    } else if (precision < 0) {
      // 小数点前
      precision = -1 * precision
      if (pro.length > precision) {
        if (pro[pro.length - precision] >= 5) {
          pro = pro.slice(0, pro.length - precision)
          return Number(pro + repet0(precision)) + 10 ** precision
        }
        pro = pro.slice(0, pro.length - precision)
        return Number(pro + repet0(precision))
      }
    } else {
      return Number(pro)
    }

    // 判断一个数字小数点后的位数
    function count(num) {
      num = num.toString()
      let [pro, next] = num.split('.')
      if (next) {
        return next.length
      } else {
        return 0
      }
    }
    // 重复 num 次 '0'
    function repet0(num) {
      let result = ''
      for (let i = 0; i < num; i++) {
        result = result + '0'
      }
      return result
    }
    // 将一个装满字符串的数组按照顺序重新拼接起来
    function arrayToString(array) {
      let result = ''
      for (let i = 0; i < array.length; i++) {
        result = result + array[i]
      }
      return result
    }
  }

  function sumBy(array, iteratee) {
    if (array.length == 0) {
      return 0
    }
    let result = 0
    if (!iteratee) {
      for(let i = 0; i < array.length; i++) {
        result += array[i]
      }
      return result
    }

    if (typeof(iteratee) == 'function') {
      for(let i = 0; i < array.length; i++) {
        result += iteratee(array[i])
      }
      return result
    } else {
      for (let i = 0; i < array.length; i++) {
        result += array[i][iteratee]
      }
      return result
    }
  }

  function flatMap(collection, iteratee) {
    if (collection.length == 0) {
      return []
    }

    let result = []

    if (typeof(iteratee) == 'function') {
      for (let i = 0; i < collection.length; i++) {
        let it = iteratee(collection[i])
        if (Array.isArray(it)) {
          for(let j = 0; j < it.length; j++) {
            result.push(it[j])
          }
        } else {
          result.push(it)
        }
      }
      return result
    } else {}
  }

  // 没写出来
  function flatMapDepth(collection, iteratee, depth=1) {
    if (collection.length == 0) {
      return []
    }

    let result = []

    for(let i = 0; i < collection.length; i++) {
      let it = iteratee(collection[i])
      if (Array.isArray(it)) {
        if (depth == 0) {
          // result.push(it)
          // return result
          return it
        } else {
          depth = depth - 1
          result.push( flatMapDepth(it, (it) => {return it}, depth) )
        }
      } else {
        result.push(it)
      }
    }

    return result
  }

  function get(obj, path, defaultVaule) {
    if (Array.isArray(path)) {
      return getArray(obj, path, defaultVaule)
    } else {
      let result = path.split('')
      for(let i = 0; i < result.length; i++) {
        if (result[i] == '[' || result[i] == ']' || result[i] == '.') {
          result[i] = null
        }
      }
      return getArray(obj, result, defaultVaule)
    }

    function getArray(obj, path, defaultVaule) {
      for(let i = 0; i < path.length; i++) {
        if (path[i]) {
          if (!obj) {
            return defaultVaule
          }
          obj = obj[path[i]]
        }
      }
      return obj
    }

  }

  function has(obj, path) {
    if (Array.isArray(path)) {
      return hasArray(obj, path)
    } else {
      let result
      result = path.split('')
      for (let i = 0; i < result.length; i++) {
        if (result[i] == '[' || result[i] == ']' || result[i] == '.') {
          result[i] = null
        }
      }
      return hasArray(obj, result)
    }

    function hasArray(obj, path) {
      if (path.length == 0) {
        return false
      }
      for (let i = 0; i < path.length; i++) {
        if (path[i]) {
          if (!obj) {
            return false
          }
          obj = obj[path[i]]
        }
      }
      if (obj) {
        return true
      } else {
        return false
      }
    }
  }

  function mapKeys(obj, iteratee) {
    let result = {}
    for (let key in obj) {
      let value = obj[key]
      result[iteratee(value, key, obj)] = value
    }
    return result
  }

  function mapValues(obj, iteratee) {
    let result = {}
    if(typeof(iteratee) == 'function') {
      for(let key in obj) {
        result[key] = iteratee(obj[key])
      }
      return result
    } else {
      for(let key in obj) {
        result[key] = obj[key][iteratee]
      }
      return result
    }
  }

  function range(start=0, end, step=1) {
    let result = []
    if (arguments.length == 1) {
      if (start > 0) {
        for(let i = 0; i < start; i++) {
          result.push(i)
        }
        return result
      } else if (start < 0) {
        for(let j = 0; j > start; j--) {
          result.push(j)
        }
        return result
      } else {
        return []
      }
    }

    if (arguments.length == 2) {
     if (start < end) {
      for(let k = start; k < end; k++) {
        result.push(k)
      }
      return result
     } else if (start > end) {
      for(let l = end; l > start; l--) {
        result.push(l)
      }
      return result
     } else {
      return result
     }
    }

    if (arguments.length == 3) {
      if (start < end) {
        if (step < 0) {
          return result
        }
        if (step == 0) {
          for(let o = start; o < end; o++) {
            result.push(start)
          }
          return result
        }
        for(let m = start; m < end; m = m + step) {
          result.push(m)
        }
        return result
      }

      if (start > end) {
        if (step > 0 || step == 0) {
          return result
        }
        for(let n = start; n > end; n = n + step) {
          result.push(n)
        }
        return result
      }
    }
  }

  function stringifyJSON() {
    
  }

  function concat(...arrays) {
    let result = []
    for(let array of arrays) {
      if (Array.isArray(array)) {
        for(let i = 0; i < array.length; i++) {
          result.push(array[i])
        }
      } else {
        result.push(array)
      }
    }
    return result
  }

  function isEqual(value, other) {
    let result = true
    for(let item in value) {
      if (value[item] !== other[item]) {
        result = false
      }
    }
    return result
  }

  function repeat(str='', time=1) {
    if (time == 0) {
      return ''
    }
    let result = ''
    for(let i = 0; i < time; i++) {
      result = result + str
    }
    return result
  }

  function padStart(str='', length=0, chars=' ') {
    if (str.length >= length) {
      return str
    }
    for(let i = str.length; i < length; i++) {
      chars = chars + chars
      if (chars.length >= length - str.length) {
        chars = chars.slice(0,length-str.length)
        break
      }
    }
    return chars + str
  }

  function padEnd(str='', length=0, chars=' ') {
    if (str.length >= length) {
      return str
    }
    for(let i = str.length; i < length; i++) {
      chars = chars + chars
      if (chars.length >= length - str.length) {
        chars = chars.slice(0, length - str.length)
        break
      }
    }
    return str + chars
  }

  function pad(str='', length=0, chars=' ') {
    if (str.length >= length) {
      return str
    }
    let need = length - str.length
    let left,right,leftStr,rightStr
    if (need % 2 == 0) {
      left = need / 2
      right = need / 2
    } else {
      left = (need - 1) / 2
      right = (need + 1) / 2
    }
    for (let i = str.length; i < length; i++) {
      chars = chars + chars
      if (chars.length >= right) {
        rightStr = chars.slice(0, right)
        leftStr = chars.slice(0, left)
        break
      }
    }
    return leftStr + str + rightStr
  }

  function keys(obj) {
    let result = []
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        result.push(key)
      }
    }
    return result
  }

  function values(obj) {
    let result = []
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        result.push(obj[key])
      }
    }
    return result
  }

  function random(lower=0, upper=1, floating=false) {
    if (arguments.length == 1) {
      if (lower > 0) {
        if (lower % 1 == 0) {  // 整数
          // 返回 0 - lower 之间的随机整数
          return Math.floor(Math.random() * lower)
        } else {  // 浮点数
          // 返回 0 - lower 之间的随机浮点数
          return Math.random() * lower
        }
      } else if (lower < 0) {
        if (lower % 1 == 0) {  // 整数
          // 返回 lower - 0 之间的随机整数
          return Math.floor(Math.random() * lower)
        } else {  // 浮点数
          // 返回 lower - 0 之间的随机浮点数
          return Math.random() * lower
        }
      } else {
        return 0
      }
    }

    if (arguments.length == 2) {
      if (typeof(upper) == 'number') {
        // 返回 lower - upper 之间的随机数
        if (lower > upper) {
          // 更换位置
          let a = lower
          upper = lower
          lower = a
        }
        if (lower > 0 || upper < 0) {
          // 两个都大于零
          let ratio = upper / lower
          let randomNumber = ratio - Math.random()
          if (lower % 1 == 0) {
            return Math.floor(randomNumber * lower)
          } else {
            return randomNumber * lower
          }
        } else {
          // 一正一负
          return 0  // 简单点
        }
      } else if (typeof(upper) == 'boolean') {
        if (!upper) {  // 整数
          // 返回 0 - lower 之间的随机整数
          return Math.floor(Math.random() * lower)
        } else {  // 浮点数
          // 返回 0 - lower 之间的随机浮点数
          return Math.random() * lower
        }
      }
    }
  }

  function ceil(number, percision=0) {
    let [pro, next] = number.toString().split('.')
    if (percision == 0) {
      if (!next) {
        return number
      } else {
        return Number(pro) + 1
      }
    }

    if (percision > 0) {
      if (!next) {
        return number
      }
      if (next.length <= percision) {
        return number
      }
      next = next.slice(0, percision)
      next = strAddOne(next)
      return Number(pro + '.' + next)
    }

    if (percision < 0) {
      percision = -1 * percision
      if (percision >= pro.length) {
        return 10 ** 6
      }

      pro = pro.slice(0, pro.length - percision)
      return strAddOne(pro) * (10 ** percision)
    }


    function strAddOne(str) {
      // 给字符串化的数字最后一位加一
      let result = str.split('')
      result[str.length - 1] = Number(result[str.length - 1]) + 1
      let str2 = ''
      for (let i = 0; i < result.length; i++) {
        str2 += result[i]
      }
      return str2
    }
  }

  function floor(number, percision=0) {
    let [pro, next] = number.toString().split('.')

    if (percision == 0) {
      return Number(pro)
    }

    if (percision > 0) {
      if (!next || next.length <= percision) {
        return number
      }

      next = next.slice(0, percision)
      return Number(pro + '.' + next)
    }

    if (percision < 0) {
      percision = -1 * percision
      if (pro.length <= percision) {
        return 0
      }

      pro = pro.slice(0, pro.length - percision)
      return pro * (10 ** percision)
    }
  }

  function cloneDeep(value) {
    if (Array.isArray(value)) {
      let result = []
      for (let item of value) {
        if (typeof(item) == 'object') {
          result.push(cloneDeep(item))
        } else {
          result.push(item)
        }
      }
      return result
    } else {
      let result = {}
      for(let item in value) {
        if(typeof(value[item]) == 'object') {
          result[item] = cloneDeep(value[item])
        } else {
          result[item] = value[item]
        }
      }
      return result
    }
  }

  function trim(str='', chars=' ') {
    if (str.length == 0) {
      return str
    }
    str = str.split('')
    chars = chars.split('')

    for(let i = 0; i < str.length; i++) {
      while(chars.includes(str[i])) {
        str[i] = null
        i++
      }
      break
    }

    for(let j = str.length - 1; j > 0; j--) {
      while(chars.includes(str[j])) {
        str[j] = null
        j--
      }
      break
    }

    let result = ''
    for (let item of str) {
      if (item) {
        result += item
      }
    }

    return result
  }

  function trimStart(str='', chars=' ') {
    if (str.length == 0) {
      return str
    }

    str = str.split('')
    chars = chars.split('')

    for(let i = 0; i < str.length; i++) {
      while(chars.includes(str[i])) {
        str[i] = null
        i++
      }
      break
    }

    let result = ''
    for(let item of str) {
      if (item) {
        result += item
      }
    }

    return result
  }

  function trimEnd(str='', chars=' ') {
    if (str.length == 0) {
      return str
    }

    str = str.split('')
    chars = chars.split('')

    for(let i = str.length - 1; i > 0; i--) {
      while(chars.includes(str[i])) {
        str[i] = null
        i--
      }
      break
    }

    let result = ''
    for(let item of str) {
      if (item) {
        result += item
      }
    }

    return result
  }

  function assign(obj, ...argu) {
    for(let item of argu) {
      for(let key in item) {
        if (item.hasOwnProperty(key)) {
          obj[key] = item[key]
        }
      }
    }
    return obj
  }

  function merge(obj, ...argu) {
    for(let item of  argu) {
      for(let key in item) {
        if (item.hasOwnProperty(key)) {
          if (typeof(item[key]) == 'object') {
            if (obj[key]) {
              merge(obj[key],item[key])
            } else {
              merge(obj, item[key])
            }
          } else {
            obj[key] = item[key]
          }
        }
      }
    }
    return obj
  }



  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    drop: drop,
    fill: fill,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    toPairs: toPairs,
    head: head,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    initial: initial,
    join: join,
    last: last,
    pull: pull,
    remove: remove,
    reverse: reverse,
    every: every,
    some: some,
    countBy: countBy,
    groupBy: groupBy,
    keyBy: keyBy,
    forEach: forEach,
    map: map,
    filter: filter,
    reduce: reduce,
    reduceRight: reduceRight,
    size: size,
    sortBy: sortBy,
    sample:sample,
    isUndefined:isUndefined,
    isNull:isNull,
    isNil:isNil,
    max:max,
    min:min,
    maxBy:maxBy,
    minBy:minBy,
    round:round,
    sumBy:sumBy,
    flatMap:flatMap,
    flatMapDepth:flatMapDepth,
    get:get,
    has:has,
    mapKeys:mapKeys,
    mapValues:mapValues,
    range:range,
    stringifyJSON:stringifyJSON,
    concat:concat,
    isEqual:isEqual,
    repeat:repeat,
    padStart:padStart,
    padEnd:padEnd,
    pad:pad,
    keys:keys,
    values:values,
    random:random,
    ceil:ceil,
    floor:floor,
    cloneDeep:cloneDeep,
    trim:trim,
    trimStart:trimStart,
    trimEnd:trimEnd,
    assign:assign,
    merge:merge,
  }
}()
