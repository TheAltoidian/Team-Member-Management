const router = require('express').Router();
const req = require('express/lib/request');
const { TeamMember, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('==============');
    TeamMember.findAll({
        // Query configuration
        attributes: ['id', 'name', 'employeeID', 'email', 'role', 'user_id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbTeamMemberData => res.json(dbTeamMemberData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    TeamMember.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name', 'employeeID', 'email', 'role', 'user_id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbTeamMemberData => {
            if(!dbTeamMemberData) {
                res.status(404).json({ message: 'No team member found with this id'});
                return;
            }
            res.json(dbTeamMemberData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {name: 'Cullen', employeeID: '1', email: 'cullen@gmail.com', role: 'student', user_id: 1}
    TeamMember.create({
        name: req.body.name,
        employeeID: req.body.employeeID,
        email: req.body.email,
        role: req.body.role,
        user_id: req.body.user_id
    })
        .then(dbTeamMemberData => res.json(dbTeamMemberData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;