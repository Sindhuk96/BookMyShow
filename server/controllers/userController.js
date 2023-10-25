const userModel = require('../models/userModel'); // Check the path to your userModel

const registerUser = async (req, res) => {
    try {
        const user = new userModel(req.body);
        const response = await user.save();
        console.log(response);
        res.send({ "success": true, message: "Registration Success" });
    } catch (error) {
        console.log(error.message);
        res.send({ "success": false, message: "Registration Failure" });
    }
};

module.exports = registerUser;

