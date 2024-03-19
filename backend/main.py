import sys
import uvicorn

from core.routes import main
from scripts.create_db import create_db

app = main()

if __name__ == '__main__':
    len_args = len(sys.argv)

    if len_args == 1:
        uvicorn.run(
            app='main:app',
            reload=True,
            host='localhost',
            port=8000
        )
    elif sys.argv[1] == 'create_users':
        create_db()
