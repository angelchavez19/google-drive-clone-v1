import shutil
import subprocess
from os import listdir
from os.path import join


def build_vue():
    try:
        subprocess.run(["cd", "frontend", "&", "npm", "run",
                       "format"], shell=True, check=True)
        subprocess.run(["cd", "frontend", "&", "npm", "run",
                       "build"], shell=True, check=True)
    except subprocess.CalledProcessError:
        pass


def modify_html(path: str):
    with open(path, mode='r') as html:
        content_file = html.read()

    content_file = content_file.replace(
        'href="/favicon.ico"', 'href="/assets/favicon.ico"')

    with open(path, mode='w') as html:
        html.write(content_file)


def copy_index():
    index_front = join('frontend', 'dist', 'index.html')
    index_back = join('backend', 'templates', 'index.html')

    shutil.copy(index_front, index_back)
    modify_html(index_back)


def copy_sources():
    favicon_frontend = join('frontend', 'dist')
    favicon_backend = join('backend', 'assets')

    frontend_assets = listdir(favicon_frontend)

    for file in frontend_assets:
        if '.' in file and not file.endswith('.html'):
            shutil.copy(join(favicon_frontend, file),
                        join(favicon_backend, file))


def copy_assets():
    assets_front = join('frontend', 'dist', 'assets')
    assets_back = join('backend', 'assets')

    shutil.rmtree(assets_back)
    shutil.copytree(assets_front, assets_back)


if __name__ == '__main__':
    build_vue()
    copy_index()
    copy_assets()
    copy_sources()
