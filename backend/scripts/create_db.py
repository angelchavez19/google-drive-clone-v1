import sqlite3

from utils.db_util import open_db
from config import PATH_DB


@open_db(PATH_DB)
def create_db(_: sqlite3.Connection, cursor: sqlite3.Cursor):
    cursor.execute(
        """CREATE TABLE IF NOT EXISTS users (
    id CHARACTER(36) PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    token CHARACTER(43)
    );""")
