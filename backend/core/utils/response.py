from fastapi.responses import JSONResponse


def JsonResponse400(error: str, key: str = 'error'):
    return JSONResponse(content={key: error}, status_code=400)


def JsonResponse404(error: str = 'Not found', key: str = 'error'):
    return JSONResponse(content={key: error}, status_code=404)


def JsonResponse200(message: str = 'Success', key: str = 'success'):
    return JSONResponse(content={key: message}, status_code=200)
