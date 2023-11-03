const axios = require("axios");
const { Team } = require("../db");

const allTeams = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/drivers`);
    const drivers = response.data;

    const uniqueTeamNames = new Set();

    for (const driver of drivers) {
      if (driver.teams) {
        const teams = driver.teams.split(/\s*,\s*/);

        for (const teamName of teams) {
          if (!uniqueTeamNames.has(teamName)) {
            uniqueTeamNames.add(teamName);

            await Team.findOrCreate({
              where: {
                name: teamName,
              },
            });
          }
        }
      }
    }

    const allDataTeams = await Team.findAll();
    return allDataTeams;
  } catch (error) {
    throw error;
  }
};

module.exports = allTeams;
