

function handler(req,res) {
let data=[{name:"Ajai",Age:"22"}]
data.push({ name:"Dhan",Age:"21"});
data.push({name:"Ajai Antoo",Age:"hello Ajai"})
data.push({name:"dhan",Age:"16"})
res.status(200).json(data);
}


export default handler;
