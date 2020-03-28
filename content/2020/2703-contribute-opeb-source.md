---
title: Cómo colaborar en projectos open source
date: '2020-03-19T19:12:03.284Z'
description: 'Contribuir a proyectos Librerías'
author: Jefferson Aguilar
email: jeffersonaguilar@outlook.com
platziUser: jeff-js
---


Interesado(a) en contribuir en proyectos open source "Librerías"?, continua leyendo y te cuento como fue mi primera contribución 😄

Primero debes estar familiarizado con cómo funciona el mundo de las librerías de *npm o yarn*, este sitio de paquetes es mi día a día porque para que inventar la rueda si alguien ya la creó?

Te recomiendo seguir el curso de [Gestión de Dependencias y Paquetes con NPM](https://platzi.com/npm/)

Yo inicie por contribuir en este proyecto -> [react-mailchimp-form](https://github.com/gndx/react-mailchimp-form/)

Luego realice un Fork a [mi cuenta de GitHub](https://github.com/jeff-js), clonarlo en mi equipo, y por último abrirlo con mi editor preferido [VSCode](https://code.visualstudio.com/)

Al abrirlo wow muy genial, voy a realizar los pasos de rutina como todo proyecto de Javascript

 - Lee muy detenidamente el **README** es muy importante sabras cosas útiles y entenderás mejor el proyecto.
 - Recuerda también leer el **Código de Conducta** (Si lo tiene, no todos tienen este archivo).
 - Abrir el archivo *packege.json*, para analizar qué dependencias tienen, cuales son los scripts, etc.
 - Analizar la estructura de carpetas del proyecto recuerda que es muy importante ya que debes seguir con la estructura de directorios y archivos

Ya analizando el proyecto veo que es un proyecto de React, pero noto algo extraño no tiene un **index.html** rayos ahora como ejecuto este proyecto, Mi primer Bloqueo 😞

Recordé que en el curso de [Gestión de Dependencias y Paquetes con NPM](https://platzi.com/npm/), no todos los proyectos al momento de ejecutar muestran algo visual, entonces qué debo hacer?, esta es una muy buena pregunta, ya que este proyecto es una librería y es necesario tener un proyecto de prueba que no debe estar en este repositorio.

Esto se puede solucionar de 2 formas:

 1. Crear una aplicación con el comando `create-react-app`

~~~
npx create-react-app test-mailchimp
cd test-mailchimp
npm start
~~~

2. Utilizar un proyecto base [react-base](https://github.com/gndx/react-base) (Esta fue la que seleccioné)

Ahora el segundo problema... Como instalo esta librería? con `npm i react-mailchimp-form` ? la respuesta es incorrecta, ya que al instalarla con el anterior comando descarga la librería desde [https://www.npmjs.com/package/react-mailchimp-form](https://www.npmjs.com/package/react-mailchimp-form) , entonces como instalo una libreria local?, ah recordé que es posible instalar un paquete local 😄, de la siguiente manera:
~~~
npm i ../react-mailchimp-form
~~~
Con este comando puedo instalar una librería desde una carpeta local 😄

voy a verificar en el *package.json* como quedo la instalación del paquete

~~~
"react-mailchimp-form":  "file:../react-mailchimp-form"
~~~

Listo 😄 manos a la obra... intentemos utilizar esta librería...

En el archivo `App.jsx` importemos la librería y luego usarla.
~~~
import React from  'react';
import  '../styles/components/App.styl';
import Mailchimp from  'react-mailchimp-form';
const App =  ()  => (
	<>
		<h1>Test Mailchimp</h1>
		<Mailchimp
			action='https://XXXXXX.XX.list-manage.com/subscribe/post?u=XXXXXXX&amp;id=XXXXXXX'
			fields={[
				{
					name:  'EMAIL',
					placeholder:  'Email',
					type:  'text',
					required:  true
				}
			]}
		/>
	</>
);
export  default App;
~~~

Ya que tengo listo mi ambiente de DEV, hora de codear, pero primero que quiero hacer, agregar una nueva funcionalidad? o corregir algún Bug?, yo opte por solucionar un error, ingrese al repositorio y  [ver qué errores han reportado](https://github.com/gndx/react-mailchimp-form/issues), seleccionar uno, y manos a la obra, primero es intentar replicar el error porque como crees que vamos a solucionar el bug sin saber cual es la razón del fallo, ya entendiendo cual es el bug, codear para solucionarlo 😄

Terminamos 😄 ahora la parte más importante:

 1. Crear el commit, importante dejar el comentario breve pero conciso que fue lo que se solucionó.
 2. Crear el  [Pull Request](https://github.com/gndx/react-mailchimp-form/pull/23)

Genial, he realizado mi primera contribución 😄

Espero que este post te halla servido mucho.



**Jefferson Aguilar**  
[Slack](https://platzimaster.slack.com/archives/DSYH3AJMU)  
[Mi Blog](https://jeff-js.dev/) -> En Construcción  
[GitHub](https://github.com/jeff-js)  
[Linkedin](https://www.linkedin.com/in/jeffersonaguilar/)  
[Facebook](https://www.facebook.com/jeferson.ag)