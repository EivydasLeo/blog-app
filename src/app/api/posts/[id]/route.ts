import { NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Post from "@/models/Post";
import { type NextApiRequest } from "next";

interface Params {
    id: string;
}

const createHandler =
    <T>(handler: (params: Params) => Promise<T>) =>
    async (
        _request: NextApiRequest,
        { params }: { params: Params },
    ): Promise<NextResponse<unknown>> => {
        try {
            await connect();
            const result = await handler(params);
            return new NextResponse(JSON.stringify(result), { status: 200 });
        } catch (err) {
            return new NextResponse("Database Error", { status: 500 });
        }
    };

const getPostById = async ({ id }: Params): Promise<typeof Post | null> => {
    return await Post.findById(id);
};

const deletePostById = async ({ id }: Params): Promise<string> => {
    await Post.findByIdAndDelete(id);
    return "Post has been deleted";
};

export const GET = createHandler(getPostById);
export const DELETE = createHandler(deletePostById);
