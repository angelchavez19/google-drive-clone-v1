from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from os.path import join

from core.models.users import UserIdName
from core.utils.files import get_dir_size_parsed
from core.utils.utils import read_file

from .protected import protected_route, protected


templates_private_route = APIRouter(
    tags=['Templates']
)


def response_dashboard(user: UserIdName):
    if isinstance(user, HTMLResponse):
        return user

    path = join('data', user.id)

    headers = {
        "id": user.id,
        "username": user.name,
        "total_size": get_dir_size_parsed(path)
    }

    return HTMLResponse(
        content=read_file(join('templates', 'index.html')),
        headers=headers)


@templates_private_route.get('/dashboard/drive')
@protected_route
def dashboard_drive(user: UserIdName):
    return response_dashboard(user)


@templates_private_route.get('/dashboard/drive/{path:path}')
def dashboard_drive_match(request: Request, path: str):
    user = protected(request)
    return response_dashboard(user)


@templates_private_route.get('/dashboard/trash')
@protected_route
def dashboard_trash(user: UserIdName):
    return response_dashboard(user)
