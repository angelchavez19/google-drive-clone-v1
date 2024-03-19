import sqlite3

from core.models import users as usersModel
from utils.db_util import open_db

from config import PATH_DB

TABLE = 'users'

# USERS


@open_db(PATH_DB)
def get_all_users(_: sqlite3.Connection, cursor: sqlite3.Cursor):
    users = cursor.execute(
        f"SELECT id, name, password FROM {TABLE};").fetchall()

    return [usersModel.UserIdNamePassword(*user) for user in users]


@open_db(PATH_DB)
def get_user(_: sqlite3.Connection, cursor: sqlite3.Cursor, user_id: str):
    user = cursor.execute(f"SELECT name, password FROM {TABLE} WHERE id=?",
                          (user_id,)).fetchone()

    return usersModel.UserNamePassword(*user)


@open_db(PATH_DB)
def insert_user(_: sqlite3.Connection, cursor: sqlite3.Cursor,
                new_user: usersModel.UserIdNamePassword):
    cursor.execute(
        f"INSERT INTO {TABLE} (id, name, password) VALUES (?, ?, ?);",
        new_user)


@open_db(PATH_DB)
def exist_user(_: sqlite3.Connection, cursor: sqlite3.Cursor,
               field: str, value: str):
    user = cursor.execute(f"SELECT id FROM {TABLE} WHERE {field}=?;",
                          (value,)).fetchone()
    return user is not None


@open_db(PATH_DB)
def delete_user(_: sqlite3.Connection, cursor: sqlite3.Cursor, user_id: str):
    cursor.execute(f"DELETE FROM {TABLE} WHERE id=?;", (user_id,))

# SESSION


@open_db(PATH_DB)
def get_user_by_token(_: sqlite3.Connection, cursor: sqlite3.Cursor,
                      token: str):
    user = cursor.execute(
        f"SELECT id, name FROM {TABLE} WHERE token=?",
        (token,)).fetchone()

    return usersModel.UserIdName(*user)


@open_db(PATH_DB)
def add_session_id(_: sqlite3.Connection, cursor: sqlite3.Cursor,
                   user_id: str, token: str):
    cursor.execute(f"UPDATE {TABLE} SET token=? WHERE id=?",
                   (token, user_id))


@open_db(PATH_DB)
def delete_session_id(_: sqlite3.Connection, cursor: sqlite3.Cursor,
                      user_id: str):
    cursor.execute(f"UPDATE {TABLE} SET token='' WHERE id=?",
                   (user_id,))
