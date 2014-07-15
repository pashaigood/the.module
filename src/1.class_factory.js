the.class_factory = function(namespace_src, class_name) {
    var class_constructor = namespace_src[class_name][class_name] || namespace_src[class_name].constructor,
        class_data = namespace_src[class_name],
        class_extend = class_data.extend,
        static_property = class_data.our,
        prop,
        length;

    if (static_property) {
        for (prop in static_property) {
            class_constructor[prop] = static_property[prop];
        }
    }
    
    delete class_data.our;
    delete class_data.extend;
    delete class_data[class_name];

    class_constructor.prototype = class_data;
    class_constructor.prototype.constructor 
        = class_constructor.prototype.our
        = class_constructor;
        
    if (class_extend) {
        length = class_extend.length;
        while (length--) {
            the.extend(class_constructor, class_extend[length]);
        }
    }
    
    namespace_src[class_name] = class_constructor;
};
