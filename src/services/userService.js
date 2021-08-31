import { storageService } from './generalService/asyncStorageService'
import { httpService } from './generalService/httpService'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    getEmptySignup,
    getEmptyLogin
}

window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})

function getEmptySignup() {
    return {
        profilePicture: '',
        username: '',
        bio: '',
        password: '',
        mail: ''
    }
}
function getEmptyLogin() {
    return {
        mail: '',
        password: ''
    }
}

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

function getById(userId) {
    // return storageService.get('user', userId)
    return httpService.get(`user/${userId}`)
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // return storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function login(userCred) {
    // debugger
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    // return _saveLocalUser(user)
    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
    return {
        id: 1,
        profilePicture: 'img/person/1.jpeg',
        username: "Safak Kocaoglu",
        bio: 'Node developer',
        password: "123456",
        mail: "Safak@gmail.com"
    }
}
async function signup(userCred) {
    // const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // return _saveLocalUser(user)
    return {
        id: 1,
        profilePicture: 'img/person/1.jpeg',
        username: "Safak Kocaoglu",
        bio: 'Node developer',
        password: "123456",
        mail: "Safak@gmail.com"
    }
}
async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

