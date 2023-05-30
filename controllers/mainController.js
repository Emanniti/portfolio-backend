// newTea function for post tea route
const test = (req, res, next) => {
    res.json("POST new tea"); // dummy function for now
};


const getSteamGames = async (req, res, next) => {
    const idSteam = req.query.steamId;
    let data;
    try {
        const response = await fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FB401232604477A3C8B1A14958177736&steamid=" + idSteam + "&include_appinfo=true&include_played_free_games=true&format=json")
        data = await response.json();

    } catch (error) {
        BgRed = "\x1b[41m"
        BgRedEnd = "\x1b[0m"
        console.log(BgRed, "[GET STEAM GAMES] Error: ",  BgRedEnd)
        console.log(error)
    } finally {
        res.json(data)
    }
}


const getSteamProfile = async (req, res, next) => {
    const idSteam = req.query.steamId;
    let data;
    try {
        const response = await fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FB401232604477A3C8B1A14958177736&steamids=" + idSteam)
        data = await response.json();

    } catch (error) {
        BgRed = "\x1b[41m"
        BgRedEnd = "\x1b[0m"
        console.log(BgRed, "[GET STEAM PROFILE] Error: ",  BgRedEnd)
        console.log(error)
    } finally {
        res.json(data)
    }
}

module.exports = { test, getSteamGames, getSteamProfile };