const apiFunc = require('./ApiCall')

test('api call test ', async()=>{
    return apiFunc('https://jsonplaceholder.typicode.com/todos').then((data)=>{
        expect(data).toBe('data_found')
    })
})