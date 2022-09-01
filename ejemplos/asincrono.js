'use strict';

/* console.log('empiezo')

function escribeTras2Segundos(texto,callback) {
    setTimeout(function() {
        console.log(texto);
        callback()
    }, 3000)
}

escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2', function() {
        console.log('termino')
    })
});
 */
console.log('empiezo')

function escribeTras2Segundos(texto,callback) {
    setTimeout(function() {
        console.log(texto);
        callback()
    }, 2000)
}
function serie(n, fn, callbackTerminacion) {
    if (n == 0) {
        callbackTerminacion();
        return;
    }
    n = n - 1;
    fn('texto' + n, function(){
        serie(n, fn, callbackTerminacion);
    })

 }

serie(6, escribeTras2Segundos, function() {
    console.log('Termino')
})
