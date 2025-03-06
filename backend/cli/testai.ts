import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const { text } = await generateText({
    model: openai("gpt-4o"),
    system: "You are a friendly assistant!",
    prompt: "Why is the sky blue?",
});

console.log(text);
