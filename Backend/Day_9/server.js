const mongoose = require('mongoose')

const main = async()=>{
    try {
        const connection = mongoose.connect('mongodb://127.0.0.1:27017/Tauheed_DB')
        console.log('DB is Connected ✔️')
        
        const userData  = new mainModel(
            {
                name:'Parru Don',
                age:100,
                married:true,
            },
        )

        await userData.save()
        
    } catch (error) {
        console.log('DB is not Connected ❌')
        console.log('error',error)
    }
};

const mainSchema = new mongoose.Schema({
        name:String,
        age:Number,
        married:Boolean,
    },
    {
        versionKey:false,
    },
);


const mainModel = new mongoose.model('user',mainSchema);

main()