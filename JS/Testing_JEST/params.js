const searchParams=(url,params)=>{
    const defineURL=new URL(url);
    // 2 Method
    let searchParamsData= new URLSearchParams(defineURL.search)
    let data =searchParamsData.get(params)

    return +data
    
    // 1 Method
    
    // const value = defineURL.search.split('&');
    // const searchParamsData = new URLSearchParams(params)
    // let ValueNumber = value.map((el)=>{
    //     let valuess = el.split('=');
    //     let data = valuess.filter((els)=> els != params)
    //     return +data
    // })
    // return ValueNumber[1]
}

module.exports = searchParams