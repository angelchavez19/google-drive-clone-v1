import os


def get_dir_size(path: str = '.'):
    total = 0
    with os.scandir(path) as it:
        for entry in it:
            if entry.is_file():
                total += entry.stat().st_size
            elif entry.is_dir():
                total += get_dir_size(entry.path)
    return total


def parse_size(total: int):
    if total < 2 ** 10:
        return f"{total} b"
    elif total < 2 ** 20:
        return f"{total / 2 ** 10:.2f} KB"
    elif total < 2 ** 30:
        return f"{total / 2 ** 20:.2f} MB"
    elif total < 2 ** 40:
        return f"{total / 2 ** 30:.2f} GB"
    else:
        return f"{total / 2 ** 40:.2f} TB"


def get_dir_size_parsed(path: str = '.'):
    return parse_size(get_dir_size(path))
