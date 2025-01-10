// 向量
  // 构造函数
  function Vector(x,y) {
    // 两点确定一条向量 a(3,2) b(7,5)
    // a 指向 b ，向量的坐标就是 b 的坐标减去 a 的坐标 (4,3)
    this.x = x
    this.y = y
  }
  // 构造函数的原型属性
  Vector.prototype.plus = function(m) {
    // a 指向 b 的方向
    return new Vector(this.x + m.x, this.y + m.y)
  }
  Vector.prototype.minus = function(m) {
    return new Vector(this.x - m.x, this.y - m.y)
  }
  Vector.prototype.long = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  // 应用
  var v1 = new Vector(1,2)
  var v2 = new Vector(3,-4)

  var v3 = v1.plus(v2)
  var v4 = v2.minus(v1)

  var l = v4.long()







// 复数 (2 + 3i)
  // 构造函数
  function Complex(real, imag) {
    // real 是实部，imag 是虚部
    // i ^ 2 = -1
    this.a = real
    this.b = imag
  }
  // 构造函数的原型属性
  Complex.prototype.plus = function(z) {
    return new Complex(this.a + z.a, this.b + z.b)
  }
  Complex.prototype.minus = function(z) {
    return new Complex(this.a - z.a, this.b - z.b)
  }
  Complex.prototype.multiple = function(z) {
    return new Complex(this.a * z.a - this.b * z.b, this.a * z.b + this.b * z.a)
  }
  Complex.prototype.div2 = function(z) {
    var ac = this.a * z.a
    var bd = this.b * z.b
    var cc = z.a * z.a
    var dd = z.b * z.b
    var bc = this.b * z.a
    var ad = this.a * z.b
    return new Complex(  (ac + bd)/(cc + dd) , (bc - ad)/(cc + dd)  )
  }
  Complex.prototype.div = function(z) {  // damiao 更简单
    var helper = new Complex(z.a, -z.b)
    var fenmu = z.multiple(helper).a
    var fenzi = this.multiple(helper)

    var a = fenzi.a / fenmu
    var b = fenzi.b / fenmu
    return new Complex(a,b)
  }
  Complex.prototype.toString2 = function() {
    return (this.a + '') + "+" + (this.b + '') + "i"
  }
  Complex.prototype.toString = function() {  // damiao 减号的情况
    return (this.a + '') + (this.b > 0 ? "+" : '') + (this.b + '') + "i"
  }
  // 应用
  var c1 = new Complex(4,5)
  var c2 = new Complex(1,-2)
  // 加减乘除
  var c3 = c1.plus(c2)
  var c4 = c1.minus(c2)
  var c5 = c1.multiple(c2)
  var c6 = c1.div(c2)
  console.log(c6.toString())  // 返回 2 + 3i 这种样式






  // 表示一个单向链表
function LinkedList(val) {
  this._head = null
  this._length = 0
}
// 返回链表第 idx 个结点的值
LinkedList.prototype.at = function(idx) {
  var p = this._head
  while(idx > 0 && p) {  // 加上一个" p 存在"的条件
    p = p.next
    idx--
  }
  if (p) {  // 如果 idx 很大，p 就是 null 了，所以直接返回 p.val 会报错
    return p.val
  } else {
    return undefined  // 如果 p 为空，最好是明确地返回 undefined
  }
}
// 设置链表第 idx 项的值为 val
LinkedList.prototype.set = function(idx, val) {
  var p = this._head
  while (idx > 0 && p) {
    p = p.next
    idx--
  }
  if (p) {
    p.val = val
  } else {
    return undefined
  }
}
// 在链表末尾新增一个结点，值为val
LinkedList.prototype.append = function(val) {
  var node = {
    val : val,
    next : null,
  }
  this._length++
  if (this._head == null) {
    this._head = node
    return this
  }
  var p = this._head  // 这只能处理链表非空的情况
  while(p.next) {
    p = p.next
  }
  p.next = node
  return this
}
// 返回链表末尾结点的值，并删除末尾结点
LinkedList.prototype.pop = function() {
  if (this._head == null) {  // 链表为空
    return undefined
  }
  this._length--
  if (this._head.next == null) {  // 链表只有一个结点时
    var result = this._head.val
    this._head = null
    return result
  }
  // 下面是链表有两个及以上的结点的情况
  var p = this._head
  while (p.next.next) {
    p = p.next
  }
  var result = p.next.val
  p.next = null
  return result
}
// 在链表开头新增一个结点，值为val
LinkedList.prototype.prepend = function(val) {
  var node = {
    val: val,
    next: this._head,
  }
  this._length++
  this._head = node
  return this  // 没有要求返回值时，一般返回一下 this ，方便链式调用
}
// 返回链表第一个结点的值，并删除第一个结点
LinkedList.prototype.shift = function() {
  if (this._head == null) {
    return undefined
  }
  this._length--
  var result = this._head.val
  this._head = this._head.next
  return result
}
// 将链表转换为数组并输出
LinkedList.prototype.toArray = function() {
  var result = []
  var p = this._head
  while(p) {
    result.push(p.val)
    p = p.next
  }
  return result
}
// 写一个 "toString" 方法
LinkedList.prototype.toString = function () {
  return this.toArray().join("->")
}
// 因为不想从外面读取链表长度，所以想要一个可以读取链表长度的属性
Object.defineProperty(LinkedList.prototype, "size", {
  get: function () {
    return this._length
  }
})





