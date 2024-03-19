from fastapi import APIRouter
from os.path import join
from shutil import rmtree

from core.database import users as usersDB
from core.models.users import UserIdName
from core.utils import response

from .protected import protected_route

users_private_route = APIRouter(
    prefix='/api/users',
    tags=['Users']
)


@users_private_route.delete('/{user_id}')
@protected_route
def delete_user(user: UserIdName):
    if not usersDB.exist_user(field='id', value=user.id):
        return response.JsonResponse404('The user does not exist')

    usersDB.delete_user(user_id=user.id)
    path = join('data', user.id)
    rmtree(path)

    return response.JsonResponse200('User deleted')
