const router = require('express').Router();
const sequelize = require('../config/connection');
const { TeamMember, User} = require('../models');

router.get('/', (req, res) => {
    TeamMember.findAll({
        attributes: [
            'inputID',
            'name',
            'employeeID',
            'email',
            'role',
            'created_at'
        ]
    })
        .then(dbTeamMemberData => {
            const teamMembers = dbTeamMemberData.map(teamMember => teamMember.get({ plain: true }));
            // pass a single team member object into the home page template
            res.render('homepage', { teamMembers });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    // res.render('homepage', {
    //     id: 1,
    //     created_at: new Date(),
    //     user: {
    //         username: 'test_user'
    //     }
    // });
});

module.exports = router;