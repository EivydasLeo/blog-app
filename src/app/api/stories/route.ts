import { type NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Story from "@/models/Story";

export const GET = async (request: NextRequest): Promise<NextResponse<string>> => {
    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
        await connect();

        let query = {};
        if (username != null) {
            query = { username };
        }
        const stories = await Story.find(query);

        return new NextResponse(JSON.stringify(stories), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request: NextRequest): Promise<NextResponse<string>> => {
    const body = await request.json();

    const newStory = new Story(body);

    try {
        await connect();

        await newStory.save();

        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
