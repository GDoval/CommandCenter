/*

** Idea general **

Hacer un command center que nuclee todos los hobbys del usuario, sean estos mangas, anime, peliculas, musica, etc.
La idea sería ofrecer las siguientes funcionalidades:

*Tracking (por que capitulo vas de cada serie x ej)
*Lista de espera (cosas que todavia no se escucharon/vieron etc)
*Recomendaciones en base a autor, generos, estilos, etc
*Galeria de imagenes


**Lenguajes**

*Front-end:  Bootstrap + HTML + React + Javacript
*Back-end:  PHP + Slim


**Pasos a seguir**

1) Armar un front para la categoria anime -> Hecho
    1.a) Armar un div que tenga 4 imagenes de largo para el listado -> Hecho
    1.b) Agregar texto a cada imagen -> Hecho
    1.c) Acomodar bien el div con las imagenes -> Hecho
    
2) Traer informacion desde el backend y renderizarla -> Hecho
    2.a) Traer la información con la que popular el listado desde una base de datos -> Hecho
    2.b) Encodear el retorno de la db en un JSON y devolover eso al AJAX -> Hecho
    2.c) Renderizar el div usando la informacion que volvio de la base de datos -> Hecho
    2.d) Generar los ROW de React dinámicamente a partir de la cantidad de imagenes traidas dsde la DB -> Hecho

3) Generar umn formulario para dar de alta nuevos animes
    3.a) Guardar dentro del proyecto las imagenes (dejar de guardar links de internet) -> Pendiente
    3.b) Hacer el form para guardar la info en la DB -> Pendiente
    3.c) Usar Puppeter o CURL para buscar informacion (sinopsis, cant de capitulos etc) sobre la serie en alguna Wiki -> Pendiente


*/
