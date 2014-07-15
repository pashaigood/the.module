the.module
=========

Создание нового модуля на основе the.js<br>
Create a new module based on the.js 
```javascript
the.module({
    TestClass: {
        prop1: 1,
        prop2: 'hello world'
        /**
        @constructor
        **/
        TestClass: function() {
        },
        method1: function() {
        }
    }
});
```
Создание классов из описания:<br>
Creating classes from the description: 
```javascript
the.module({
    TestClass: {
        /**
        @constructor
        **/
        TestClass: function() {
        }
    },
    TestClass2: {
        /**
        @constructor
        **/
        constructor: function() {
        }
    }
});
```
Наследование:<br>
Inheritance:
```javascript
the.module({
    TestClass: { extend: [TestClass2, TestClass3]
        /**
        @constructor
        **/
        TestClass: function() {
            //Вызов слех конструкторов родителей
            this.Super();
        }
    }
});
```
Описание свойств и методов.<br>
Description of properties and methods.
```javascript
the.module({
    TestClass: {
        //Статичние свойства и методы
        our: {
            NUMB: 1,
            hello: functino() {
            }
        },
        
        prop1: 1,
        prop2: 'hello world'
        /**
        @constructor
        **/
        TestClass: function() {
            this.our.hello();
        },
        method1: function() {
        }
    }
});
```

