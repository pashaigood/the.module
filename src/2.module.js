/**
 * Created by pavel on 15.07.2014.
 */

the.module = function(module) {
    for (var i in module) {
        the.class_factory(module, i);
    }

    return module;
}
