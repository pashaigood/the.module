the.extend = function(Child, Parent, as_object/*, no_super*/) {
    
    if (
        ! as_object
            &&
        typeof(Child) == typeof(Parent) 
            &&
        typeof(Parent) == 'function'
    ) {
        var proto = Child.prototype, 
            prop,
            F = function() {};
            
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        for (prop in proto) {
            if (prop == 'Super') {
                continue;
            }
            Child.prototype[prop] = proto[prop];
        }
        Child.prototype.constructor = Child;

        for (prop in Parent) {
            if (! Child.hasOwnProperty(prop)) {
                Child[prop] = Parent[prop];
            }
        }

        Child._supers = Child._supers || [];
        Child._supers.push(Parent);
        Child.prototype.Super = function() {
            for (var parent in Child._supers) {
                if (! Child._supers.hasOwnProperty(parent)) continue;
                this.Super = Child._supers[parent].prototype.Super; 
                Child._supers[parent].apply(this, arguments);
            }
            
            this.Super = function(){};
        }

    } else {
          for (var i in Parent) {
            if (Parent[i] && typeof Parent[i] == "object") {
              Child[i] = {};
              the.extend(Child[i], Parent[i], true);
            } else Child[i] = Parent[i]
          }
    }
};


