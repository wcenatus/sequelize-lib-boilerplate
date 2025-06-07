import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // only use this in dev/lib setup
    console.log("Database connected and models synced.");
  } catch (err) {
    console.error("Failed to connect:", err);
  }
};
