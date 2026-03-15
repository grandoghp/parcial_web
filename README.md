# Parcial Web - Backend API

Esta es la API del proyecto parcial desarrollada en Node.js, Express y MongoDB. Permite la gestión de usuarios (registro y login con JWT) y la gestión de artículos (creación y consulta, rutas protegidas).

## Requisitos Previos

Asegúrate de tener instalado en tu máquina lo siguiente:
- [Node.js](https://nodejs.org/) (Versión 14 o superior)
- [MongoDB](https://www.mongodb.com/try/download/community) corriendo localmente en el puerto por defecto (`27017`).

## Instalación y Configuración

1. **Clona o descarga el repositorio** en tu entorno local.
2. **Instala las dependencias** abriendo una terminal en la carpeta principal del proyecto y ejecutando:
   ```bash
   npm install
   ```
3. **Inicia la base de datos**. Comprueba que el servicio local de MongoDB se encuentre activo (la API se conectará automáticamente a la base de datos `ejemploweb`).

## Ejecución del Servidor

Para iniciar el servidor, corre el siguiente comando en la raíz del proyecto:
```bash
node index.js
```
Verás por la consola un mensaje indicando `Conexion exitosa`, lo que significa que el servidor está escuchando en el puerto **1702** y se conectó correctamente a MongoDB.

## Tecnologías Utilizadas
- **Express**: Framework web para Node.js.
- **Mongoose**: Modelado de objetos para conectar con MongoDB.
- **Bcryptjs**: Encriptación de contraseñas de los usuarios.
- **JWT-Simple / Moment**: Generación y validación de tokens de sesión.
- **Body-Parser**: Manejo automático de cuerpo a formato JSON.

---
*Para instrucciones más detalladas sobre cómo probar cada endpoint en Postman u otra herramienta, revisa el [`MANUAL_DE_USUARIO.md`](./MANUAL_DE_USUARIO.md).*
