---
title: 'Mejorar nuestro HTML y CSS con EMMET'
date: '2020-03-21T14:54:00.284Z'
description: 'Usando emmet en el dia al dia'
author: Alexis Araujo
email: ala1289@gmail.com
platziUser: alexisaraujo
---

Se que muchos de ustedes se pasan mucho tiempo escribiendo HTML y CSS, pero alguna vez te has preguntado cómo podríamos mejorar nuestra productividad al maquetar muchos mas rapido, ps bueno, es algo que hoy les enseñare con [EMMET](https://emmet.io/).

Emmet es un complemento para nuestros editores favoritos como VSCode, Sublime text, Atom, Notepad++, etc. Nos permitirá la codificación y edicion a alta velocidad en HTML, CSS y otros formatos de código estructurado a través de asistencia de contenido. Emmet te permite escribir menos código. Nota: En VSCode ya viene casi instalado Emmet en algunos otros editores tendríamos que descargar el plugin e instalarlo desde [aqui](https://emmet.io/download/).

**También en los ejemplos que les mostrare tienen que guardar su archivo que esten escribiendo con la extension HTML.** Para activar estos nuevos superpoderes que tendrán 💪🏽.

Y hoy les enseño algunos comandos básicos pero poderosos.

#### Template Básico HTML

En lugar de escribir los tags html, header, title, body, uno por uno, podríamos simplificando solo escribiendo `!` y enter.

![](https://i.imgur.com/e0tqirZ.gif)

### 🤯 Si lo se, se como se empieza a sentir esa sensación, pero esto significa que acabas de aprender algo nuevo.

#### Completar un tag html

Si tu quieres hacer un h1 en el lugar de escribir `<h1></h1>`, tu solamente podrías escribir la palabra `h1` y enter, emmet debe crear y cerrar el tag. Tu puedes hacer esto para todos los HTML tags en lugar de escribirlos cada uno. A poco no suena genial.

![](https://i.imgur.com/KgHmfsl.gif)

#### Tags con clases

¿Todavia hay mas alexis? 🤔. Emmet nos ofrece todavía más, si queremos crear una clase dentro de un div podemos escribir `.myDiv` y enter. Esto crea un div con una clase de nombre myDiv. Por default cualquier cosa que escribamos despues del **(.)** creará una clase para un div. Tu puedes también escribir el **nombreTag.nombreClase** y creará la clase para el tag que especifiques.

![](https://i.imgur.com/5jkQKwM.gif)

#### Más de una clase dentro del mismo elemento

Si quisieras agregar más clases dentro de los tags solo tienes que crear `tag.NombreClase1.NombreClase2` y emmet creara el tag con las dos o más clases que hayamos definido.

![](https://i.imgur.com/i5yHsXw.gif)

#### Tags con id

A veces queremos darle un id a nuestros divs. Tu puedes hacerlo fácilmente con solo presionar `#id`. Emmet crea por default un div con el nombre del id. Para crear con algún tag es lo mismo `h1.#NombreId`.

![](https://i.imgur.com/mnqFjeQ.gif)

Si tu quieres crear dos clases y un id al mismo tiempo, puedes simplificarlo escribiendo `clase1.clase2#miId`. Se crea un div con dos clases y un div.

#### Texto dentro de un elemento

Siempre escribimos texto de nuestros elementos usando emmet solo tendríamos que escribir `h1{Esto es un header}`presionar enter y emmet hace el resto por ti.

Al igual que un simple `lorem` siempre usamos texto dummy cuando desarrollamos. Con tan solo escribir `lorem` se genera un texto random.

![](https://i.imgur.com/UUeJywt.gif)

#### Más shortcuts avanzados

Si quisiéramos crear un `form` con un input de texto y un input de submit lo que tendríamos que escribir sería: `form:post>input:text+input:s``

![](https://i.imgur.com/3NNSh0A.gif)

Estos son los shortcuts que utilizo. Pero podras encontrar mas shortcuts como estos para html y css [aqui](https://docs.emmet.io/cheat-sheet/)

Si necesitas ayuda o solo quieres conversar, búscame como [@alexinaraujo](https://twitter.com/alexinaraujo) en Twitter o sígueme en [GitHub](https://github.com/ealexisaraujo).
