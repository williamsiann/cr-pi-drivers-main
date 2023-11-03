const axios = require("axios");
const { Driver, Team } = require("../db");

const allDrivers = async () => {
  try {
    let response = await axios.get(`http://localhost:5000/drivers`);
    let results = response.data;

    const dataDrivers = await Promise.all(
      results.map(async (driverData) => {
        return {
          id: driverData.id,
          name: driverData.name.forename,
          lastname: driverData.name.surname,
          description: driverData.description,
          image:
            driverData.image.url ||
            "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
          nationality: driverData.nationality,
          birthdate: driverData.dob,
          teams: driverData.teams,
        };
      })
    );

    const dbData = await Driver.findAll({
      include: [
        {
          model: Team,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    const dbDataDrivers = dbData.map(
      ({
        id,
        name,
        lastname,
        description,
        image,
        nationality,
        birthdate,
        Teams,
        createDb,
      }) => ({
        id: id,
        name: name,
        lastname: lastname,
        description: description,
        image: image,
        nationality: nationality,
        birthdate: birthdate,
        teams: Teams.map((team) => team.name),
        createDb,
      })
    );

    const allData = [...dataDrivers, ...dbDataDrivers];
    return allData;
  } catch (error) {
    throw error;
  }
};

module.exports = allDrivers;
