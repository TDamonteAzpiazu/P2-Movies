const app = require("./src/server")
const dbCon = require("./src/config/dbCon")
const port = 3000

dbCon().then(
    (res) => {
        app.listen(port, () => {
            console.log(`La app esta lista en el puerto ${port}`);
        }) ;
    }
).catch(err=>{
    console.log("Error al conectar con la base de datos")
})