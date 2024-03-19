from fastapi import APIRouter, File, UploadFile, Request
from fastapi.responses import HTMLResponse
from os import listdir, mkdir, remove
from os.path import isdir, isfile, getsize, join, splitext
from shutil import rmtree, copytree, copyfile
from typing import Annotated

from core.models.users import UserIdName
from core.models.request_model import DirectoryModel
from core.utils import response, utils, files
from config import IMAGE_EXTENSIONS

from .protected import protected, protected_route

data_private_route = APIRouter(
    prefix='/api/data',
    tags=['User Data']
)


def get_path(p: str, dir_path: str):
    if '.' in p:
        return f"/api/resource/{dir_path}/{p}"
    return f"/dashboard/{dir_path}/{p}"


def get_size(p: str, path: str):
    _path = join(path, p)
    size = getsize(_path)
    if not size:
        return files.get_dir_size_parsed(_path)
    return files.parse_size(size)


@data_private_route.post('/icon')
async def update_icon(request: Request, icon: Annotated[UploadFile, File(description='User icon')]):
    user: UserIdName = protected(request)

    if isinstance(user, HTMLResponse):
        return user

    path = join('data', user.id)

    if splitext(icon.filename)[-1][1:] not in IMAGE_EXTENSIONS:
        return response.JsonResponse400('Invalid image extension')

    image = utils.find_image(path, 'icon')

    if image is not None:
        remove(image)

    path = join(path, icon.filename)
    await utils.save_file(filename=path, file=icon)

    return response.JsonResponse200('Success')


@data_private_route.get('/list/{dir_path:path}')
def list_dir_path(request: Request, dir_path: str):
    user_response = protected(request)

    if isinstance(user_response, HTMLResponse):
        return user_response

    _dir_path = dir_path.split('/')
    path = join('data', user_response.id, *_dir_path)

    if isfile(path) or not isdir(path):
        return response.JsonResponse400('Invalid path')

    _list_dir = [{"path": get_path(p, dir_path), "size": get_size(p, path), "name": p}
                 for p in listdir(path)]

    return response.JSONResponse(content=_list_dir)


@data_private_route.get('/search/{file}')
def search_file(request: Request, file: str):
    user_response = protected(request)

    if isinstance(user_response, HTMLResponse):
        return user_response

    path = join('data', user_response.id, 'drive')
    paths = [{"path": _path, "size": get_size(filename, dirpath), "name": filename}
             for _path, dirpath, filename in utils.find_files(path, file, '/api/resource/drive/')]

    return response.JSONResponse(content=paths)


@data_private_route.post('/create_dir')
def create_directory(request: Request, directory: DirectoryModel):
    user_response = protected(request)

    if isinstance(user_response, HTMLResponse):
        return user_response

    _dir_path = directory.directory.split('/')
    path = join('data', user_response.id, 'drive', *_dir_path)

    try:
        mkdir(path)
    except FileExistsError:
        return response.JsonResponse400('Directory already exists')
    except FileNotFoundError:
        return response.JsonResponse400('Directory not found')

    return response.JsonResponse200()


@data_private_route.delete('/delete_resource')
def delete_resource(request: Request, directory: DirectoryModel):
    user_response = protected(request)

    if isinstance(user_response, HTMLResponse):
        return user_response

    _dir_path = directory.directory.split('/')
    base_path = join('data', user_response.id)
    path = join(base_path, 'drive', *_dir_path)

    if isdir(path):
        dst = join(base_path, 'trash', _dir_path[-1])
        if isdir(dst):
            dst += '--' + utils.generate_short_uuid()
        copytree(path, dst)
        rmtree(path)
        return response.JsonResponse200()

    if isfile(path):
        filename = utils.generate_short_uuid() + '--' + _dir_path[-1]
        copyfile(path, join(base_path, 'trash', filename))
        remove(path)
        return response.JsonResponse200()

    return response.JsonResponse404()


@data_private_route.post('/upload_file/{dir_path:path}')
async def upload_files(request: Request, dir_path: str, files: Annotated[list[UploadFile], File(description='User icon')]):
    response_user: UserIdName = protected(request)

    if isinstance(response_user, HTMLResponse):
        return response_user

    _dir_path = dir_path.split('/')

    for file in files:
        if not file.filename:
            continue
        path = join('data', response_user.id, *_dir_path, file.filename)
        await utils.save_file(filename=path, file=file)

    return response.JsonResponse200('Success')


@data_private_route.delete('/clean_trash')
@protected_route
def clean_trash(user: UserIdName):
    trash = join('data', user.id, 'trash')
    rmtree(trash)
    mkdir(trash)

    return response.JsonResponse200()
