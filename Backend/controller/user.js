const userModel = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");


const register = async (req, res) => {

    try {
        const { fullname, email, password } = req.body;
        const encrptedPassword = await bcrypt.hash(password, 10)

        if (!fullname || !email || !password) {
           return res.status(400).json("All fields are required");
        }

        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(409).json("User already exist");
        }

        const createNewUser = new userModel({
            fullname, email, password: encrptedPassword
        })


        await createNewUser.save();
        res.status(201).json({
            message:'User Created Successfully',
            user:{
                _id:createNewUser._id,
                email:createNewUser.email,
                fullname:createNewUser.fullname
            }
        });

    } catch (error) {
        console.log("err", error);
        res.status(500).json(
            { message: "Internal server error" }
        )
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(400).json("please fill email and password")
        }
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json('User Not exist');
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);

        const token = jwt.sign({_id:existingUser._id},"avi",{
            expiresIn:"1h",
        });


        if (!isMatch) {
            return res.status(400).json('Invalid Password');
        }
        res.status(200).json({
            _id: existingUser._id,
            message: "Login Successfull",
            user: {
                _id:existingUser._id,
                fullname: existingUser.fullname,
                email: existingUser.email,
                token:token
            }
        })
    } catch (error) {
        console.log("err", error);
        res.status(500).json(
            error
        )
    }
}

const changePassword=async(req,res)=>{

try {
    const { currentPassword, newPassword } = req.body;
   
    // Validate input
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: 'Please provide both current and new passwords.' });
    }

    const user = await userModel.findById(req.user.id);
  
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect.' });
    }
    
    if (currentPassword === newPassword) {
        return res.status(400).json({ message: 'New password cannot be the same as the current password.' });
    }

    // Hash the new password
    
     user.password = await bcrypt.hash(newPassword, 10)
    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Password changed successfully.' });
} catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Server error.' });
}
}

const userController = {
    register,
    login,
    changePassword
}

module.exports = userController;