import { sequelize, initDB } from "./config/database.js";
import User from "./models/User.js";
initDB();

export { User, sequelize };
