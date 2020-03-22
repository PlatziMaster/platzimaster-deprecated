---
title: Cómo colaborar en projectos usando Git y GitHub (parte 2)
date: "2020-03-22T06:23:00.000Z"
description: "Cómo colaborar en projectos usando Git and GitHub, parte 2"
author: Fernando Torres
email: fertorresmx@gmail.com
platziUser: fertorresmx
---

##Parte 2, Cómo colaborar en projectos usando Git y GitHub

Ésta es la segunda parte del post [Cómo colaborar en projectos usando Git y GitHub, parte 1](./2103-como-colaborar-en-github/). 
Si no has visto esta primera parte, por favor revisala y después regresas a este post y podrás continuar.

En esa primera parte, habíamos dejado lista la terminal y la configuración de nuestros repositorios **ORIGIN** y **UPSTREAM**; ésto lo podemos comprobar con el siguiente comando
~~~
git remote -v
~~~
el cual nos mostrará las respectivas referencias a los repos de GitHub. Si ésta parte te causa dudas, te recomiendo revisar el video [Repositorios remotos forked](https://platzi.com/clases/45-git-github-2016/4086-repositorios-remotos-forked/) o los últimos cursos con Leonidas y Freddier.

En tu equipo debe visualizarse algo como lo siguiente:
~~~
origin	git@github.com:FernandoTorresL/platzimaster.github.io.git (fetch)
origin	git@github.com:FernandoTorresL/platzimaster.github.io.git (push)
upstream	git@github.com:PlatziMaster/platzimaster.github.io.git (fetch)
upstream	git@github.com:PlatziMaster/platzimaster.github.io.git (push)
~~~

Ahora, me moveré a la rama **develop** porque en este projecto en particular, los posts nuevos deben publicarse en esta rama como se especifíca [en el README.md del projecto, sección blogpost](https://github.com/PlatziMaster/platzimaster.github.io#blogpost). 
~~~
git checkout develop
~~~
> Si vas a colaborar en otro projecto, tal vez tengan instrucciones diferentes al respecto; deberás revisarlas.

Tal vez ha pasado algún tiempo entre el momento que se clonó el repositorio y tuvimos la última versión de los archivos, por lo que es buena práctica verificarlo y traer los últimos commits a nuestro projecto local. Ésto lo logramos con el comando
~~~
git pull upstream develop
~~~

![Imgur](https://i.imgur.com/9Ry0lU3.png)
> Recuerda, si estás colaborando en otro projecto, podrías usar otra rama distinta a *develop*

Git pull nos traerá los ultimos commits. En este ejemplo, puedes ver cómo mi rama **develop** está *"atrasada"* por tres commits como se muestra en mi terminal
> En este caso, mi terminal está configurada para mostrar esta información junto con el path; revisa la parte de FAQ al final de este post para mayor información

Otra forma de verificarlo si tu terminal no se ve como la mía es con **git log**
![Imgur](https://i.imgur.com/ElJrOOd.png)

![Imgur](https://i.imgur.com/5AKkvCG.png)
Tambíen en GitHub, en tu repositorio fork, aparece la leyenda **This branch is 3 commits behing PlatziMaster:develop.**

Y con **git status** se muestra así
![Imgur](https://i.imgur.com/2A8l1zB.png)

Una vez confirmaste que la rama **origin/develop** está tres commits atrás de la rama **upstream/develop**, puedo actualizarla con **git push**, lo cual *'empujará'* los últimos commits a mi repo local
~~~
git push
~~~

Y al revisar nuevamente el log, ya tenemos los últimos commits.
![Imgur](https://i.imgur.com/QvIcFBK.png)

Es en éste momento donde abres el editor de tu preferencia y creas/modificas los archivos necesarios. En el caso de el **Blog de PlatziMaster** se debe crear un archivo .md nuevo para cada post.

Una vez modificados o incluidos los archivos necesarios, creas uno o varios commits...
~~~
git add nuevo_blogpost.md
git commit -m "Añadí un nuevo post al Blog de Platzi"
~~~
...y los subes a tu GitHub
~~~
git push
~~~




¿Tuviste algún problema? ¿Tienes una pregunta o comentario? Búscame como @fertorresmx en Slack (Fer Torres), [Twitter](https://twitter.com/fertorresmx),  [correo](mailto:contacto@fertorresmx.com), o en el sitio [fertorresmx.com](http://www.fertorresmx.com) ¡Será un placer ayudarte!