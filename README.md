# UNIVERSIDAD DE CARTAGENA
## INGENIERÍA DE SOFTWARE - PROGRAMACIÓN ORIENTADA A OBJETOS
### TRABAJO COLABORATIVO CONTEXTUALIZADO

## Sistema Compra de productos

## Descripción

Se desarrollará un sistema que permitirá comprar productos, el cual estará ligado a un stock. Se podrá hacer seguimiento a la compra de dicho producto, el cual tendrá un número de factura unido a la compra, la cual puede tener uno o varios productos.

## Requisitos

Para usar este proyecto, necesitas tener instalado Node.js en tu PC. Además, se recomienda usar PNPM como administrador de paquetes, ya que fue con el que se trabajó en el proyecto. Puedes instalar PNPM globalmente en tu PC utilizando el siguiente comando:
```bash 
npm install -g pnpm
```


## Cómo Empezar

Sigue estos pasos para comenzar con el proyecto:

1. Clona este repositorio.
2. Instala las dependencias del proyecto con el siguiente comando `pnpm install`: 
4. Crea en la raiz del proyecto el archivo .env con las variables requeridas, si no sabes cuales son en el archivo .env.example del proyecto encuentras los nombres
   


## Uso

Puedes utilizar los siguientes comandos de npm para trabajar con el proyecto:

- `pnpm build`: Compila el proyecto TypeScript.
- `pnpm dev`: Inicia el servidor en modo de desarrollo utilizando `ts-node-dev`.
- `pnpm deploy`: Realiza un commit y push al repositorio de Heroku.
- `pnpm start`: Inicia el servidor Node.js después de compilar el proyecto.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) - v8.4.0
- [bcrypt](https://www.npmjs.com/package/bcrypt) - v5.1.1
- [dotenv](https://www.npmjs.com/package/dotenv) - v16.3.1
- [fastify](https://www.npmjs.com/package/fastify) - v4.24.3
- [mongoose](https://www.npmjs.com/package/mongoose) - v7.6.3
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - v2.0.0
- [typescript](https://www.npmjs.com/package/typescript) - v5.2.2
- [uuid](https://www.npmjs.com/package/uuid) - v9.0.1

## Dependencias de Desarrollo

El proyecto utiliza las siguientes dependencias de desarrollo:

- [@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt) - v5.0.1
- [@types/uuid](https://www.npmjs.com/package/@types/uuid) - v9.0.6

## Licencia

Este proyecto está bajo la Licencia [ISC](LICENSE).
