---
title: 'La maquinaria matemática detrás de la recursión'
date: '2020-04-14T02:57:01.276Z'
description: 'Un vistazo matemático a los números naturales y el teorema de la reclusión. Cuarta parte - nivel avanzado'
author: 'Héctor Olvera Vital'
email: 'hector.olvera@ciencias.unam.mx'
platziUser: 'hyfi06'
---

*Cuarta parte - nivel avanzado*

Hablemos de matemáticas. Spoiler Alert: no habrá nada de código.

## Números naturales

Los números naturales (`0, 1, 2, 3, 4, 5, …`) son objetos matemáticas que pueden ser descritos a través de enunciados matemáticos (axiomas) que modelan su comportamiento.

Este comportamiento fue estudiado por siglos y fue Peano quien pudo definir a los números naturales a través de 5 axiomas que los modelan.

## Axiomas de Peano

Dado un conjunto `0` y otro conjunto `N` (conjunto lo podemos entender como un objeto matemático que tiene como relación fundamental la pertenencia), y una relación `s` (una conjunto de pares ordenados) de elementos de `N`.

> Axioma 1: `0` pertenece a `N`, es decir, `0` es un número natural.

> Axioma 2: Si `n` pertenece a `N`, hay un único `m` que pertenece a `N` tal que `(n, m)` pertenecen a `s`, es decir, `s` es una función.

> Axioma 3: Para toda `n` perteneciente a `N`,  `s(n)` es diferente de `0`.

> Axioma 4: Para cualquier `n` y `m` que pertenecen a `N`, si `s(n) = s(m)`, entonces `n = m`.

> Axioma 5: Principio de Inducción. Sea `A` un subconjunto de `N`, tal que `0` pertenece a `A`, y cada vez que `n` pertenece a `A`, sucede que `s(n)` pertenece a `A`. Entonces `A = N`.

Dos comentarias antes de la explicación:

1. Todos son conjuntos, la pertenencia o “ser elemento de”  es una relación entre conjuntos. Los elementos y los conjuntos no son dos cosas diferentes. 
2. Los axiomas de Peano modelan a los Números naturales pero no de manera única. De hecho, podemos tomar los números naturales mayores a 3 como `N`, y si tomamos como `0 = 3`, se cumplirían todos los axiomas de Peano. Por lo que, iniciar en 0 o en 1 es equivalente, fin de la discusión.

Ahora sí, la explicación para los mortales.

El axioma 1 dice que `0` es un número natural. El axioma 2 dice que sólo existe un único (y sólo uno) sucesor de cada número natural, así, el sucesor de `0` es `1` y sólamente el número `1` (los naturales no se ramifican). El axioma 3 dice que `0` no es sucesor de nadie (los naturales no son un ciclo). El axioma 4 dice que ningún número puede ser el sucesor de 2 naturales diferentes (no tiene ciclos o bucles). Y el axioma 5 nos da el principio de inducción.

El principio de inducción nos dice que si un subconjunto de los naturales tiene el `0` (la base) y cada vez que tenga a un natural, también le pertenece su sucesor (paso inductivo), entonces todos los números naturales están contenidos en dicho subconjunto, es decir, el subconjunto es el total de todos los números naturales.

Así, los números naturales se caracterizan por un el `0`, la fusión suceso.

## El teorema de recursión

Esta estructura de un conjunto (`N`) con un elemento (`0`) y una función (`s` o sucesor) no es algo único o raro en matemáticas. Así que es fácil seudo copiar los números naturales en cualquier conjunto. De esto trata el teorema de recursión.

Sea `X` un conjunto, `x0` un conjunto que pertenece a `X` y `f` una función de `X` a `X` (`f: X -> X`). Entonces existe una única función `g` de los naturales a `X` (`g: N -> X`) tal que `g(0) = x0` y `g(s(n)) = f(g(n))`.

Es decir, podemos copiar a los naturales en `X`, usando la función `f` como función sucesor dentro de `X`. Obviamente de manera tosca y no precisa, ya que si no cumple propiedades similares a los axiomas 3 y 4 de Peano, no obtenemos un “línea”.

La estructura `g(0) = x0` (base), y `g(s(x)) = f(g(x))` (paso recursivo) la hemos visto repetidas veces en los post anteriores. Por ejemplo. Cuando definimos la multiplicación, `X` eran los mismos números naturales, `x0 = 0`  y `f` era la tabla de sumar:

1. `g(0) = 0;  k * 0 = 0`,
2. `g(s(n)) = k + (g(n)); k * s(n) = k + k * n`.

## Comentarios de implementación

Una propiedad muy importante de los números naturales es que todo número natural es el 0 o el sucesor de alguien. Esta propiedad la usamos en todos los códigos de esta serie sobre la recursividad. Al poner `if` es igual al caso base hacemos algo y si no aplicamos recursión, estábamos aplicando esta propiedad. Y de una manera más práctica cuando llamábamos a la función con el `n - 1`, ya que esto sólo tiene sentido si conocemos que `n` es sucesor de alguien.

Al seudo copiar la estructura de los naturales, podemos asegurar que si vamos retrocediendo, siempre vamos a terminar en el 0. Así, `g(4) = g( s(3) ) = f( g(3) ) = f( f( g( s(2) ) ) ) = f( f( g(2) ) ) = f( f( f( g(1) ) ) ) =  f( f( f( f( g(0) ) ) ) ) = f( f( f( f( f(x0) ) ) ) )`, es decir, aplicar sucesivamente la función `f` a `x0`.

En general, `n` es el resultado de aplicar `n` veces la función sucesor al `0`, `n = s^n(0)`. Entonces, `g(n)` es aplicar `n` veces la función `f` a `x0`, `g(n) = f^n(x0)`.

Por esto, podemos escribir el factorial con un ciclo en lugar de usar recursión. Saber ésta relación y conversión, nos ayudará a identificar cuándo podemos usar una forma o la otra. 

Por ejemplo, existen formas más complicadas del Teorema de recursión y más generales, por lo que hay veces en que no es directa la conversión a un ciclo y se vuelve muy engorroso. En esto casos es más factible realizar reclusión. Trata de pasar el algoritmo de mergesort a un ciclo, mucha suerte.

## Comentarios finales

El teorema de recursión se demuestra usando inducción. Por eso, siempre que nos definían algo por recursión, muy probablemente tengamos que usar inducción para demostrar propiedades sobre esa definición.

Por eso en el primer post les habla de la inducción matemática y su relación con la recursividad. Y con esto queda saldado lo prometido en el primer post:

> Estos tiene que ver con la matemática que llevan detrás la recursividad, la cual se introducirá en un post más adelante.

Ahora que tienes las bases matemáticas te invito a leer de nuevo los post anteriores, solo así podrás entender la recursividad:

> Lo primero para entender la recursividad, es entender la recursividad.

## Contacto

Si quieres hablar más sobre este tema contáctame en:

- Slack: @Héctor (hyfi06) 
- Twitter: [@hyfi06](https://twitter.com/hyfi06)
- Github: [hyfi06](https://github.com/hyfi06)
- Platzi: [@hyfi06](https://platzi.com/@hyfi06/)
