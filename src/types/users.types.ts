interface Users {
    id: string
    firstName: string
    lastName: string
    email: string
    provider: 'Firebase' | 'Google'
}

export default Users