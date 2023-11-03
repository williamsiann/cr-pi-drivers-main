const createDataDriver = require("../controllers/postDriverController");

const postNewDriver = async (req, res) => {
  const { name, lastname, description, image, nationality, birthdate, teams } =
    req.body;

    if (!Array.isArray(teams) || teams.length === 0) {
      return res.status(400).json({
        error: "The 'teams' field should be a non-empty array",
      });
    }

  if (
    !name ||
    !lastname ||
    !description ||
    !image ||
    !nationality ||
    !birthdate 
  ) {
    return res
      .status(400)
      .json({ error: "All required fields must be provided" });
    }

  try {
    const newDriver = await createDataDriver(
      name,
      lastname,
      description,
      image,
      nationality,
      birthdate,
      teams
    );
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postNewDriver;
