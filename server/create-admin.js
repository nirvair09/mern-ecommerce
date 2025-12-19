const mongoose = require("mongoose");
const dotenv = require("dotenv");
const readline = require("readline");
const path = require("path");

// Load env vars
dotenv.config();

const User = require("./models/User");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

const promoteUser = async () => {
    await connectDB();

    rl.question("Enter the email of the user to promote to admin: ", async (email) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                console.log(`\n❌ User with email '${email}' not found.`);
                console.log("Please make sure the user has registered first.");
            } else {
                if (user.role === "admin") {
                    console.log(`\n⚠️  User '${user.userName}' is already an admin.`);
                } else {
                    user.role = "admin";
                    await user.save();
                    console.log(`\n✅ Success! User '${user.userName}' is now an admin.`);
                }
            }
        } catch (error) {
            console.error("Error updating user:", error);
        } finally {
            rl.close();
            mongoose.connection.close();
            process.exit(0);
        }
    });
};

promoteUser();
