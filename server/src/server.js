const app = require("./index");

const connect = require("./configs/db");

const port = process.env.PORT || 4000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listning on port ${port}`) ;
  } catch (error) {
    console.log("error:", error) ;
  }
});
 
