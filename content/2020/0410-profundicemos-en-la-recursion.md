---
title: 'Profundicemos en la recursión'
date: '2020-04-10T03:17:39.571Z'
description: 'Un vistazo al funcionamiento de la recursión y el algoritmo divide y vencerás. Tercera parte - nivel intermedio'
author: 'Héctor Olvera Vital'
email: 'hector.olvera@ciencias.unam.mx'
platziUser: 'hyfi06'
---

*Tercera parte - nivel intermedio*

En el post anterior vimos como sumar, multiplicar y exponenciar de forma recursiva, vamos a seguir con más ejemplos.

## Más ejemplos

Recordemos el factorial. Podemos definirlo de maner recursiva como:

1. `0! = 1`.
2. `s(n)! = s(n) * n!`.

En ocasiones, para calcular el siguiente necesitamos usar dos anteriores, por ejemplo en la serie de fibonacci:

1. `fibonacci(1) = 1`
2. `fibonacci(2) = 1`
3. `fibonacci(s(s(n)))  = fibonacci(s(n)) + fibonacci(n)`

El código de estas dos ejemplos corresponde a los challenge-javascript-03 y challenge-javascript-04.

Pero vamos a ver un caso de uso más abstracto.

## Divide y vencerás

El término divide y vencerás es un paradigma de diseño de algoritmos que consiste a grandes rasgos en dividir el problema en dos o más problemas menores que se pueden solucionar de manera sencilla y después juntar las respuestas para obtener la respuesta final.

¿Y cómo se relaciona con la recursividad?

Bueno, pues los problemas chiquitos que sabemos resolver fácilmente son nuestra base, y los problemas mayores se pueden resolver sabiendo los problemas chiquitos, la definición recursiva.

## Ordenación recursiva

Analicemos el problema de ordenar números. Supongamos que tenemos un arreglo desordenado de números, por ejemplo `[6, 5, 3, 1, 8, 7, 2, 4]`, y queremos ordenarlo de menor a mayor. Sabemos comparar dos números, y uno sólo también. Pues tratemos de reducir este problema hasta el que ya sabemos resolver.

Podemos partir el problema en 2, `[6, 5, 3, 1]` y `[ 8, 7, 2, 4]`. Todavía no sabemos cómo ordenar estos nuevos problemas, algo parecido a cuando analizamos la definición recursiva del factorial. Entonces dividimos el problema nuevamente.

Dividimos cada problema en 2, entonces tenemos los siguientes arreglos: `[6, 5]`, `[3,1]`, `[8,7]` y `[2, 4]`. Estos problemas ya los sabemos resolver. Si ordenamos los 4 arreglos tenemos `[5,6]` , `[1, 2]`, `[7, 8]`, `[2, 4]`.

Ya los tenemos ordenados por pares, ahora veamos otro problema, como unir estas respuestas para ordenar nuestro problema mayor.

Este algoritmo se llama mergesort porque primero divide el problema en dos y cuando tenga la respuesta, las une (merge) de forma ordenada (sort).

![Mergesort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

Una aproximación al código sería la siguiente:

JavaScript:

```python
const mergesort = (array) => {
  if (array.length <= 1) {
    return array;
  } else {
    const [ array_left, array_right ] = dividir(array);
    array_left = mergesort(array_left);
    array_right = mergesort(array_right);
    return merge(array_left, array_right);
  }
}
```

Python:

```python
def mergesort(array):
  if array.length <= 1:
    return array
  else:
    array_left, array_right = dividir(array)
    array_left = mergesort(array_left)
    array_right = mergesort(array_right)
    return merge(array_left, array_right)
```

La recursividad se vé al llamarse a sí misma para ordenar el arreglo derecho y el izquierdo. Notemos que el caso base corresponde cuando tenemos un único elemento en el array, en lugar de dos. Esto es porque en nuestro ejemplo teníamos un número par de elementos en nuestro array, por lo que al dividir a la mitad, nos quedaron siempre parejas.

Por último, la función `merge` junta los dos arreglos ordenados en un solo arreglo ya ordenado.

Como ejercicio completa la función `mergesort`. Mándame un [tweet](https://twitter.com/hyfi06) con código y el resultado, o tus dudas, los estaré esperando ;)

## Contacto

Si quieres hablar más sobre este tema contáctame en:

- Slack: @Héctor (hyfi06)
- Twitter: [@hyfi06](https://twitter.com/hyfi06)
- Github: [hyfi06](https://github.com/hyfi06)
- Platzi: [@hyfi06](https://platzi.com/@hyfi06/)
