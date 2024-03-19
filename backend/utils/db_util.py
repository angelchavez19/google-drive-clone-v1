import sqlite3


def open_db(path: str):
    def decorator(function):
        def wrapper(*args, **kwars):
            conn = sqlite3.connect(path)
            cursor = conn.cursor()
            result = function(conn, cursor, *args, **kwars)
            conn.commit()
            conn.close()
            return result
        return wrapper
    return decorator
