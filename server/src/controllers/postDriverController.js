const { Driver, Team } = require("../db");
const Sequelize = require("sequelize");

const createDataDriver = async (
  name,
  lastname,
  description,
  image,
  nationality,
  birthdate,
  teams
) => {
  try {
    // Crear un nuevo conductor en la base de datos
    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      birthdate, 
      teams
    });

    // Buscar equipos cuyos nombres coincidan con los proporcionados en el parámetro 'teams'
    const addTeams = await Team.findAll({
      where: {
        name: {
          [Sequelize.Op.in]: teams,
        },
      },
    });

    // Agregar los equipos encontrados al nuevo conductor
    await newDriver.addTeams(addTeams);

    // Realizar una consulta para obtener el conductor con los equipos asociados
    const driverRelation = await Driver.findOne({
      where: {
        id: newDriver.id,
      },
      include: [
        {
          model: Team,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    // Retornar el objeto que contiene la información del conductor y sus equipos
    return driverRelation;
  } catch (error) {
    // Capturar y lanzar cualquier error que pueda ocurrir durante el proceso
    throw error;
  }
};

module.exports = createDataDriver;
