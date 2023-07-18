var fs = require('fs').promises;
const path = 'Databases/TodoDatabase.txt';



const getToDos = async (req, res, next) => {
    try {
        console.log('[getToDos] Inizio...')
        //MI PRENDO IL PATH DEL FILE E IL FORMATO E SCRIVO
        var data = await fs.readFile(path, 'utf8');
        //SOSTITUISCO TUTTI I \N E I \R PER MANDARLI CORRETTAMENTE AL FE
        response = data.replace(/\n/g, '')
        finale = response.replace(/\r/g, '').split('/')
        console.log('[getToDos] Fine!')
    } catch (error) {
        console.log("[getToDos] Error: ", error)
    } finally {
        res.json(finale)
    }
}

module.exports = { getToDos };