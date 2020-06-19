---
title: 'Fundamentos de Programación Dinámica'
date: '2020-06-18T17:23:03.605Z'
description: 'Una vista introductoria a la técnica de diseño de algoritmos que es la programación dinámica'
author: 'J. Alvarez'
email: 'jcalvarezj@gmail.com'
platziUser: 'jcalvarezj'
---

# Fundamentos de Programación Dinámica

La Programación Dinámica siempre fue un tema que me aterraba años atrás en mis cursos de algoritmia, pero me di cuenta recientemente, luego de tomar la iniciativa y revisarla despacio, de que es algo que puede ser manejable (además de ser una herramienta muy útil en mi cinturón de conocimientos de programación).

Este es un tema que va de intermedio a avanzado en Ciencias de la Computación, por lo que te recomiendo que estés al día con las mentorías técnicas de Pablo Trinidad de Análisis y Diseño de Algoritmos y lo leas despacio.

Los algoritmos se presentan en notación de pseudocódigo (intermedio flexible entre lenguaje natural y de programación), con el fin de presentarlos de forma general (y para acostumbrar al lector a esta notación, que es muy usada en el mundo de la algoritmia)

## Definición

Se trata de una técnica de diseño de algoritmos en la que se busca mejorar el tiempo(\*) que toma resolver un problema que puede **describirse desde una filosofía recursiva**. Un problema se describe en una **filosofía recursiva** cuando lo podemos plantear en término de problemas de menor grado (complejidad o tamaño), que tienen la **misma naturaleza** que el problema mayor (y por tanto, son a su vez de filosofía recursiva).

 *(\*) "Tiempo" como cantidad de "pasos simples"; medida relativa en el análisis de algoritmos*

 ![Recursion Meme](https://markmoylan.gitbooks.io/csp-java/static/algorithms/Algorithms_Recursion_Example.jpg)


Para resolver este tipo de problemas, la programación dinámica plantea que se debe buscar la manera de aprovechar las estructuras de datos para almacenar la solución a los problemas de menor grado y **reutilizar estas soluciones para no repetir los cálculos**. Entonces estamos ganando eficiencia en complejidad computacional de tiempo, al sacrificar algo de complejidad computacional en espacio (lo cual no hay que dejar de tener presente).

La estructura de datos depende del tipo de problema y del sentido que le otorguemos a su contenido. Normalmente se emplean los índices de las estructuras para referir a qué problema están almacenando su solución.

Por último, la programación dinámica es una técnica muy especial para resolver **problemas de optimización** al evitar la necesidad de llegar a una explosión combinatoria por fuerza bruta (lo que lleva a complejidades exponenciales e incluso factoriales). Para lograr esto, aprovecharemos la **filosofía recursiva** del problema de la siguiente manera:

- La estructura de datos de apoyo va a almacenar **soluciones óptimas a problemas de decisión** respecto de las soluciones a subproblemas (que también serán óptimas). A esto es conocido como **Subestructura Óptima**
- La solución se calcula a partir de las **decisiones de optimización** que se vean reflejadas en esta estructura.

## Esquemas

Existen dos esquemas de implementación de esta técnica que son **Bottom-Up** (o **Tabulación**) y **Top-Down** (o **Memoización**)

### Bottom-Up

Va iterando desde lo más pequeño hasta lo más grande (problemas triviales a problema general). Funciona de la siguiente manera:

1. Identificar y definir los **problemas triviales**; es decir, cuáles son los problemas más pequeños posibles de los que ya tenemos la respuesta.
2. Verificar cuáles problemas están apenas un nivel más alto que los problemas triviales. Para todos los problemas más grandes, tratar de **definirlos a partir de los problemas apenas más pequeños**.
3. De manera iterativa, desde **el primer problema más grande que el trivial** hasta **el problema mayor** que se quiere resolver, calcular la solución a cada problema a partir de su definición recursiva (serán resueltos a partir de las soluciones que ya se han encontrado para los problemas menores)
4. Obtener la solución en la **estructura auxiliar**

El pseudocódigo se vería así:

![Pseudocódigo Bottom-Up](https://i.imgur.com/TUfmp6i.png)

### Top-Down

Este esquema trabaja en orden inverso al BottomUp, ya que comienza en el problema general y baja hasta los problemas triviales; esta vez, de manera recursiva. Sigue estos pasos:

1. Pasar por parámetro la **estructura de datos auxiliar**
2. Establecer como casos base a los **problemas triviales** (porque ya tenemos su solución).
3. Validar si en la **estructura auxiliar** está registrada la solución al problema que resuelve el ambiente recursivo actual
4. Si la solución no existe en la **estructura auxiliar**, hacer recursión para resolver los problemas de menor tamaño y anotarla ahí.
5. Obtener la solución en la **estructura auxiliar**

El pseudocódigo se vería así:

![Pseudocódigo Top-Down](https://i.imgur.com/PoGcbXx.png)

## Ejemplos

Vamos a ver a continuación un par de ejemplos para aterrizar mejor estas ideas.

### 1. Sucesión de Fibonacci

El ejemplo clásico y más sencillo que mejor muestra el poder de esta técnica y ayuda a entender cómo aplicarla es el de la sucesión de Fibonacci.

Recordemos la definición de la función de Fibonacci:

![Función de Fibonacci](https://i.imgur.com/5zevC8o.png)

Y bien, su implementación más sencilla es algo como:

![Implementación recursiva Fibonacci](https://i.imgur.com/hdGUUqf.png)

Y bueno, funciona. Puedes calcular con esa lógica el N-ésimo número en la sucesión... **Peeeero**, si tratas de calcular para un N mayor de 40 o 50, no importa que tengas una máquina súperpoderosa, empieza a tardarse una eternidad en realizar el cálculo y puede que obtengas un resultado, como puede que obtengas un error de desbordamiento de pila (es decir, no hay memoria para la cantidad de llamados de funciones que hay).

Veamos qué pasa.

El árbol de llamados recursivos para N = 7 es este:

![Árbol de recursión](https://i.imgur.com/HoD1IJL.png)
<small>*(Imagen tomada de http://jeffe.cs.illinois.edu/teaching/algorithms/ y modificada con fines ilustrativos)</small>*

Como se puede notar, hay una cantidad exagerada de llamados repetidos. Si hacemos un trabajo formal de analizar matemáticamente ya sea bien ese árbol de llamados, o la ecuación de recurrencia que describe la función de complejidad de tiempo &nbsp; **T(n) = T(n-1) + T(n-2) + O(C)** &nbsp;, ¡obtendremos un pesado orden exponencial de &nbsp;**O(2<sup>n</sup>)** !

Así que, ¿qué podemos hacer? 

Bueno, como lo sugiere la programación dinámica, vamos a intentar reutilizar esos cálculos. Veamos cómo se aborda esto en ambos esquemas.

#### Solución Bottom-Up

Es muy simple. Recordemos:

1. Inicializamos la **estructura auxiliar** (en este caso un array cuyas posiciones refieren al N que estamos calculando)
2. Definimos los **problemas triviales** (es decir, lo que ya conocemos: **F(0) = 0**, **F(1) = 1**)
3. Iteramos **desde el primer problema no trivial hasta el problema que quieremos resolver**, calculando para cada problema su solución a partir de los problemas más pequeños
4. Usamos la **estructura auxiliar** para sacar de ahí la solución y eso es todo.

Este sería el pseudocódigo de la receta que he mencionado:

![Pseudocódigo Fibonacci tabulación](https://i.imgur.com/k8HtLrS.png)

Que visualmente se vería así:

![Fibonacci tabulación visualizado](https://i.imgur.com/YWicDyR.gif)

Implementado en JavaScript se vería así:

```javascript
function fibonacciTabulation(n) {
	const results = new Array(n).fill(0);  
	results[0] = 0;  

	if (n >= 1) {
		results[1] = 1;

		for (let i = 2; i <= n; i++)
			results[i] = results[i-1] + results[i-2];
	}

	return results[n];
}
```

#### Solución Top-Down

Ahora intentemos emplear el otro esquema. ¿Cómo era?

1. En la firma de la función pasar la **estructura auxiliar** como parámetro (un array cuyos índices refieren al término a calcular)
2. Casos base = **Problemas triviales** (que deben estar ya anotados en la **estructura auxiliar**)
3. Si no hay anotada en la **estructura auxiliar** una solución para el N del ambiente recursivo actual, **calcular mediante recursión y anotar en la estructura**
4. Retornar la solución que esté anotada en la **estructura auxiliar**

En pseudocódigo queda:

![Pseudocódigo Fibonacci memoización](https://i.imgur.com/jnxIazz.png)

Y como es una función recursiva, podemos definir una función envolvente para simplificar su llamado (y poderle pasar una estructura inicializada):

![Envolvente Fibonacci memoización](https://i.imgur.com/OOSwsjS.png)

Y si vemos en este caso el árbol de llamados recursivos que teníamos antes, notaremos que sólo estaremos haciendo uso de una pequeña porción de esos llamados al estarlos reutilizando.

![Árbol de recusión memoización](https://i.imgur.com/h58pBHQ.png)
<small>*(Imagen tomada de http://jeffe.cs.illinois.edu/teaching/algorithms/ y modificada con fines ilustrativos)</small>*

Una implementación en JavaScript:

```javascript
function fibonacciMemoization(n, solution) {
    if (n === 0 || n === 1)
        return solution[n];
    else {
        if (!solution[n]) 
            solution[n] = fibonacciMemoization(n-1, solution) + fibonacciMemoization(n-2, solution);
        return solution[n];
    }
}

function fibonacci(n) {
    return fibonacciMemoization(n, [0, 1]);
}
```

Así que para ambos esquemas podemos notar un comportamiento lineal, es decir, una complejidad de tiempo de &nbsp;**O(N)**&nbsp;, pero como estamos reservando memoria según el tamaño de entrada, también tenemos una complejidad espacial de &nbsp;**O(N)**&nbsp;

### 2. Problema de las líneas de ensamblaje

Ahora veamos cómo podemos utilizar el poder de la programación dinámica en un problema de optimización del mundo real. El problema en este caso es la optimización de tiempo en líneas de ensamblaje industriales. Dice así:

    "Se tienen dos líneas de ensamblaje de vehículos, cada una con estaciones en que se añaden o ajustan partes del producto final.

    En cada estación el proceso se demora un determinado tiempo, y hay una demora extra si se quiere cambiar de línea de ensamblaje (no se asume el tiempo entre estaciones de la misma línea). Además, el ingreso a las líneas tiene un tiempo distinto, al igual que la salida a la entrega del producto. 

    Se requiere de un algoritmo que ensamble un vehículo empleando el menor tiempo posible, y con una complejidad de tiempo de ejecución óptima."

Para resolver este problema nos vamos a valer de la propiedad de **Subestructura Óptima** que ya hemos mencionado anteriormente. Te la recuerdo: **la solución óptima de un problema va a estar dada a partir de la decisión de optimización entre las soluciones a subproblemas, que también serán óptimas**. 

¿Suena un poco enredado? Vamos al ejemplo y veamos despacio qué significa.

Para ser práctico lo resolveré mediante el esquema Bottom-Up, así que te dejo como reto implementarlo mediante Top-Down

Antes que nada, entendamos el problema. Para ello he elaborado un diagrama que lo ilustra:

![Diagrama estaciones](https://i.imgur.com/gdbiMCT.png)

La notación es simplemente para denotar las características del problema en función de las posiciones de líneas y estaciones. Esto da pista de que vamos a tener una estructura auxiliar de dos dimensiones: filas para líneas y columnas para estaciones.

Entonces como datos de entrada del problema tenemos los siguientes arrays:

    e[i] :  Tiempo extra que toma entrar inicialmente a la línea  i
    s[i] :  Tiempo extra que toma salir al final de la línea  i
    S[i][j] :  Tiempo que tarda la estación  j  de la línea  i  en obrar
    P[i] :  Tiempo que se tarda en pasar a la línea  i

Ahora nos toca establecer la estructura auxiliar:

    T[i][j] = El tiempo óptimo para la estación  j  de la línea  i

Notemos que simplemente estamos usando las dimensiones del problema (línea, estación) para identificar cada problema de forma única.

Ahora, identifiquemos los problemas triviales:

![Problemas triviales](https://i.imgur.com/gGkiSbA.png)

En la primera estación de cada línea no tenemos que optimizar cosa alguna; ya tenemos la solución para ambas. Entonces guardamos esta información en nuestra estructura auxiliar:

    T[1][1] = e[1] + S[1][1]
    T[2][1] = e[2] + S[2][1]

La primera definición se lee: "el tiempo óptimo para la estación 1 de la línea 1 es la suma del tiempo de entrada de la línea 1 y el tiempo de operación de esa estación (o sea, e[1] y S[1][1], respectivamente)"... Y pues, ya te imaginas cómo se lee la segunda.

¿Qué sigue? -- Bueno, recordando un poco el esquema, luego de pensar en los problemas triviales ya podemos pensar en los **problemas de filosofía recursiva**.

![Problemas de mayor complejidad](https://i.imgur.com/wRKfs9W.png)

Desde la segunda estación en adelante (en cualquier línea) hay un problema de decisión: ¿desde cuál ruta, sumado al tiempo de la estación, es menor el tiempo que toma el proceso? (La imagen ilustra el problema de decisión para el problema referido a la estación S(1, 2) )

    T[1][2] = min{ T[1][1] + S[1][2] , T[2][1] + P[2][1] + S[1][2] }
    T[2][2] = min{ T[2][1] + S[2][2] , T[1][1] + P[1][2] + S[2][2] }

Nuevamente, tratemos de leer esto para el primer problema: "el tiempo óptimo para la estación 1 de la línea 2 es el menor entre **el tiempo que toma la ruta horizontal** y **el tiempo que toma la ruta diagonal**". 

- La **ruta horizontal** será la suma del **tiempo óptimo en la estación anterior** y el tiempo que tarde esta estación
- La **ruta diagonal** será la suma del **tiempo óptimo en la estación anterior de la otra línea**, el tiempo que tarda el paso de línea y el tiempo que tarda esta estación

Entonces lo que hay que hacer es ver cómo se comporta en general... hagamos inducción. Los siguientes problemas serían:

    T[1][3] = min{ T[1][2] + S[1][3] , T[2][2] + P[1][2] + S[1][3] }
    T[2][3] = min{ T[2][2] + S[2][3] , T[1][2] + P[1][2] + S[2][3] }

Entonces notando el patrón lo podemos generalizar, para N estaciones, a

    T[1][N] = min{ T[1][N-1] + S[1][N] , T[2][N-1] + P[2][1] + S[1][N] }
    T[2][N] = min{ T[2][N-1] + S[2][N] , T[1][N-1] + P[1][2] + S[2][N] }

Luego del problema de la estación final (N), calculamos en una posición N+1 el resultado de sumar la solución óptima para N y el tiempo extra de salida. Notar que entonces la estructura en realidad debería tener N+1 columnas

![Problema final estaciones](https://i.imgur.com/asR4Ay9.png)

    T[1][N+1] = T[1][N] + s[1]
    T[2][N+1] = T[2][N] + s[2]

Finalmente, se obtiene la solución a partir de la información que tenemos en la estructura de datos auxiliar. Es simple, dado que esa estructura refleja las decisiones en cálculos óptimos, podemos recorrerla obteniendo las posiciones (línea, estación) el menor valor de tiempo entre una estación de las dos líneas.

Vamos a ver cómo podemos formalizar esta solución en algoritmos:

![Imgur](https://i.imgur.com/GV2vXLl.png)

¡Y ese es todo el algoritmo! No hay cosas muy raras más que rellenar la estructura de datos auxiliar con soluciones óptimas.

Es hora de sacar del horno la solución al problema:

![Get Solution Path](https://i.imgur.com/xryy0yV.png)

Un pequeño seguimiento rápido a un problema de ejemplo:

![Seguimiento](https://i.imgur.com/vqhVCr8.gif)

¡Y ya está resuelto!

Por último, si quieres, puedes echarle un vistazo a cómo se vería una implementación en Java de este problema, [aquí en mi repositorio personal de GitHub](https://github.com/jcalvarezj/practice/blob/master/Java/EnsamblajeProgDinamica.java)

## Conclusiones

En este post hemos aprendido las bases que se necesitan para entender cómo resolver problemas de manera eficiente mediante programación dinámica. El todo de ello está en la **filosofía recursiva**, la **estructura de datos auxiliar**, la **reutilización de soluciones** y las **decisiones de optimización** (para ese tipo de problemas).

Todos los problemas tienen una forma distinta de ser abordados y requieren de buen ingenio para saber cómo sacarle el mayor provecho a las estructuras de datos. Es por ello que te invito a explorarlos y ver la variedad de formas que hay de representarlos y resolverlos (aunque el reto está en tratar de pensar en cómo hacerlo uno mismo).

## Si quieres saber más

Aquí te comparto algunos recursos para explorar y profundizar más. 

- [Demystifying Dynamic Programming - Alaina Kafkes](https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/)
- [Algorithms - Jeff Erickson](http://jeffe.cs.illinois.edu/teaching/algorithms/)
- [Dynamic Programming for Interviews - Sam Gavis-Hughson, Interview Coach of Byte By Byte LLC](https://www.byte-by-byte.com/dpbook/)
- [Dynamic Programming - Joe Del Rocco (Cacti Council)](https://www.youtube.com/watch?v=jDJM_foYGEU)
- Introduction to Algorithms - Thomas H. Cormen
- Fundamentals of Algorithmics - Gilles Brassard, Paul Bratley
- Algorithm Design - Jon Kleinberg y Éva Tardos

Otros problemas clásicos incluyen:

- El problema del cambio (making change)
- La subsecuencia común más larga
- La mochila (o knapsack en inglés) - [Explicación por Joe Del Rocco (Cacti Council)](https://www.youtube.com/watch?v=7SGzWtEUUL8)
- El problema del consumo de calorías (una versión modificada del problema de la mochila) - [Aquí una pista de cómo abordarlo](https://www.linkedin.com/pulse/explain-example-dynamic-programming-michelle-xie/)
- Recorte de varillas para obtener el precio óptimo (rod cutting)
- El vendedor viajero (travelling salesman)
- Y muchos más
 
Por supuesto hay muchos más recursos al alcance de una Googleada, unos más entendibles que otros. Te animo a ir despacio, con calma y a no rendirte. En ocasiones algunos problemas, su definición, y su solución pueden parecer complicados de abstraer, y por eso te pido perseverar un poco.

Recuerda también ayudarte mucho de forma visual con dibujos y diagramas, para que veas el problema en otros ángulos y puedas dar con alguna propiedad de éste que puedas aprovechar para resolverlo con mayor facilidad.

Eso es todo por ahora, muchas gracias por tu atención e interés.

**¡Nunca pares de aprender!**

---
Si tienes algún feedback, duda o comentario, puedes encontrarme en Slack como Juan Camilo Álvarez Jurado (**jcalvarezj**) y en Twitter como [@jcalvarezj8](https://twitter.com/jcalvarezj8). Sígueme también en GitHub como [jcalvarezj](https://github.com/jcalvarezj/).