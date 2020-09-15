export default function contact(req,res){
    
    console.log(req.body);
    const answer = JSON.stringify({"message": "welcome aboard!", "payload": req.body.first_name})
    res.statusCode = 200
  res.json(answer);
}

