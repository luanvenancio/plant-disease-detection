import { NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image file provided." },
        { status: 400 }
      );
    }

    const client = await Client.connect(
      "surgeonwz/plant-disease-space-detection"
    );
    const result: any = await client.predict("/predict", { image: image });

    if (
      result &&
      result.data &&
      Array.isArray(result.data) &&
      result.data.length > 0
    ) {
      return NextResponse.json(result.data[0]);
    } else {
      throw new Error("Invalid response structure from analysis service.");
    }
  } catch (error: any) {
    console.error("Internal API Error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
