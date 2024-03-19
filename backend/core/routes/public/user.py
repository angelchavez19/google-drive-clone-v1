from fastapi import APIRouter, Response
from secrets import token_urlsafe
from os import mkdir
from os.path import join

from core.database import users as usersDB
from core.models import users as usersModel
from core.utils import response
from core.utils.hash import get_hash, verify_hash
from core.utils.utils import generate_uuid
from core.utils.validators import validate_user, validate_password

users_public_route = APIRouter(
    prefix='/api/user',
    tags=['Users']
)


@users_public_route.get('/')
def get_users():
    users = usersDB.get_all_users()

    return response.JsonResponse200(
        message=[usersModel.user_model_to_dict(user) for user in users],
        key='result')


@users_public_route.post('/')
async def create_user(user: usersModel.UserModelCreate):
    if usersDB.exist_user(field='name', value=user.username):
        return response.JsonResponse400('User already exists')

    if not validate_user(user=user.username) or \
            not validate_password(password=user.password):
        return response.JsonResponse400('Invalid user')

    user_id = generate_uuid()
    password_hashed = get_hash(plain=user.password)

    usersDB.insert_user(
        new_user=usersModel.UserIdNamePassword(id=user_id,
                                               name=user.username,
                                               password=password_hashed))

    path = join('data', user_id)
    mkdir(path)
    mkdir(join(path, 'drive'))
    mkdir(join(path, 'trash'))

    return response.JsonResponse200('User created')


@users_public_route.post('/login')
def login(user: usersModel.UserModelLogin, response: Response):
    if not usersDB.exist_user(field='id', value=user.user_id):
        return response.JsonResponse404('User not found')

    db_user = usersDB.get_user(user_id=user.user_id)

    if not verify_hash(user.password, db_user.password):
        return response.JsonResponse400('Invalid credentials')

    token = token_urlsafe()
    usersDB.add_session_id(user_id=user.user_id, token=token)
    response.set_cookie(key='session', value=token, httponly=True)
