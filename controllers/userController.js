
const users  = require("../models/UserSchema");

const  getAllUsers = async (req , res) => {
    const user = await users.find()
res.status(200).json({
    status: "success",
    message: "Users retrieved successfully",
    user
})
    
}

const getUserId = async  (req , res) => {
    const userId = req.params.id
  const user = await users.findById(userId)
   if(!user){
    return res.status(404).json({
        status: "error",
        message: "User not found",
    })
  
   }
   else{
    res.status(200).json({
        status: "success",
        user
    })
   }
}

const createUser = async (req, res) => {
    const user = new users(req.body);
    await user.save();

    res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: user
    });
};
const updateUser = async(req , res) => { 
     const userId = req.params.id
  const user = await users.findByIdAndUpdate(userId, req.body , {new: true})
   if(!user){
    return res.status(404).json({
        status: "error",
        message: "User not found",
    })
   } 
    res.status(200).json({
        status: "success",
        message: "User updated successfully",
    })  
}

const deleteUser = async (req , res) => {
const userId = req.params.id
const user = await users.findByIdAndDelete(userId)
if(!user){
    return res.status(404).json({
        status: "error",
        message: "User not found",
    })
}
    res.status(200).json({
        status: "success",
        message: "User deleted successfully",
    })
}

module.exports = {
    getAllUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}