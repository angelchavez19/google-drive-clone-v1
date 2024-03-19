// const base = 'http://localhost:8000/api/' // Development

const base = '/api/' // Deploy

export const UrlUsers = `${base}user`
export const UrlLogin = `${base}user/login`
export const URLIcon = (id: string) => `${base}data/icon/${id}`
export const URLDataIcon = `${base}data/icon`
export const URLListDir = (path: string) => `${base}data/list/${path}`
export const URLSearch = (path: string) => `${base}data/search/${path}`
export const URLCreateDirectory = `${base}data/create_dir`
export const URLUploadFiles = (path: string) => `${base}data/upload_file/${path}`
export const URLDeleteDF = `${base}data/delete_resource`
export const URLCleanTrash = `${base}data/clean_trash`
