const allTeams = require("../controllers/getAllTeamsController");

const getAllTeams = async (req, res) => {
  try {
    const teams = await allTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ error: error.name });
  }
};

module.exports = getAllTeams;
