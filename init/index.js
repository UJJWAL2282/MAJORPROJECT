const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connecting to DB")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect();
};

const initDB=async()=>{
    await Listing.deleteMany();
    initData.data=initData.data.map((obj)=>({...obj,owner:"689abe8da90192094fc4e6a8"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initilaized");
}

initDB();

