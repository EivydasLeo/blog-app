import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
    if (process.env.MONGO == null) {
        throw new Error("MONGO environment variable is not defined");
    }

    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error("Connection failed!");
    }
};
