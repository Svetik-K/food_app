const routes = {
    index: '/', 
    recipe: { root: '/recipe/:id', creator: (id: number | string) => `/recipe/${id}` }
}

export default routes;