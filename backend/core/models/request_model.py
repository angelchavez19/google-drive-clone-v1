from pydantic import BaseModel


class DirectoryModel(BaseModel):
    directory: str
