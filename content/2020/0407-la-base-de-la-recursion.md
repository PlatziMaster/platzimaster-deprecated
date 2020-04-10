---
title: "La base de la Recursión"
date: "2020-04-07T00:56:44.375Z"
description: "Un vistazo al funcionamiento de la recursión. Segunda parte - nivel intermedio"
author: "Héctor Olvera Vital"
email: "hector.olvera@ciencias.unam.mx"
platziUser: "hyfi06"
---

_Segunda parte - nivel intermedio_

Si vienes de alguna carrera afín a las matemáticas e ingeniería, seguramente habrás oído hablar de la inducción matemática. ¡Espera, no cierres el post todavía! Ya se que puede traer malos recuerdos, pero, por el momento, no vamos a hacer ninguna inducción matemática.

La inducción matemáticas es un método (axioma) para demostrar propiedades de los números naturales. Posiblemente recordarás haber “demostrado” alguna cosa con sucesiones o series. Pero como dije, no va de esto este post. Sólo quiero rescatar los pasos que usa la inducción.

1. Primero vemos que la propiedad se cumple para `0` (ó `1`, ó otro número, depende de lo que convenga).
2. Suponemos que se cumple para un `n`.
3. Demostramos que se cumple para `n + 1`.

No importa si no te hace sentido eso, si quieres saber más puedes contactarme en los medios que aparecen al final de este post.

La recursión, como se introdujo en el [post anterior de esta saga](https://platzimaster.github.io/2020/0404-introduccion-a-la-recursion/), es algo que en su definición aparece lo que se está definiendo. Esto no lleva a contradicción cuando definimos un caso base antes del caso recursivo. Y esto es gracias a que la recursión se fundamenta en la inducción matemática.

La inducción matemática parte de un caso base, que la propiedad se cumpla para el `0`; y un paso inductivo, suponer para `n` y demostrar que se cumple para `n + 1`. La recursión hace esto mismo, primero de define qué pasa con el `0`, o otro número que nos sirva de base; y luego definimos de manera recursiva el paso `n + 1` usando que tenemos el paso `n`.

![nuclear head](https://images.emojiterra.com/google/android-pie/512px/1f92f.png)

Respira. Esto puede ser abrumador. Lo sé, es algo abstracto, pero para eso están los ejemplos.

## Ejemplos de definiciones recursivas

Ya pasamos lo más difícil: decir las cosas como son. Ahora hay que comprenderlo.

Vamos a definir las tablas de la suma de manera recursiva. Fácil, ¿no? Sólo requerimos saber cual es el número siguiente, lo denotaremos como `s(n)`, el sucesor de `n`.

La tabla de sumar de k se define como sigue:

- `k + (0) = k`
- `k + (s(n)) = s(k + (n))`

¿Cuánto es `2 + 2`? ¡Pues vamos a programarlo!

JavaScript:

```js
const sumar2 = (num) => {
  if (num === 0) {
    return 2;
  } else {
    return sumar2(num - 1) + 1;
  }
};
```

Python:

```python
def sumar2(num):
  if num == 0:
    return 2
  else:
    return sumar2(num - 1) + 1
```

Si llamas la función `sumar2(2)` verás que te sale `16`. ¿Por qué? ¿No te salió `16`? ¿Te salio `4`? A mi también me salió `4`, pero quería asegurarme que lo hicieras.

Veamos que hace la computadora:

1. Llamamos `sumar2(2)`.
2. Como `2 != 0`, regresamos `sumar2(1) + 1`. Pero para resolver la operación necesitamos saber cuanto vale `sumar2(1)`.
3. Llamamos `sumar2(1)`.
4. Como `1 != 0`, regresamos `sumar(0) + 1`. Pero para resolver la operación necesitamos saber cuánto vale `sumar2(0)`.
5. Llamamos `sumar2(0)`.
6. Como `0 = 0` regresamos `2`.
7. En el paso 4 ya podemos opera `sumar2(0) + 1 = 2 + 1 = 3`, regresamos `3`.
8. En el paso 2 ya podemos operar `sumar2(1) +1 = 3 + 1 = 4`, y regresamos `4`.

![nuclear head](https://images.emojiterra.com/google/android-pie/512px/1f92f.png)

Este ejemplo es muy sencillo, como dije solo se requiere saber cual es el número siguiente. Aquí nos aprovechamos de que el número siguientes es `n+1`.

Vamos a ver otros ejemplos. Pero si entendiste este, los demás son similares.

Ya que sabemos sumar, vamos a multiplicar de manera recursiva.

- `k * (0) = 0`
- `k * (s(n)) = k * n + k`

¿Cuánto es `7 * 6`? Pues si no lo recuerdas seguro sabes cuanto es `7 * 5` y sólo sumas `7` más. ¿No aplicaste este truco toda vida? Eso es recursividad. Lo has sabido hacer, los has entendido toda la vida, pero no sabías que se llamaba así.

Vamos a programar la tabla del `7`:

JavaScript:

```js
const multiplicar7 = (num) => (num === 0 ? 0 : multiplicar7(num - 1) + 7);
```

Python:

```python
multiplicar7 = lambda num: 0 if num == 0 else  multiplicar7(num - 1) + 7
```

Como ejercicio repite los pasos que hace la computadora, como hice con la suma, cuando llamas `multiplicar7(3)`.

Ya sabemos multiplicar, ¿y si ahora exponenciamos?

- `k ^ 0 = 1`
- `k ^ s(n) = (k ^ n) * k`

Como ejercicio programa la función `exp2` y calcula `exp2(10)`. Mándame un [tweet](https://twitter.com/hyfi06) con tu código y el resultado, lo estaré esperando ;)

## Contacto

Si quieres hablar más sobre este tema contáctame en:

- Slack: @Héctor (hyfi06)
- Twitter: [@hyfi06](https://twitter.com/hyfi06)
- Github: [hyfi06](https://github.com/hyfi06)
- Platzi: [@hyfi06](https://platzi.com/@hyfi06/)
