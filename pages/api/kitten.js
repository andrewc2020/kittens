import data from '../kittens.json'
export default (req, res) => {
    const { id } = req.query;
    let kitten = {}
  
    if (id) {
      kitten = data.kittens.filter(kitten => kitten._id === id);
    }
    
    console.log(kitten)
  
    res.status(200).json(kitten);
  };