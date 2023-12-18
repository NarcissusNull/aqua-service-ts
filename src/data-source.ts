import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "narcissus",
    database: "aqua_sales",
    synchronize: false,
    logging: false,
    entities: ["dist/entity/*.entity.js"],
    migrations: ["dist/migration/*.js"],
    subscribers: [],
})
