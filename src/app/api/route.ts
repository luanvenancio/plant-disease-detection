import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildOpenAssistantPrompt } from "ai/prompts";

// Create a new Hugging Face Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Initialize a text-generation stream using the Hugging Face Inference SDK
    const response = await Hf.textGenerationStream({
        model: "surgeonwz/plant-village",
        inputs: experimental_buildOpenAssistantPrompt(messages),
        parameters: {
            max_new_tokens: 200,
            // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
            typical_p: 0.2,
            repetition_penalty: 1,
            truncate: 1000,
            return_full_text: false,
        },
    });

    // Convert the async generator into a friendly text-stream
    const stream = HuggingFaceStream(response);

    // Respond with the stream, enabling the client to consume the response
    return new StreamingTextResponse(stream);
}
