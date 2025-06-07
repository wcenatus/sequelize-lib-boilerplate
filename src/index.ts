import { sequelize, initDB } from "./config/database.js";
import User from "./models/User";
initDB();

export { User, sequelize };
