import re


def validate_user(user: str):
    return 3 <= len(user) <= 30


def validate_password(password: str):
    return bool(re.match(
        pattern=r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{12,}$',
        string=password))
