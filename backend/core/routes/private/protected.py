from fastapi.requests import Request
from fastapi.responses import HTMLResponse
from os.path import join

from core.database.users import get_user_by_token
from core.utils.utils import read_file


def protected(request: Request):
    token = request.cookies.get('session', None)
    if token is None:
        path = join('templates', 'index.html')
        return HTMLResponse(content=read_file(path), status_code=401)

    return get_user_by_token(token=token)


def protected_route(function):
    def _protected(request: Request):
        response = protected(request)
        if isinstance(response, HTMLResponse):
            return response
        return function(user=response)
    return _protected
