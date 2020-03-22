---
title: Cómo colaborar en projectos usando Git y GitHub (parte 1)
date: "2020-03-21T10:55:00.000Z"
description: "Aprende a configurar git y crear pull request en GitHub."
author: Fernando Torres
email: fertorresmx@gmail.com
platziUser: fertorresmx
---

Bien, terminaste la última versión del [Curso Profesional de Git y GitHub en Platzi](https://platzi.com/cursos/git-github/) y a pesar de haber creado algunos repositorios y subir commits en tu perfil no estás seguro de cómo colaborar en los repos de otros. Bueno, espero te pueda ayudar aquí, en mi primer post.

Ha llegado el momento de utilizar tus conocimientos, apoyarte en la comunidad y colaborar en el **Blog de PlatziMaster** (o cualquier otro repo de tu elección) pues te explicaré paso a paso lo que debes hacer para hacer un fork y enviar tus Pull Request para éste repo.

##Empecemos...

Antes que nada, suponemos que ya tienes una cuenta de GitHub, tu terminal lista y ya tienes Git instalado y configurado. Si no es así, corre al [Curso de Prework: Buenas Prácticas y Entorno de Desarrollo](https://platzi.com/cursos/prework/) para realizar dichas tareas.

Una vez listo y como primer paso, abre tu terminal favorita, y en la ruta de tu elección, crea una carpeta nueva. Puedes omitir éste paso, pues si sigues las instrucciones siguientes, se creará una carpeta adicional con el nombre del repositorio.

Ahora, visita la liga del repositorio en el que deseas colaborar y presiona el botón **Fork**

![Haz Fork...](https://i.imgur.com/5aWe002.png)

GitHub te preguntará en qué lugar deseas colocar el fork (en caso de tener organizaciones, tendrás que elegir una opción)

![Elegir destino del fork](https://i.imgur.com/Rf2Ms3s.png)

Después de unos segundos...
![Forking...](https://i.imgur.com/00DukJG.png)

...GitHub terminará de realizar el fork y te mostrará la página de tu nuevo repositorio.
![Fork](https://i.imgur.com/okkgJGP.png)

### Clonando el repositorio

Copia la ruta que se muestra en el botón **Clone or download** de tu nuevo repositorio. Si tienes configuradas tus llaves de GitHub en tu equipo y terminal, usa la opción de **Clone with SSH**. ¿Recuerdas que te mencioné el curso de PreWork? Si te faltan las llaves, date una vuelta al curso y regresa más tarde por acá ;)

![Clone](https://i.imgur.com/dLIoXDK.png)

Ahora, en tu terminal y en el folder o ruta de tu elección, utiliza el siguiente comando...
~~~
git clone <link de tu nuevo repo>
~~~
...como se muestra en el ejemplo de mi terminal:
![git clone](https://i.imgur.com/WuTC8GN.png)


### Agrega upstream

Ahora visita la página del repositorio original (no el tuyo, sino el original de PlatziMaster) y nuevamente copia la ruta que se muestra en el botón **Clone or download** y utiliza el siguiente comando para agregar la referencia **upstream**

~~~
git remote add upstream <link del repo original>
~~~
Verificamos que las referencias a los repositorios estén correctas con el comando
~~~
git remote -v
~~~
![git remote](https://i.imgur.com/FLpNcI2.png)

> Si ésta parte te causa dudas, te recomiendo revisar el video [Repositorios remotos forked](https://platzi.com/clases/45-git-github-2016/4086-repositorios-remotos-forked/) o los últimos cursos con Leonidas y Freddier.

Ahora, atención al siguiente paso. Necesitas realizar un *git pull*, pero cuidando en qué rama te encuentras. En éste ejemplo, al clonar el repo nos muestra que nos encontramos en la rama **develop**
~~~
git pull upstream develop
~~~
> En la primer versión de éste post coloqué incorrectamente la instrucción *git pull upstream master*


¡Y lista la configuración de tus repositorios en terminal! Ahora pasa por favor a la [segunda parte de este post](../2103-como-colaborar-en-github-parte2/) para ver los detalles de cómo crear el **Pull Request**


----------
¿Tuviste algún problema? ¿Tienes una pregunta o comentario? Búscame como @fertorresmx en Slack (Fer Torres), [Twitter](https://twitter.com/fertorresmx),  [correo](mailto:contacto@fertorresmx.com), o en el sitio [fertorresmx.com](http://www.fertorresmx.com) ¡Será un placer ayudarte!