from fastapi import APIRouter
from fastapi.responses import FileResponse
from os.path import join
from core.utils import utils

data_public_route = APIRouter(
    prefix='/api/data',
    tags=['User Data']
)


@data_public_route.get('/icon/{user_id}')
def user_icon(user_id: str):
    base_path = 'data'
    path = join(base_path, user_id)
    image = utils.find_image(path, 'icon')

    if image is not None:
        return FileResponse(path=image)

    default_icon = join(base_path, 'default-icon.png')
    return FileResponse(path=default_icon)
