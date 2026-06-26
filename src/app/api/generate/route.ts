import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "El prompt es requerido" },
        { status: 400 }
      );
    }

    const encodedPrompt = encodeURIComponent(prompt.trim());
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;

    const res = await fetch(imageUrl, { method: "GET" });

    if (!res.ok) {
      throw new Error("El servicio de generación no respondió correctamente");
    }

    return NextResponse.json({ imageUrl });
  } catch {
    return NextResponse.json(
      { error: "Error al generar la imagen. Intentalo de nuevo." },
      { status: 500 }
    );
  }
}
