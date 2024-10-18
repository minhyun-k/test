

let data = [
  { name: "John Doe" },{ name: "John Doe 2" },{ name: "John Doe 3" }
]

export default function handler(req, res) {
  const {method, body, query} = req;
  console.log(query.name)

  switch(method){
    case 'POST':data.push(JSON.parse(body)); break;
    case 'PUT':; break;
    case 'DELETE':
      data.filter(obj=>obj.name !== query.name); 
      break;
  }

  console.log(method,body)



  res.status(200).json(data);
}
