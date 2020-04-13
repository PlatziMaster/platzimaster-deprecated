---
title: 'IA de videojuegos al servicio de la UI'
date: '2020-04-12T21:56:57.256Z'
description: 'Aprende qué son y cómo usar máquinas de estado finito para manejar el estado de tu UI'
author: 'Yoshua Díaz'
email: 'yoshua.sdiaz@gmail.com'
platziUser: 'yoshua_diaz'
---
![Videojuegos](https://images.unsplash.com/photo-1531812494838-636e337af5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)
El desarrollo de UI se ha hecho más difícil debido a que ahora manejamos estados de la aplicación en el navegador, lo cuál aumenta la complejidad en el desarrollo y en el control de bugs, y la mayoría de bugs tienen que ver con estados mal manejados o con intersecciones entre estados.

La forma en que manejamos los estados en React no son escalables, reutilizables o facilmente testeables. Para hacer un Fetch generamos mucha configuración para manejar el estado de loading, hasError, hasSucces y si queremos pasar esa lógica tenemos que escribirla una y otra vez.

<iframe
  src="https://codesandbox.io/embed/fetching-norma-react-yoshuadiaz-qjfio?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="fetching-norma-react-yoshuadiaz"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Manejar mal un estado puede traer consecuencias catastróficas, si un semaforo tuviera prendidos las luces verde y roja al mismo tiempo sería algo que seguro causaría algunos accidentes o mucho tráfico, a veces necesitamos que sólo exista un estado y saber qué estado es el siguiente, es decir, necesitamos un flujo claro para saber como pasar de un estado a otro, y que sólo exista un estado a la vez. Eso se soluciona con las máquinas de estado finito.

## Máquinas de estado finito
Los enemigos de videojuegos no usan IA de verdad en la mayoría de los casos, ellos no aprenden de las partidas, ellos reaccionan a eventos que los lleva a un estado que hace que te persigan, te ataquen, recarguen munción o mueran, eso lo logran con las Máquinas de estado finito.

![IA de enemigo con máquina de estado finito](https://gamedevn.files.wordpress.com/2015/04/screen-shot-2015-04-11-at-13-02-44.png)

Las máquinas de estado finito trata de una máquina que puede tener muchos estados pero sólo puede estar en uno de ellos en un momento determinado, cómo los enemigos de los videojuegos, lo cuál hace que sea más predecible como se pasa de un estado a otro, como en el semaforo, sabemos que respetara la secuencia y que no hará cosas alocadas como prender o apagarse al ritmo de una canción, es decir, sólo tiene una cantidad finita de estados, y esa limitación nos sirve mucho para el manejo de UI.

Por ejemplo, podemos ver un state machine de un Fetch y es más sencillo:
![State Machine de un fetch](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c2f37efe-a89c-48fd-9176-f289aa05ccd6/sm-high-res-opt.jpg)

En esta lógica:
- **IDLE** sería nuestro punto de inicio, cómo cuando un personaje de videojuegos se queda quieto y solo corre la animación de como respira y parpadea y solo puede mandar el evento **click** que hará que la máquina entre en estado **Fetching** y no a error u otro estado.
- **Fetching**: este estado podría bloquear los botones, mostrar el mensaje de carga e iniciar la petición con fetch, y dependiendo del resultado lanzar uno de dos eventos: **failure** o **success** y dependiendo de lo que haga puede ir al estado **idle** o a **error**
- **Error**: en este estado sólo podemos mandar el evento de reintentar, lo cuál nos permite manejar lógica para que se haga ese reintento de forma automática o limitar el número de reintentos.

Todo eso suena genial pero ¿cómo lo implementamos?, una librería genial se llama xState.

## Introducción a xState

Para definir una máquina de estado con xState escribimos primero los estados que ocurrirán de esta forma:
```js
import { createMachine } from 'xstate'

const maquinaDeFetch = createMachine({
  id: 'fetch',
  initial: 'idle',
  // Lista de estados
  states: {
    idle: {},
    fetching: {},
    error: {}
  }
})

```

Definimos como se hará la transición

```js
import { Machine } from 'xstate'

const maquinaDeFetch = Machine({
  id: 'fetch',
  initial: 'idle',
  states: {
    idle: {
      // Definimos con 'on' el evento y a donde irá
      on: {
        click: 'fetching'
      }
    },
    fetching: {
      // Definimos con 'on' el evento y a donde irá
      on: {
        failure: 'error',
        success: 'idle'
      }
    },
    error: {
      // Definimos con 'on' el evento y a donde irá
      on: {
        retry: 'fetching'
      }
    }
  }
})
```

Y aquí mostraré como usar la máquina con el ejemplo anterior con un servicio para hacer el fetch dinámico:

<iframe
  src="https://codesandbox.io/embed/finite-state-machine-yoshuadiaz-f7d47?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="finite-state-machine-yoshuadiaz"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Recursos para saber más:
* [Charla del creador de xState](https://www.youtube.com/watch?v=VU1NKX6Qkxc)
* [Sitio de xState](http://xstate.js.org/)
* [Un post cool sobre xState y las máquinas de estado](https://css-tricks.com/using-react-and-xstate-to-build-a-sign-in-form/)
* [Cómo usarlas con Vue.js](https://frontstuff.io/using-state-machines-in-vuejs-with-xstate)

Si te sirvió este post sigamos la conversación por Twitter [@Yoshua Díaz](https://twitter.com/yoshuadiaz) o visítame en [mi sitio web](https://www.yoshuadiaz.com)