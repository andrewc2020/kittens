import data from '../kittens.json'

export default (req, res) => {
    
  // const B_URI = 'http://localhost:8000/kittens'
   //const result = await fetch(B_URI);
   // const data = await result;
   
  if(req.query && req.query.id)
  {
    let my_data = data.kittens.filter(kitten => kitten.mother == req.query.id)
    
    res.status(200).json(my_data)
  }
  else{
    res.status(200).json(data.kittens);

  }
   
   
 
    
  };