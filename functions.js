var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/records", (request, response) => {
  const data = request.body;
  const query = "SELECT * FROM health_records WHERE id = (${data.id})";
  connection.query(query, (err, rows) => {
    if(err) throw err;
    response.json({data:rows});
  });
});