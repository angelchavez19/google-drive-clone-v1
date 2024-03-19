# google-drive-clone-v1

Un clon de google drive minimalista

- [Documentación en ingles](../README.md)
- [Demo](https://youtu.be/cA-ixmOaHZY)

## Configurar Proyecto en local

- Primero clona el proyecto usando git:

```bash
git clone https://github.com/angelchavez19/google-drive-clone-v1.git
```

### Configurar el Backend

- Muevete a la carpeta backend
- Instala las librerias:

```bash
pip install -r requirements.txt
```

- Crea el archivo de variables de entorno, y agrega lo siguiente (puedes modificarlo):

```
PATH_DB: str = "db.sqlite3"

BASE_URL: str = "http://localhost:8000/"

IMAGE_EXTENSIONS: list = ["jpeg", "jpg", "png", "svg", "webp"]

```

- Inicializa la base de datos (en mi caso uso sqlite3, pero puedes configurarlo para que funcione con cualquier otra base de datos):

```bash
python main.py create_users
```

- Por ultimo, ejecuta el proyecto:

```bash
python main.py
```

### Configurar el Backend

- Puedes modificar la interfaz, para ello instala las librerias:

```bash
npm i
```

- Para ponerlo en modo desarrollo, en el archivo src/config/api.ts, descomente la primera linea y comente la tercera:

  - Antes:

  ```
  // const base = 'http://localhost:8000/api/' // Development

  const base = '/api/' // Deploy
  ```

  - Despues:

  ```
  const base = 'http://localhost:8000/api/' // Development

  // const base = '/api/' // Deploy
  ```

- Luego puede iniciar el servidor de desarrollo ejecutando:

```bash
npm run dev
```

- Talvez no vea los cambios reflejados, ya que el backend tiene autenticación, por lo que deberá hacer el build de la aplicación y mover los archivos generados al backend. Esto es un proceso algo tardado y tedioso, asi que puede simplemente ejecutar el script build.py para hacer esto automaticamente:

```bash
python build.py
```
