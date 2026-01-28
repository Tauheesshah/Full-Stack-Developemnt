const ApiCall = async (url) => {
    try{
        let res =  await fetch(url)
        let data = await res.json();
        return 'data_found'
    }catch (err){
        return 'error'
    }
};
module.exports= ApiCall;