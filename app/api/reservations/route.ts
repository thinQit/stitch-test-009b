import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";

type ReservationResponse = {
  ok: boolean;
  confirmationCode?: string;
  message: string;
};

function generateConfirmationCode() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ON-${timestamp}-${randomPart}`;
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ReservationResponse>(
        {
          ok: false,
          message: "Invalid reservation data.",
        },
        { status: 400 }
      );
    }

    const confirmationCode = generateConfirmationCode();

    return NextResponse.json<ReservationResponse>(
      {
        ok: true,
        confirmationCode,
        message: "Reservation request received. A confirmation email will be sent shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);

    return NextResponse.json<ReservationResponse>(
      {
        ok: false,
        message: "Failed to process reservation request.",
      },
      { status: 500 }
    );
  }
}
