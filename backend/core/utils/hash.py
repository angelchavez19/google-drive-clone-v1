from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_hash(plain: str, hash: str):
    return pwd_context.verify(plain, hash)


def get_hash(plain: str):
    return pwd_context.hash(plain)
