const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const teamMemberRoutes = require('./teamMember-routes');

router.use('/users', userRoutes);
router.use('/teamMembers', teamMemberRoutes);

module.exports = router;