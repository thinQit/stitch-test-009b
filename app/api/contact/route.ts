import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

type ContactResponse = {
  ok: boolean;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ContactResponse>(
        {
          ok: false,
          message: "Invalid contact form data.",
        },
        { status: 400 }
      );
    }

    // Placeholder for future email provider integration.
    return NextResponse.json<ContactResponse>(
      {
        ok: true,
        message: "Your message has been received. We’ll respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);

    return NextResponse.json<ContactResponse>(
      {
        ok: false,
        message: "Failed to process contact request.",
      },
      { status: 500 }
    );
  }
}
