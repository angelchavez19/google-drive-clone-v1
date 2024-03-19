from collections import namedtuple
from pydantic import BaseModel

from config import BASE_URL

UserIdNamePassword = namedtuple('UserIdNamePassword',
                                ('id', 'name', 'password'))

UserIdName = namedtuple('UserIdName', ('id', 'name'))

UserNamePassword = namedtuple('UserNamePassword',
                              ('name', 'password'))


class UserModelCreate(BaseModel):
    username: str
    password: str


class UserModelLogin(BaseModel):
    user_id: str
    password: str


def user_model_to_dict(user: UserIdName):
    base_data = f"{BASE_URL}api/data/"  # api/data/
    base_user = f"{base_data}{user.id}/"  # api/data/{user_id}
    icon = f"{base_data}icon/{user.id}"  # api/data/icon/{user_id}

    return {
        "id": user.id,
        "name": user.name,
        "icon": icon,
        "files": base_user + 'files',
        "trash": base_user + 'trash'
    }
