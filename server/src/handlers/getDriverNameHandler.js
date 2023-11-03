const driverName = require("../controllers/getDriverNameController");

const getNameDrivers = async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await driverName(name);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getNameDrivers;
