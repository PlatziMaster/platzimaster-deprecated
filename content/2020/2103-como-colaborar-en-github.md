---
title: Cómo colaborar en projectos usando Git y GitHub (parte 1)
date: "2020-03-21T21:01:00.000Z"
description: "Cómo colaborar en projectos usando Git and GitHub"
author: Fernando Torres
email: fertorresmx@gmail.com
platziUser: fertorresmx
---

Bien, terminaste la última versión del [Curso Profesional de Git y GitHub en Platzi](https://platzi.com/cursos/git-github/) y a pesar de haber creado algunos repositorios y subir commits en tu perfil no estás seguro de cómo colaborar en los repos de otros. Bueno, espero te pueda ayudar aquí, en mi primer post.

Ha llegado el momento de utilizar tus conocimientos, apoyarte en la comunidad y colaborar en el **blog de PlatziMaster** (o cualquier otro repo de tu elección) pues te explicaré paso a paso lo que debes hacer para hacer un fork y enviar tus PullRequest para éste repo.

##Empecemos...

Antes que nada, suponemos que ya tienes una cuenta de GitHub, tu terminal lista y ya tienes Git instalado y configurado. Si no es así, corre al [Curso de Prework: Buenas Prácticas y Entorno de Desarrollo](https://platzi.com/cursos/prework/) para realizar dichas tareas.

Una vez listo y como primer paso, abre tu terminal favorita, y en la ruta de tu elección, crea una carpeta nueva. Puedes omitir éste paso, pues si sigues las instrucciones siguientes, se creará una carpeta adicional con el nombre del repositorio.

Ahora, visita la liga del repositorio en el que deseas colaborar y presiona el botón **Fork**

![Haz Fork...](https://i.imgur.com/5aWe002.png)

GitHub te preguntará en qué lugar deseas colocar el fork (en caso de tener organizaciones, tendrás que elegir una opción como en éste ejemplo):

![Elegir destino del fork](https://i.imgur.com/Rf2Ms3s.png)

Después de unos segundos...
![Forking...](https://i.imgur.com/00DukJG.png)

...GitHub terminará de realizar el Fork y te mostrará la página de tu nuevo repositorio.
![Imgur](https://i.imgur.com/okkgJGP.png)

Copia la ruta que se muestra en el botón **Clone or download** de tu nuevo repositorio. Si tienes configuradas tus llaves de GitHub en tu equipo y terminal, usa la opción de **Clone with SSH**. ¿Recuerdas que te mencioné el curso de PreWork? Si te faltan las llaves, date una vuelta al curso y regresa más tarde por acá ;)

![Imgur](https://i.imgur.com/dLIoXDK.png)

Ahora, en tu terminal y en el folder o ruta de tu elección, utiliza el siguiente comando...
~~~
git clone <link de tu nuevo repo>
~~~
...como se muestra en el ejemplo de mi terminal:
![Imgur](https://i.imgur.com/WuTC8GN.png)


Ahora visita la página del repositorio original (no el tuyo, sino el original de PlatziMaster) y nuevamente copia la ruta que se muestra en el botón **Clone or download** y utiliza el siguiente comando para agregar la referencia **upstream**

~~~
git remote add upstream <link del repo original>
~~~
Verificamos que las referencias a los repositorios estén correctas con el comando
~~~
git remote -v
~~~
![Imgur](https://i.imgur.com/FLpNcI2.png)

Ahora, atención al siguiente paso. Necesitas realizar un *git pull*, pero cuidando en qué rama te encuentras. En éste ejemplo, al clonar el repo nos muestra que nos encontramos en la rama **develop**, por lo que para el siguiente comando, necesitas moverte a la rama **master** con *git checkout*
~~~
git checkout master
~~~
Y una vez en la rama master, hacemos *pull* así:
~~~
git pull upstream master
~~~
![Imgur](https://i.imgur.com/uMlv9pM.png)

¡Y lista la configuración de tu repo en terminal! Ahora muevete a la rama *develop*, abre el editor de tu preferencia y empieza a modificar archivos y realizar algunos commits.

Para este repo en particular, puedes crear un nuevo blogpost añadiendo un archivo .md con las instrucciones que se indican en el README y enviarlo con un Pull Request, lo cual veremos a detalle en la parte 2 (proximamente...) de este blogpost.

¿Tuviste algún problema? ¿Tienes una pregunta o comentario? Búscame como @fertorresmx en Slack (Fer Torres), [Twitter](https://twitter.com/fertorresmx),  [correo](mailto:contacto@fertorresmx.com), o en el sitio [fertorresmx.com](http://www.fertorresmx.com) ¡Será un placer ayudarte!