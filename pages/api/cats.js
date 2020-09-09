import data from '../cats.json'

export default(req,res) =>{
   
res.status(200).json(data);

}