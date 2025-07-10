import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            avatar: user.avatar,
            name: user.name,
            phoneNumber: user.phoneNumber,
            googleId: user.googleId,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
}

export const savePhoneNumber = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.phoneNumber = phoneNumber;
        await user.save();
        res.status(200).json({ message: 'Phone number saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save phone number' });
    }
}