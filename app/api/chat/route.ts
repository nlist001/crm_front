import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(request: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await request.json();
        const response = await streamText({
            model: openai("gpt-4.1-mini"),
            messages: convertToModelMessages(messages),
        });
        return response.toUIMessageStreamResponse();
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}