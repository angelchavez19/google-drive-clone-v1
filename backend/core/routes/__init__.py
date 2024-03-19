from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse

from .public.data import data_public_route
from .public.user import users_public_route
from .public.templates import templates_public_route
from .private.data import data_private_route
from .private.user import users_private_route
from .private.resource import resource_private_route
from .private.templates import templates_private_route


app = FastAPI(
    title='Minimalist Drive Clone',
    description='A minimalist drive clone with Fastapi and Vue3',
    version='0.0.1'
)

origins = ['http://localhost:5173']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(404)
def not_found(_, __):
    return RedirectResponse(url="/")


def main():
    """Configure FastAPI app

    Returns:
        FastAPI: Main app
    """
    app.mount("/assets", StaticFiles(directory="assets"), name="assets")

    app.include_router(router=templates_public_route)
    app.include_router(router=templates_private_route)

    app.include_router(router=users_public_route)
    app.include_router(router=users_private_route)

    app.include_router(router=data_public_route)
    app.include_router(router=data_private_route)
    
    app.include_router(router=resource_private_route)

    return app
