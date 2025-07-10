import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            avatar: user.avatar,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
}