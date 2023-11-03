const axios = require("axios");
const { Driver, Team } = require("../db");

const driverId = async (id) => {
  if (id.length < 5) {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    const data = response.data;


    const idData = {
      id: data.id,
      name: data.name.forename,
      lastname: data.name.surname,
      description: data.description,
      image:
        data.image.url ||
        "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
      nationality: data.nationality,
      birthdate: data.dob,
      teams: data.teams,
    };

    return idData;
  } else {
    const searchById = await Driver?.findByPk(id, {
      include: {
        model: Team,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return searchById;
  }
};

module.exports = driverId;
