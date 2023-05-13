const textArea = document.querySelector(".text-area"); /*variable const captura lo que el usuario escribe en el textarea. Dom es el queryselector, el arbol de objetos*/
const mensaje = document.querySelector(".mensaje");
/*POSIBLE SOLUCION PARA CREAR UN ENCRIPTADOR: 
almacenamos todas las llaves de encriptacion 
con las que estamos trabajando dentro de una matriz
estaremos trabajando con arreglos multidimentsionales o arreglos de arreglos*/
// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){  /*funcion del boton que hace que el boton encriptar funcione*/ 
    const textoEncriptado = encriptar(textArea.value);/*EVENTO constante textoEncriptado recibe la funcion encriptar, y le pasamos el valor de textArea*/
    mensaje.value = textoEncriptado/*EVENTO me muestra texto encriptado. creamos el evento en html tambien*/
    textArea.value=""; /*limpiar campo donde usuario ingresó texto*/
    mensaje.style.backgroundImage = "none";/*oculta imagen cuando aparece texto encriptado*/
}

function encriptar(stringEncriptada){   /*stringEncriptado es un parametro que recibe nuestra funcion encriptar para recibir y devolver la informacion encriptada*/
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "over"], ["u", "ufat"]];  /*Variable*/
    stringEncriptada = stringEncriptada.toLowerCase() /*llamamos parametro stringEncriptado que se recibe a el mismo. llamamos metodo toLowerCase() para hacer conversiona minusculas ya que el encriptador es con minusculas*/ 
    /*para realizar lo que es el recorrido de esta matriz*/

    for(let i = 0; i < matrizCodigo.length;  i++){ /*BUCLE FOR: haga recorrido por cada una de nuestras vocales. 1 parametro let i = 0 inicia desde cero; 2 parametro i < matrizCodigo.length el tamaño de nuestra matriz para hacer su recorrido 3 parametro i++ para que finalmente haga todo el recorrido por toda nuestra matriz*/ 
           if(stringEncriptada.includes(matrizCodigo[i][0])){  /*para realizar verificacion del array y letras que se estan ingresando. 1 pasamos condicion stringEncriptado.2 verficacion de que las letras que estan siendo encriptadas estan dentro de este array. 3 le paso un parametro que es la llave que sera verificada matrizCodigo, indice [i] y posicion [0]*/
              stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); /*1 realizamos sustitucion de letras con metodo replaceAll y le paso la llave que se va a sustituir con el valor que se sustituira, 2  pasamos indice y posicion [i][0] 3 valor por el que sera sustituido */
           }    
    }
    return stringEncriptada;
}

function btnDesencriptar(){  /*funcion del boton que hace que el boton encriptar funcione*/ 
    const textoEncriptado = desencriptar(textArea.value);/*EVENTO constante textoEncriptado recibe la funcion encriptar, y le pasamos el valor de textArea*/
    mensaje.value = textoEncriptado/*EVENTO me muestra texto encriptado. creamos el evento en html tambien*/
    textArea.value=""; /*limpiar campo donde usuario ingresó texto*/
}

function desencriptar(stringDesencriptada){   /*stringDesencriptado es un parametro que recibe nuestra funcion desencriptar para recibir y devolver la informacion encriptada*/
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "over"], ["u", "ufat"]];  /*Variable*/
    stringDesencriptada = stringDesencriptada.toLowerCase() /*llamamos parametro stringEncriptado que se recibe a el mismo. llamamos metodo toLowerCase() para hacer conversiona minusculas ya que el encriptador es con minusculas*/ 
    /*para realizar lo que es el recorrido de esta matriz*/

    for(let i = 0; i < matrizCodigo.length;  i++){ /*BUCLE FOR: haga recorrido por cada una de nuestras vocales. 1 parametro let i = 0 inicia desde cero; 2 parametro i < matrizCodigo.length el tamaño de nuestra matriz para hacer su recorrido 3 parametro i++ para que finalmente haga todo el recorrido por toda nuestra matriz*/ 
           if(stringDesencriptada.includes(matrizCodigo[i][1])){  /*para realizar verificacion del array y letras que se estan ingresando. 1 pasamos condicion stringEncriptado.2 verficacion de que las letras que estan siendo desencriptadas estan dentro de este array. 3 le paso un parametro que es la llave que sera verificada matrizCodigo, indice [i] y posicion [1]*/
           stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); /*1 realizamos sustitucion de letras con metodo replaceAll y le paso la llave que se va a sustituir con el valor que se sustituira, 2  pasamos indice y posicion [i][0] 3 valor por el que sera sustituido */
           }    
    }
    return stringDesencriptada;
}

function copiar(){
    var copiarTexto = document.querySelector(".mensaje"); /*Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.*/
    copiarTexto.select();                                 /*es la forma más normal y eficiente de transformación de mensajes.*/
    document.execCommand("copy");                         /*Para copiar un texto de un elemento de entrada o un área de texto en DOM*/
} 



/*console.table(matrizCodigo) mira array en inspeccionar pagina*/ 