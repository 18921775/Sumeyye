module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
       
        phone_number: {
            type: Sequelize.INTEGER //added phone number
        },
        phone_type: {
            type: Sequelize.ENUM ('Home','Mobile','Work','Other')//added phone type
        },
        contactId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts',
                key: 'id',
            }
        }
    });
  
    return Phone;
};