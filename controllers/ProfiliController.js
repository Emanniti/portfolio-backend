import { Profili } from "../Databases/Models/Profili.js";

export const getAllUsers = async (req, res) => {
    try {
        console.log('[getAllUsers] Inizio...')
        res.json(await Profili.find());
    } catch (error) {
        console.log('[getAllUsers] Errore: ' + error)
    }
};

export const getUserById = async (req, res) => {
    try {
        console.log('[getUserById] Inizio...')
        let result = await Profili.findOne({'username': req.query.username, 'password': req.query.password})
        if(result !== null && result !== undefined){
            res.json({statusLogin: 'EFFETTUATO'});
        } else {
            res.json({statusLogin: 'ERRORE'});
        }
    } catch (error) {
        console.log('[getAllUsers] Errore: ' + error)
    }
};

// Potresti aggiungere altre funzioni come createUser, updateUser, deleteUser, ecc.
