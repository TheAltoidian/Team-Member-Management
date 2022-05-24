const User = require('./User');
const TeamMember = require('./TeamMember');

// create associations
User.hasMany(TeamMember, {
    foreignKey: 'user_id'
});

TeamMember.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, TeamMember };