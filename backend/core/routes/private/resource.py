from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse, FileResponse
from os.path import isfile, join

from core.utils import response

from .protected import protected

resource_private_route = APIRouter(
    prefix='/api/resource',
    tags=['User Resource']
)


@resource_private_route.get('/{path:path}')
def resource(request: Request, path: str):
    user_response = protected(request)

    if isinstance(user_response, HTMLResponse):
        return user_response

    _all_path = join('data', user_response.id, path)

    if not isfile(_all_path):
        return response.JsonResponse404()

    return FileResponse(path=_all_path)
