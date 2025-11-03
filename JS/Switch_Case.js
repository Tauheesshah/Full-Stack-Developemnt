let AGE=1000;

switch(true){
    case AGE>=18 && AGE< 56:
        console.log("Eligible For Vote");
        break;
    case AGE >= 56 && AGE <75:
        console.log("null for vote");
        break;
    case AGE <18:
        console.log("Not Eligible For vote");
        break;

    default:
        console.log("Key was not matched........")
        break;
}