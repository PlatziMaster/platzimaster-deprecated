---
title: 'Tips de buenas prácticas para la escritura de código'
date: '2020-03-26T11:46:34.044Z'
description: 'Construye software de alta calidad con un código legible, mantenible y fácil de probar'
author: 'Rubén Padilla'
email: 'rubbenpad2@gmail.com'
platziUser: 'rubbenpad'
---

Imagina que un día estás frente a tu computadora y quieres ver uno de los primeros proyectos que realizaste cuando empezaste a programar. Ahora estás allí, en tu perfil de github o tu editor de texto favorito y resulta que no existe ninguna descripción de lo que tu proyecto hace o por qué lo creaste, te pones a revisar la estructura de las carpetas y el código que está en cada uno de los archivos y no logras hacerte una idea de cuál fue la razón por la que _kitty_ fue el nombre escogido para esa variable.

Si has vivido la situación que acabo de describir o no quieres vivirla en tu futuro como programador, sigue leyendo.

### ¿Quién se beneficia de contar con un código bien escrito?

El primer beneficiado al implementar buenas prácticas cuando estamos creando un proyecto eres tú, ya sea que estés involucrado en un proyecto personal o un proyecto de la empresa en la que trabajas. Si dejas por un tiempo este proyecto podras retomarlo nuevamente sin mayores dificultades.

Las siguientes personas que se benefician son aquellas que trabajan contigo en algún proyecto, para ellas será más fácil entender el código y realizar alguna modificación.

Y el cliente, que a pesar de no ver el código, percibirá una mejor atención.

### Características de un código de alta calidad

Existen tres características principales que nos ayudaran a identificar si nuestro código es robusto y de alta calidad:

#### 1. Legibilidad

Nuestro código es legible cuando con facilidad podemos saber qué es lo que hace. Esta característica la añadimos a nuestros proyectos con la adopción de estándares que nos ayuden a definir la estructura y nombre de las carpetas, el nombre que le daremos a los archivos y cómo se organizará nuestro código. Herramientas como [eslint](https://eslint.org/) y [prettier](https://prettier.io/) suelen ser muy útiles.

#### 2. Mantenibilidad

Cuando estamos creando software debemos pensar en escribir pequeños componentes de código que cumplen una funcionalidad específica y al final se integrarán para trabajar como un sistema. Los componentes deben ser pensados para poder extender su funcionalidad de acuerdo a nuevos requerimientos sin necesidad de cambiar todo el sistema que ya está trabajando.

#### 3. Testeabilidad

Realizar pruebas nos ayuda a identificar errores fácilmente cuando realizamos cambios en el código de un proyecto, estos errores pueden ser; errores de lógica, errores de sintaxis y errores de funcionalidad, entre otros. Existen las pruebas unitarias y la pruebas de integración.

El enfoque de las pruebas unitarias es tomar cada uno de los componentes por separado y saber si cada uno de ellos se comporta como lo esperábamos.

Las pruebas de integración, como su nombre lo indica, las realizamos para _testear_ el funcionamiento de los componentes conectados y funcionando como sistema, por que si bien, cada componente puede funcionar como esperábamos en un entorno aislado, puede que no lo hagan cuando interactúan con otros componentes.


### Conclusión

Al final el código que escribes será interpretado por una máquina, pero recuerda que una persona debe leerlo para entenderlo y poder modificarlo. Al integrar los conceptos que aprendimos en este _post_  puedes tener un proyecto más robusto y bien documentado que no te causara frustraciones al volver a trabajar en el.

Para terminar te quiero invitar a que escribas un buen **README** para tus proyectos, en el puedes agregar cosas como el título del proyecto, un screenshot si es una aplicación web, una descripción de como podemos usarlo y por que no, cómo podemos ayudar a mejorarlo.