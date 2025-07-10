import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import dotenv from "dotenv";
import { generateToken } from "../controller/User.js";
import User from "../models/User.js";

dotenv.config();


// Debug: Check if environment variables are loaded
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET');
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET');
     
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
    passReqToCallback: true,
}, async (request, accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
            const token = generateToken(existingUser);
            return done(null, { token, user: existingUser });
        }

        const newUser = await User.create({
            email: profile.email,
            name: profile.displayName,
            avatar: profile.picture,
            googleId: profile.id,
        });

        const token = generateToken(newUser);
        return done(null, { token, user: newUser });
    } catch (error) {
        return done(error, false);
    }
}));

export default passport;