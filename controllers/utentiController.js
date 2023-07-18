var fs = require('fs').promises;
const path = 'Databases/UtentiDatabase.txt';
let response;
let finale;
let utenteDaInserire;

const getUtenti = async (req, res, next) => {
    try {
        console.log('[getUtenti] Inizio...')
        //MI PRENDO IL PATH DEL FILE E IL FORMATO E SCRIVO
        var data = await fs.readFile(path, 'utf8');
        //SOSTITUISCO TUTTI I \N E I \R PER MANDARLI CORRETTAMENTE AL FE
        response = data.replace(/\n/g, '')
        finale = response.replace(/\r/g, '').split('/')
        console.log('[getUtenti] Fine!')
    } catch (error) {
        console.log("[getUtenti] Error: ", error)
    } finally {
        res.json(finale)
    }
}

//INSERIMENTO UTENTE
const salvaUtente = async (req, res, next) => {
    try {
        console.log('[salvaUtente] Inizio...')
        //AGGIUNGO \N PER SALVARLO IN UNA NUOVA LINEA ALTRIMENTI LO METTE IN QUELLA ESISTENTE
        utenteDaInserire = '\n' + req.query.nome + '-' + req.query.cognome + '-' + req.query.email + '/'
        await fs.appendFile(path, utenteDaInserire);
        console.log('[salvaUtente] Fine!')
    } catch (error) {
        console.log("[salvaUtente] Error: ", error)
    } finally {
        res.json(finale)
    }
}

module.exports = { getUtenti, salvaUtente };