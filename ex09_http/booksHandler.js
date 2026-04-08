import DataSource from "./dataSource.js";
const dataSource = new DataSource('db/database.json');

export const booksHandler = (req, res) => {

  const {method, url} = req;

  //console.log('url ==', url);
      const urlSplitted = url.split('?');
      const urlString = urlSplitted[0];
      const queryString = urlSplitted[1]; //FIXME:
      
      const urlArr = urlString.split('/');

    //console.log('urlArr', urlArr, urlArr.length);

      let id = null;
      if(urlArr.length === 4) {
        id = +urlArr[urlArr.length-1]; //FIXME:
      }
  let re = null;    

  switch (method) {
    case 'POST':
      dataSource.create({name: 'HardCode Name', author: 'HardCode Author', description: 'HardCode'     }); //Fixme: HARDCODE!
      re = dataSource.getOne(id);
      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end(re); 
      return;
    case 'GET':
      if(id) {
       re = JSON.stringify(DataSource.getOne(id));
       res.writeHead(200, {'Content-Type': 'application/json'});
       res.end(re);
      } else {
       re = JSON.stringify(DataSource.getOne());
       res.writeHead(200, {'Content-Type': 'application/json'});
       res.end(re);
      }
      return;
    case 'PATCH':
    case 'PUT':
      dataSource.update(id, {author: 'HardCode Descr'}); //Fixme: HARDCODE!
      re = dataSource.getOne(id);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(re);
 
      return; 
    case 'DELETE':
      dataSource.delete(id);    
      res.writeHead(204);
      res.end(null);
      return;         
    }

   res.writeHead(500, {'Content-Type': 'application/json'});
   res.end(JSON.stringify(
    {
      status: "error", 
      message: "method not imlemented"
    })
   ); 
};