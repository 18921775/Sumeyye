module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
       
        company_name: {
            type: Sequelize.TEXT

     
        },
        company_address: {
            type: Sequelize.TEXT
        },
        
        contactId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts',
                key: 'id',
            }
        }
    });
  
    return Company;
};