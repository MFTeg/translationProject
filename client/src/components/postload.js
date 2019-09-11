window.addEventListener('load', function () {
    if (e.keyCode == 13) {
        var tb = document.onload("scriptBox");
        eval(tb.value);
        return false;
    }
    }, false);