---
title: Tipos de datos primitivos en JavaScript
date: '2020-03-23T02:59:51.935Z'
description: 'Explicación sobre los tipos de datos primitivos que existen en JavaScript.'
author: Alan David
email: alandavidrl11@gmail.com
platziUser: ThAlan
---

# Tipos de datos primitivos en JavaScript

Seas un desarrollador experimentado o alguien nuevo en JavaScript, conocer los tipos de datos primitivos del lenguaje es una prioridad y en este post vamos a dar un tour por ellos.

Veremos todos lo tipos y sus partes importantes sin ir muy profundo, si quieres profundizar en ellos puedes ir a los links de [referencia](#Referencias) que dejo al final (Yo se que eres de las personas a las que les gusta profundizar).

Lo primero a tener en mente cuando hablamos de tipos de datos primitivos en JavaScript es que son **inmutables**, esto quiere decir que no hay nada que se pueda hacer para cambiarlos.

**Ahora si vamos a comenzar el tour uno por uno:**

- [Undefined](#Undefined)
- [Null](#Null)
- [Boolean](#Boolean)
- [String](#String)
- [Symbol](#Symbol)
- [Number](#Number)
- [BigInt](#BigInt)

## Undefined

Su único valor es ```undefined```, este tipo de dato es encontrado en cualquier variable a la que no se le a asignado un valor.

```javascript
let heWhoMustNotBeNamed;

console.log(heWhoMustNotBeNamed); // undefined

const heWhoMustNotBeNamed = {
    name: "Tom Riddle",
}

console.log(heWhoMustNotBeNamed.age); // undefined

console.log(typeof(undefined));
// undefined
```

## Null

Su único valor es ```null```. Se usa para valores que intencionalmente sabemos van a faltar.

```javascript
let roomOfRequirements = null;

console.log(roomOfRequirements); // null
```

Ahora veamos el siguiente código:

```javascript
console.log(typeof(null));
// object
```

Ahora mismo debes estar así: 🤯, no te preocupes que este es un error de JavaScript. Recuerda que incluso cuando ```null```intenta parecer que es un objeto este no lo es porque es **inmutable**.

## Boolean

El tipo ```bool``` es una representación de alguna identidad lógica ya sea ```true```o ```false```. Se usan para operaciones lógicas, ¿Tal vez recuerdes las [tablas de verdad](https://www.youtube.com/watch?v=Pfyuv5ZnNNw)?

Veamos su representación en código de JavaScript.

```javascript
console.log(typeof(true));
// boolean

console.log(typeof(false));
// boolean

let isWizard = true;

if (isWizard) {
    console.log("Harry ... yer a wizard");
}
// Harry ... yer a wizard
```

## String

El tipo de dato string se usa para representar texto y cada elemento (carácter) cuenta con un index que comienza en 0.

Existen diferentes maneras de declarar una ```string```.

- '', single quotes.
- "", double quotes.
- ``, backticks.

```javascript
console.log(typeof(""));
// string

console.log(typeof('Hogwarts'));
// string

const siriusAlias = `Padfoot`;

console.log(siriusAlias.length); // 7
console.log(siriusAlias[3]); // "f"
```

## Symbol

Este tipo primitivo es reciente en JavaScript y por lo tanto aún falta mucho por ver del mismo. Piensa en él como la propiedad key de un objeto.
Es importante que recuerdes que este tipo de dato no funciona igual a ningún otro tipo con el mismo nombre de algún diferente lenguaje.

- **Cada símbolo tiene un valor único y es inmutable.**

```javascript
let dobbySym = Symbol("Dobby");

let dobbySym2 = Symbol("Dobby");

console.log(dobbySym === dobbySym2); //false
```

Aunque el valor es el mismo, JavaScript maneja los símbolos como valores únicos.

## Number

Cualquier valor numérico, usados para cálculos matemáticos.

```javascript
console.log(typeof(243)); // number

console.log(typeof(-4545)); //number

console.log(typeof(4.524)); // number
```

## BigInt

Este tipo primitivo es reciente en JavaScript al igual que Symbol, sirve para operar grandes valores numéricos con precisión más allá de los límites del tipo ```Number```.
Podemos crear un ```BigInt```añadiendo una n al final del número en cuestión.

```javascript
let justABigInt = 1n;

justABigInt + 5n // 6n
```

Puedes utilizar los operadores ```+```, ```-```, ```/```, ```%```y ```*```como con el tipo ```Number````

Eso es todo por este post, espero te haya ayudado a conocer o recordar los tipos de datos primitivos de JavaScript.

_Puedes aportar a este post con la información que quieras sobre el tema._

Puedes contactarme por [Twitter](https://twitter.com/ThAlanDavid1) o [Github](https://github.com/AlanDavd), hasta el proximo post.

### Referencias
- https://www.ecma-international.org/ecma-262/9.0/index.html#sec-ecmascript-data-types-and-values
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
