//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar que irá fazer operacoes no bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados,para as operacoes
//serialize roda sequencia de codigos

db.serialize(() => {

    //com comandos SQL eu vou:
    //criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         adress TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //inserir dados na tabela
    // const query = `
    //     INSERT INTO places(
    //         image, 
    //         name,
    //         adress,
    //         adress2,
    //         state,
    //         city,
    //         items
    //     ) VALUES(?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América ",
    //     "Numero 260",
    //     "Santa Catarina",
    //     " Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"

    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query, values, afterInsertData) 

    //consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//     }
//     console.log("Aqui estao seus registros:")
//     console.log(rows)    
// })

    // deletar dados da tabela
    // db.run(`DELETE FROM places WHERE id = ?`,[3],function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
})