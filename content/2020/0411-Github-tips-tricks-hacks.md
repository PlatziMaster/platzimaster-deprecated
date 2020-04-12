---
title: 'Github: Tips, tricks y hacks'
date: '2020-04-11T20:39:44.375Z'
description: 'Una guia para poderle sacar el maximo provecho a github'
author: 'Alexis Araujo'
email: 'ala1289@gmail.com'
platziUser: 'alexisaraujo'
---

# Github: Tips, tricks y hacks

Hoy les traigo un post muy bueno donde van a poder sacarle el máximo provecho a github, creo todos ustedes igual que yo, pasamos la mayoría del tiempo también en github. Quiero compartirles algunos trucos de mis favoritos y espero que también les ayuden.

### Fuzzy file finder 🔎

Una de las cosas que descubrí fue **_fuzzy file finder_**. Presionando <kbd>t</kbd> en cualquier repositorio tendremos acceso y podemos empezar a escribir el nombre del archivo que tu quieres buscar. Usualmente lo hago cuando busco las configuraciones de algunos de los proyectos.

![](https://i.imgur.com/jjXmvg3.gif)

### Explorar archivos y directorios fácilmente

Hoy les traigo una excelente extensión que me ha gustado mucho, una de esas extensiones fue mostrada por uno de nuestros compañeros [wilson romero](https://twitter.com/WilsonRomeroC) y se llamada [Octotree](https://github.com/ovity/octotree). Te ayudará a navegar en la estructura de tus archivos y folders que todos estamos familiarizados de árbol.

![](https://i.imgur.com/5DCTr6O.gif)

### Notificaciones

Esta [extension](https://github.com/sindresorhus/notifier-for-github) nos permite mantenernos actualizados de las notificaciones que tenemos dentro del sistema de github, es discreto el icono dentro de tu toolbar y puedes habilidar las notifications si tu quieres.

![](https://i.imgur.com/kC7FECL.gif)

### Hacer @menciones 📝

Una extensión que nos permitirá resaltar las menciones que nos han hecho dentro del sistema, es muy útil cuando queremos saber dónde estamos realmente "mencionados". El nombre de la extension es [Mention Highlighter](https://github.com/benbalter/github-mention-highlighter)

![](https://i.imgur.com/SnSErlL.gif)

### Consejos de Markdown

[GitHub Flavored Markdown](https://github.github.com/gfm/) parece la biblia del markdown contiene todo lo que necesitas saber para hacer lo que quieras y seguir explotando markdown.

#### Keyboard tags

Tu puedes usar el tag `<kbd>` el tag que puede aparecer como si fuera un botón. Es perfecto paras documentar cosas que tienen que ver con shortcuts del teclado en tus READMEs/wikis.

Presionar <kbd>W</kbd> para subir, y <kbd>A</kbd> para ir abajo.
Puedes usar <kbd>ESC</kbd> para salir 🚀.

#### Visualización de códigos hexadecimales

Puedes usar colores hexadecimales con los backticks para poder renderizar el color. Simplemente escoges el color del hexadecimal y con los backticks poner el hexadecimal:

`` `#7AC96F` ``

![](https://i.imgur.com/H2JJW7n.gif)

#### Agregando resultados largos

Cuando lo vi no podía creer todas las capacidades que nos ofrece github, una vez mas podemos encontrar este util tip para agregar registros largos de resultados o errores detallados, y hacer un summary. Para esto es muy importante los tags `<details>` y `<summary>`

```
Listado de problemas
<details>
<summary>Click here to see terminal history + debug info</summary>
<pre>
488 cd /opt/LLL/controller/laser/
489 vi LLLSDLaserControl.c
490 make
491 make install
492 ./sanity_check
493 ./configure -o test.cfg
494 vi test.cfg
495 vi ~/last_will_and_testament.txt
496 cat /proc/meminfo
497 ps -a -x -u
498 kill -9 2207
499 kill 2208
500 ps -a -x -u
501 touch /opt/LLL/run/ok
502 LLLSDLaserControl -ok1
```

![](https://i.imgur.com/hUdJWWL.gif)

### Hacking Topics 🔎

El último mega pro tip que puedo decirles es que si sus proyectos ya están dentro de github, necesitan empezar hacer esto. Hay gente de todo el mundo que se dedica a estar buscando proyectos, lo hacen simplemente buscando por topics o tags como se logra esto. O incluso la gente de talento. 🧐. Primero algunos ejemplos de como buscar proyectos relaciones a estos temas.

- Todos los repositorios tageados con #covid-19 y #visualization:
  https://github.com/topics/covid-19?q=visualization
- Todos los repositorios tageados con #chrome-extension y #github:
  https://github.com/topics/chrome-extension?q=github
- Todos los repositorios tageados con #unity y #shader:
  https://github.com/topics/unity?q=shader
- Todos los repositorios tageados con #minecraft y #mod:
  https://github.com/topics/minecraft?q=mod

**Cómo se logra esto:**

Simplemente escribiendo despues de `https://github.com/topics/` y agregando el tag o topic categorizado y para agregar un segundo topic `?q=[TOPIC]`y así el resultado de la busqueda sera combinado.

#### Sabes como agregar los topics a tus proyectos o tagearlos? 🤯

![](https://i.imgur.com/V6p7owF.gif)

### No olvides seguirme en mis redes sociales:

Si necesitas ayuda o solo quieres conversar, búscame como [@alexinaraujo](https://twitter.com/alexinaraujo) en Twitter o sígueme en [GitHub](https://github.com/ealexisaraujo).
