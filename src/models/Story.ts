import mongoose from "mongoose";

const { Schema } = mongoose;

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Story || mongoose.model("Story", storySchema);
