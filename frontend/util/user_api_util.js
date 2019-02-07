export const fetchUser = (id) => {
    return $.ajax({
        method: 'GET',
        url:`api/users/${id}`
    })
}

export const updateUser = (user) => {
    return $.ajax({
        method: 'PATCH',
        url:`api/users/${user.get('user[id]')}`,
        data: user,
        contentType: false,
        processData: false
    })
}