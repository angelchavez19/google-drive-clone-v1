from grigode_env import Environ

ENVIRON = Environ(path='.env').environ

PATH_DB = ENVIRON.get('PATH_DB')
BASE_URL = ENVIRON.get('BASE_URL')
IMAGE_EXTENSIONS = ENVIRON.get('IMAGE_EXTENSIONS')
