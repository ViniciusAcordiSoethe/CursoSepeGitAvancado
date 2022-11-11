const express = require('express');
const path = require('path');

const app = express();

app.get("/*" , (req, res) => {
   res.sendFile(path.resolve("view" ,  "home.html")); 
});

app.listen(process.env.PORT || 3001, () => console.log("Server is running... open http://localhost:3001"));