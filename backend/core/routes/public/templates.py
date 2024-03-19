from fastapi import APIRouter
from fastapi.responses import HTMLResponse
from os.path import join

from core.utils.utils import read_file

templates_public_route = APIRouter(
    tags=['Templates']
)


def get_index_html():
    return read_file(path=join('templates', 'index.html'))


def response_index_html():
    return HTMLResponse(content=get_index_html())


@templates_public_route.get('/')
def index():
    return response_index_html()


@templates_public_route.get('/add_user')
def add_user():
    return response_index_html()


@templates_public_route.get('/login/{user}')
def login():
    return response_index_html()
