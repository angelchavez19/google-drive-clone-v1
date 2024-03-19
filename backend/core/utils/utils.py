from fastapi import UploadFile
from os import listdir, walk
from os.path import join
from uuid import uuid4


def generate_uuid():
    return str(uuid4())


def generate_short_uuid():
    return generate_uuid()[:7]


async def save_file(filename: str, file: UploadFile):
    with open(filename, mode='wb') as fl:
        file_content = await file.read()
        fl.write(file_content)
        await file.close()


def find_image(dir: str, name: str):
    files = listdir(dir)
    for file in files:
        if file.startswith(name):
            return join(dir, file)


def read_file(path: str):
    with open(path) as file:
        return file.read()


def find_files(path: str, search: str, prev: str = ''):
    def short_dirpath(path: str):
        path = path.replace('\\', '/')
        path = "/".join(path.split('/')[3:])
        if path:
            path += '/'
        return path

    return ((prev + short_dirpath(dirpath) + filename, dirpath, filename)
            for dirpath, _, filenames in walk(path)
            for filename in filenames
            if search.lower() in filename.lower())
