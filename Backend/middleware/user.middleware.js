const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config()


const auth = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.header("Authorization");
       
        if (!token) {
            return res.status(401).json({ message: "No token provided, authorization denied." });
        }
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);
        if (!decoded || !decoded._id) {
            return res.status(401).json({ message: "Token is not valid." });
        }

        // Find the user by ID
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Attach user to request object and proceed
     
        req.user = user;
     
        next();
    } catch (error) {
        console.error("Error in authentication middleware:", error.message);
        res.status(500).json({ message: "Server error." });
    }
};

module.exports = auth;
