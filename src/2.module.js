/**
 * Created by pavel on 15.07.2014.
 */

the.module = function (module) {
    var cnt = 0;
    for (var i in module) {
        the.class_factory(module, i);
        cnt += 1;
    }

    if (cnt == 1) {
        return module[i];
    }
    return module;
};
