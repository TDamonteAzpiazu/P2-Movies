const app = require("./src/server")
const dbCon = require("./src/config/dbCon")
require("dotenv").config() ;

dbCon().then(
    (res) => {
        app.listen(process.env.PORT, () => {
            console.log(`La app esta lista en el puerto ${process.env.PORT}`);
        }) ;
    }
).catch(err=>{
    console.log("Error al conectar con la base de datos")
})