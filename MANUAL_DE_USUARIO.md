# Manual de Usuario - API Parcial Web

Este documento describe de manera clara y directa cómo consumir y probar cada uno de los endpoints de la aplicación, pensado para comprobar su correcto funcionamiento usando una herramienta de peticiones HTTP como **Postman**, **Insomnia** o similar.

El servidor corre por defecto en `http://localhost:1702/api`.

---

## 1. Registro de Usuario

Lo primero que debes hacer es crear un usuario en el sistema para poder obtener credenciales válidas antes de navegar en otras rutas de la API.

- **Endpoint:** `POST /api/usuario/registrar`
- **Ruta Completa:** `http://localhost:1702/api/usuario/registrar`
- **Body (`application/json`):**
  Asegúrate de enviar los datos en formato JSON crudo (raw).
  ```json
  {
      "nombre": "Profesor",
      "email": "profesor@universidad.edu.co",
      "password": "mi_password_seguro"
  }
  ```
*(Revisa los campos exactos; por regla general un modelo de usuario necesita un `email`/`correo`, `password` y tal vez un `nombre`)*

## 2. Iniciar Sesión (Login)

Una vez el usuario existe en la base de datos de MongoDB, inicia sesión para obtener el **Token de Autorización (JWT)**.

- **Endpoint:** `POST /api/usuario/login`
- **Ruta Completa:** `http://localhost:1702/api/usuario/login`
- **Body (`application/json`):**
  Usando las credenciales registradas arriba:
  ```json
  {
      "email": "profesor@universidad.edu.co",
      "password": "mi_password_seguro"
  }
  ```

**Importante:** La API te retornará una respuesta que incluye un `token` (una cadena larga de texto y números). Cópialo completo, ya que lo requerirás para los siguientes pasos.

## 3. Crear un Artículo (Ruta Protegida)

- **Endpoint:** `POST /api/articulo`
- **Ruta Completa:** `http://localhost:1702/api/articulo`
- **Headers Requeridos:**
  Ve a la pestaña de "Headers" en Postman y añade lo siguiente:
  - **Key:** `Authorization` (o el nombre del header que utilices en tu aplicación para validarlo)
  - **Value:** `<Pega aquí el Token de Autorización obtenido en el paso 2>`
    *(A veces el token requiere llevar formato "Bearer <Token_Aqui>")*

- **Body (`application/json`):**
  Agrega los datos de prueba del artículo. Por ejemplo:
  ```json
  {
      "titulo": "Implementación de Node.js en 2024",
      "contenido": "Cuerpo o texto del artículo...",
      "autor": "Simón"
  }
  ```

## 4. Consultar Artículos (Ruta Protegida)

Este endpoint devuelve un JSON listando los artículos que agregaste, siempre y cuando mandes un token JWT válido.

- **Endpoint:** `GET /api/articulos`
- **Ruta Completa:** `http://localhost:1702/api/articulos`
- **Headers Requeridos:**
  - **Key:** `Authorization`
  - **Value:** `<Pega aquí el Token de Autorización obtenido en el paso 2>`

Dado que es una petición GET, no requiere el envío de datos en la pestaña de `Body`. Al enviar la petición, recibirás un array/arreglo con todos los documentos recuperados de tu base de datos de MongoDB.

---
### Notas Finales para el Profesor
- Asegurar que MongoDB (`mongod`) esté corriendo antes de ejecutar Node.
- Si ves un error de "Unauthorized" (No autorizado) en crear/consultar artículos, el token expiro (por el `moment` o tiempo preestablecido en su logica) o el campo en los headers no lleva la forma correcta esperada.
