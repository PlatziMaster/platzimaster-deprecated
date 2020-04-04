---
title: 'Introducción a la recursión'
date: '2020-04-04T05:20:59.030Z'
description: 'Una intrudución a la recursión. Primera parte - nivel básico. Spoiler alert: Puede contener la solución a un challenge'
author: 'Héctor Olvera Vital,'
email: 'hector.olvera@ciencias.unam.mx,'
platziUser: '@hyfi06'
---

*Primera parte - nivel básico*

**Spoiler alert:** El siguiente post contiene una solución al [challenge-javascript-03](https://github.com/PlatziMaster/challenge-javascript-03). Si no lo has resuelto, intententalo primero antes de leer este post.

> Lo primero para entender la recursividad, es entender la recursividad.

La recursión o la recursividad hace referencia a algo que se llama a sí mismo, por ejemplo, en un diccionario podrías encontrar lo siguiente:

> Recursión, véase Recursión.

También se dice que algo es recursivo cuando lo que se está definido, está en la definición. Aunque, esto parezca un error hay forma de poder usarlo si que se llegue a una ambigüedad como en el ejemplo del diccionario.

## Una ejemplo en matemáticas

La operación factorial se define como `n! = n * (n - 1) * (n - 2) * … * 2 * 1`, es decir, la multiplicación de todos los números naturales positivos menores o iguales a n.

Otra forma de definir esta operación es de manera recursiva, es decir, que usando el factorial en la propia definición.

```latex
0! = 1
si n > 0, n! = n * (n - 1)!
```
Notemos que en esta definición tenemos dos casos. El caso `0! = 1` se le llama caso base, y el caso recursivo `n! = n * (n - 1)!`. Estos tiene que ver con la matemática que llevan detrás la recursividad, la cual se introducirá en un post más adelante.

## Vamos al código

Vamos a implementar en código la definición recursiva de la operación factorial. 

En javascript:
```js
const factorial = num => num === 0 ? 1 : num * factorial(num -1);
```

En python:
```python
factorial = lambda num: 1 if num == 0 else num * factorial(num - 1)
```

## Entendamos el código

Cuando nosotros llamamos a la función factorial, pasan los siguientes paso:

Llamamos `factorial(3)`.
Como `3 != 0`, `factorial(3) = 3 * factorial(3 -1) = 3 * factorial(2)`, pero no podemos hacer la multiplicación por que no conocemos factorial(2).
Llamamos  `factorial(2)`.
Como `2 != 0`, `factorial(2) = 2 * factorial(2 -1) = 2 * factorial(1)`, pero no podemos hacer la multiplicación por que no conocemos factorial(1).
Llamamos  `factorial(1)`.
Como `1 != 0`, `factorial(1) = 1 * factorial(1 -1) = 1 * factorial(0)`, pero no podemos hacer la multiplicación por que no conocemos factorial(0).
Llamamos  `factorial(1)`.
Como `0 == 0`, `factorial(0) = 1`, y por lo que retornamos `1`.
Ya podemos terminar la operación del paso 6, por lo que, `factorial(1) = 1 * factorial(0) = 1 * 1 = 1`, y retornamos `1`.
Ya podemos terminar la operación del paso 4, por lo que, `factorial(2) = 2 * factorial(1) = 2 * 1 = 2`, y retornamos `2`.
Ya podemos terminar la operación del paso 2, por lo que, `factorial(3) = 3 * factorial(2) = 3 * 2 = 6`, y retornamos `6`.

Así, `factorial(3) = 6`.

Aquí podemos ver la importancia del caso base. Si no tuviéramos un caso base caeríamos en un ciclo infinito.

![Recusive Winnie the Pooh](https://media1.giphy.com/media/aaODAv1iuQdgI/source.gif)

## Reto

Reescribe la función factorial que se presentó aquí, para que imprima en consola el valor obtenido justo antes de retornarlo. En la consola deberás ver que empieza a retornar los valores en el orden que del paso 8 a 11.
