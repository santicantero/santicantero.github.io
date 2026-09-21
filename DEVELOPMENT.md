# Portfolio · Santiago Cantero Torrents

Portfolio responsive en español, preparado para https://santicantero.github.io/. HTML semántico, CSS y JavaScript nativo; sin compilación ni dependencias de ejecución. Google Fonts es opcional: hay tipografías de respaldo.

## Verlo

Abre `index.html` en tu navegador o ejecuta `python3 -m http.server 8000` en esta carpeta y entra en http://localhost:8000. `santi.html` contiene una copia inicial para continuar desde la pestaña original del editor; el archivo principal de publicación es `index.html`. Edita este último y, si necesitas conservar ambas entradas, actualiza también la copia.

## Publicar en GitHub Pages

1. Sube `index.html`, `santi.html`, `styles.css`, `script.js`, `.nojekyll` y la carpeta `assets` al repositorio `santicantero/santicantero.github.io`.
2. En el repositorio, entra en **Settings → Pages**.
3. Selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. GitHub publicará la página en https://santicantero.github.io/.

## Proyectos

Los proyectos seleccionados son **Tienda online con chatbot** ([repositorio](https://github.com/santicantero/Tienda-Online-con-Chatbot)) ; **IntelliTask AI**, el TFM del máster de IA y Power Skills ([repositorio](https://github.com/santicantero/IntelliTask-AI)); y **Rise Together**, el TFG ([web pública](https://proyecto1.arenadaw.com.es/)). La tarjeta del TFG explica la responsabilidad en estructura, diseño y frontend, y la colaboración en parte del backend. También acredita a Rafael de la Fuente López, Alejandro Caballero Luque y Juan Galisteo Marqués. No se enlaza código del TFG porque no se ha facilitado un repositorio público.

Las imágenes se guardan localmente en `assets/`: `tienda-preview.html` muestra una vista estática de la interfaz real de AicorStore, generada mediante renderizado de sus componentes React originales (`Navbar` y `HeroSection`). Usa `tienda-preview.css`. La URL de la fotografía de portada del repositorio devuelve HTTP 404; la vista previa emplea un fondo degradado con los colores de AicorStore para evitar una imagen rota. El contenido, la navegación y la disposición proceden de los componentes originales. Se integra como una vista enmarcada, sin ejecutar JavaScript ni acceder al backend. No es una demo funcional: la tarjeta enlaza al código de GitHub. `tfg.png` es una captura de la web del TFG. La descripción funcional de la tienda se basa en su README; conserva el nombre del repositorio, sin atribuir funcionalidades del chatbot que no están documentadas. Para cambiar los proyectos, modifica sus tarjetas en `index.html` y sincroniza `santi.html`. No se consulta la API de GitHub al visitar el portfolio.

## Personalización

- Colores y fuentes: variables al comienzo de `styles.css`.
- Descripción, tecnologías, proyectos y contacto: `index.html`.
- Email del botón de copia: también en `script.js`.
- Animaciones respetan `prefers-reduced-motion`; navegación y proyectos funcionan sin JavaScript.
- Los enlaces `mailto:` abren el cliente de correo configurado por el visitante.

La publicación se realiza desde la rama `main` del repositorio `santicantero/santicantero.github.io`.

## IntelliTask AI y automatización

La tarjeta del TFM resume las funciones descritas en `DOCUMENTACION_TFM.md` del repositorio: transcripción y análisis de reuniones, propuestas de tareas revisables, Kanban, integración con calendario, análisis de Power Skills y coach de IA. `assets/intellitask-preview.html` y su CSS son un render estático de los componentes originales `Layout` y `Dashboard`, con un usuario genérico «Vista previa» y sin datos de reuniones, JavaScript ni acceso al backend.

AicorStore incluye una descripción ampliada del catálogo, carrito, pedidos, reseñas, cupones y administración. La presencia de chatbot y automatizaciones n8n ha sido indicada por Santiago; sus flujos específicos no aparecen en el código público revisado y no se les atribuyen tareas concretas. Ambas tarjetas enlazan al repositorio correspondiente de GitHub.
