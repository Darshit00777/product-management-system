import User from "../model/User.js";

export const register = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.json({
            message: "Register successfully",
            data: user
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.json({
                message: "Invalid Email or Password"
            });
        }

        res.json({
            message: "Login successfully",
            data: user
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};
