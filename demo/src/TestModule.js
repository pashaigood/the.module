var module = the.module({
    Test: {
        our: {
            NUMBER: 1,
            STRING: 'hello world'
        },

        name: '',
        id: 0,

        Test: function() {
            console.log('new Test');
            console.log('');
        },

        popa: function() {
            console.log('popa');
        }
    },

    Test2: {
        constructor: function() {
            console.log('new Test2');
            console.log('');
        }
    }
});

var module2 = the.module({
    ExtendTest: { extend: [module.Test],
        our: {
            NUMBER: 2
        },
        ExtendTest: function() {
            console.log('ExtendTest')
            console.log('STRING IS', this.our.STRING);
            console.log('NUMBER IS', this.our.NUMBER);
            console.log('');
        }
    }
});

var test = new module.Test(),
    test2 = new module.Test2(),
    extendTest = new module2.ExtendTest();