// 集合
function MySet(initalValues = []) {
  this._elements = []
  for (var val of initalValues) {
    if (!this._elements.includes(val)) {  // 去重
      this._elements.push(val)
    }
  }
}
// 向集合中添加元素
MySet.prototype.add = function(val) {
  if (!this._elements.includes(val)) {
    this._elements.push(val)
  }
  return this
}
// 从集合中删除元素
MySet.prototype.delete = function(val) {
  var idx = this._elements.indexOf(val)
  if (idx >= 0) {
    this._elements.splice(idx,1)  // 给 splice 传入 -1 的话，就会删除倒数第一项
  }
  return this
}
// 获取集合中的元素用 c.size , 它是一个 getter
MySet.prototype.size = function (val) {
  Object.defineProperty(MySet.prototype, "size", {
    get : function () {
      return this._elements.length
    }
  })
}
// 清空集合中的所有元素
MySet.prototype.clear = function() {
  this._elements = []
  return this
}
// 判断集合中存在某元素
MySet.prototype.has = function(val) {
  return this._elements.includes(val)
}
// 遍历集合中的元素（顺序无所谓）
MySet.prototype.forEach = function(func) {
  for (var val of this._elements) {
      func(this[item])
  }
}





// 表示一个映射
// 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
function MyMap() {
  this._pairs = []
}
MyMap.prototype = {
  // 设置映射中的key所对应的值val
  set: function(key,val) {
    for (var i = 0 ; i < this._pairs.length ; i += 2) {
      if (this._pairs[i] === key) {
        this._pairs[i + 1] = val
        return this
      }
    }
    this._pairs.push(key,val)
    return this
  },
  // 获取这个映射中key所对应的val
  get: function(key) {
    for (var i = 0 ; i < this._pairs.length ; i += 2) {
      if (this._pairs[i] === key) {
        return this._pairs[i + 1]
      }
    }
    return undefined
  },
  // 判断这个映射中是否存在这个key的映射
  has: function(key) {
    for (var i = 0 ; i < this._pairs.length ; i += 2) {
      if (this._pairs[i] === key) {
        return true
      }
    }
    return false
  },
  // 清空这个映射中所有的映射对
  clear: function() {
    this._pairs = []
    return this
  },
  //删除这个映射中key及其映射的值的这一对,返回是否成功删除
  delete: function(key) {
    for (var i = 0 ; i < this._pairs.length ; i += 2) {
      if (this._pairs[i] === key) {
        this._pairs.splice(i, 2)
        return true
      }
    }
    return false
  },
  // 获取这个映射中映射对的数量
  get size() {
    return this._pairs.length / 2
  },
  // 遍历这个映射中所有的映射对
  forEach (interator){
    for (var i = 0 ; i < this._pairs.length ; i += 2) {
      interator(this._pairs[i + 1], this._pairs[i])
    }
  },
}






// 表示一个栈，即后进先出，先进后出
function Stack() {
  this._elements = []  // 加上 "_" 表示不希望被外面修改
}
// 向栈中增加元素
Stack.prototype.push = function(val) {
  this._elements.push(val)
}
// 从栈中取出元素并删除栈顶元素
Stack.prototype.pop = function() {
  return this._elements.pop()
}
// 查看但不删除栈顶元素
Stack.prototype.peek = function() {
  return this._elements[this._elements.length - 1]
}
// stack.size 获取栈中元素的数量
  Object.defineProperty(Stack.prototype,"size",{
    get: function(){
      return this._elements.length
    }
  })





  // 表示一个队列，先进先出，后进后出
function Queue() {
  this._head = null
  this._tail = null  // tail 是尾巴
  this._length = 0
}
// 向队列中增加元素
Queue.prototype.add = function(val) {
  var node = {
    val: val,
    next: null,
  }
  this._length++
  if (this._head == null) {
    this._head = this._tail = node
    return this
  }
  this._tail.next = node
  this._tail = node
  return this
}
// 从队头取出元素并删除对头元素
Queue.prototype.pop = function() {
  if (this._head == null) {  // 没有结点
    return undefined
  }
  this._length--
  if (this._head == this._tail) {  // 只有一个结点
    var result = this._head.val
    this._head = this._tail = null
    return result
  }
  var result = this._head.val  // 有两个及以上的结点
  this._head = this._head.next
  return result
}
// 查看但不删除对头元素（没有查看队尾元素的功能）
Queue.prototype.peek = function() {
  return this._head.val
}
// Queue.size 获取队列元素的长度
Object.defineProperty(Queue.prototype, "size", {
  get : function() {
    return this._length
  }
})

