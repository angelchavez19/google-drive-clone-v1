# google-drive-clone-v1

A minimalist clone of Google Drive

- [Documentation in Spanish](./docs/README_es.md)
- [Demo](https://youtu.be/cA-ixmOaHZY)

## Setting up the project locally

- First, clone the project using git:

```bash
git clone https://github.com/angelchavez19/google-drive-clone-v1.git
```

### Setting up the Backend

- Move to the backend folder
- Install the libraries:

```bash
pip install -r requirements.txt
```

- Create the environment variables file, and add the following (you can modify it):

```
PATH_DB: str = "db.sqlite3"

BASE_URL: str = "http://localhost:8000/"

IMAGE_EXTENSIONS: list = ["jpeg", "jpg", "png", "svg", "webp"]

```

- Initialize the database (in my case, I use sqlite3, but you can configure it to work with any other database):

```bash
python main.py create_users
```

- Finally, run the project:

```bash
python main.py
```

### Setting up the Backend

- You can modify the interface, for this install the libraries:

```bash
npm i
```

- To put it in development mode, in the file src/config/api.ts, uncomment the first line and comment the third:

  - Before:

  ```
  // const base = 'http://localhost:8000/api/' // Development

  const base = '/api/' // Deploy
  ```

  - After:

  ```
  const base = 'http://localhost:8000/api/' // Development

  // const base = '/api/' // Deploy
  ```

- Then you can start the development server by running:

```bash
npm run dev
```

- You may not see the changes reflected, as the backend has authentication, so you will need to build the application and move the generated files to the backend. This is a somewhat slow and tedious process, so you can simply run the build.py script to do this automatically:

```bash
python build.py
```
