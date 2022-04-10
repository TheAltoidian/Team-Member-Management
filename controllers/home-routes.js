const router = require('express').Router();
const sequelize = require('../config/connection');
const { TeamMember, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    TeamMember.findAll({
        attributes: [
            'id',
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
            res.render('homepage', { 
                teamMembers,
                loggedIn: req.session.loggedIn 
            });
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/teamMember/:id', (req, res) => {
    // const uniqueTeamMember = {
    //     id: 1,
    //     name: "Josue",
    //     employeeID: 1,
    //     email: "josue@josue.com",
    //     role: "student",
    //     created_at: new Date(),
    //     user: {
    //         username: "test_user",
    //     },
    // };

    // res.render("uniqueTeamMember", { uniqueTeamMember });
    TeamMember.findOne({
        where: {
            id: req.params.id,
        },
        attributes: [
            "name",
            "employeeID",
            "email",
            "role"
            // maybe add mysql literal here
        ],
        // include: [
        //     {
        //         model: TeamMember,
        //         attributes: [
        //             "name",
        //             "email",
        //             "role",
        //         ],
        //         include: {
        //             model: User,
        //             attributes: ["username"],
        //         },
        //     },
        //     {
        //         model: User,
        //         attributes: ["username"],
        //     },
        // ],
    })
        .then((dbTeamMemberData) => {
            if (!dbTeamMemberData) {
                res.status(404).json({
                    message: "No users found with this id",
                });
                return;
            }

            // serialize the data
            const teamMember = dbTeamMemberData.get({ plain: true });

            // pass data to template
            res.render("teamMember", { 
                teamMember,
                loggedIn: req.session.loggedIn 
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;