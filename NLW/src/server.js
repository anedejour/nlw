const express = require("express")
const server = express()

//pegar o bd
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicacao
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicacao
// pagina inicial
//req=requisicao(pedido) ; res=resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})


server.get("/create-point", (req, res) => {
    //req.query: query strings da nossa url
    // console.log(req.query)
    //inserir dados no bd
    return res.render("create-point.html")
})
server.post("/savepoint", (req, res)=>{

        const query = `
        INSERT INTO places(
            image, 
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image, 
        req.body.name, 
        req.body.adress, 
        req.body.adress2, 
        req.body.state, 
        req.body.city, 
        req.body.items

    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true})
    }
    db.run(query, values, afterInsertData) 

})

server.post("/savepoint", (req, res)=>{
    //req.body: corpo do formulario
    console.log(req.body)
    return res.send("ok")
})

server.get("/search", (req, res) => {

    //pegar os dados do bd
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length

        //mostrar a pg html com os ddados do bd
        return res.render("search-results.html", { places: rows, total: total })
    })
})

    // ligar o servidor
    server.listen(3000)