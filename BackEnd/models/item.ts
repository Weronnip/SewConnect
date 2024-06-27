import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const ItemProducts = mysqlTable('Items', {
    itemID: int('ItemID') .primaryKey() .notNull()
                          .unique() .autoincrement(),
    IName: varchar('IName', {length: 100}) .notNull() .unique(),
    IAbout: varchar('IAbout', {length: 1000}),
    IPrice: int('IPrice') .notNull(),
    Item_Image: varchar('Item_Image', {length: 500})
});