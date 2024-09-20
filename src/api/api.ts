export const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok){
        throw new Error('sprry something went wrong')
    }
    return response.json();
}