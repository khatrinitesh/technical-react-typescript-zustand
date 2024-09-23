export const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error('network response was not ok')
    }
    return response.json();
}