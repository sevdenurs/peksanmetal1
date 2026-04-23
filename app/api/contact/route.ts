import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    if (form.get("website")) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const projectTypes = String(form.get("projectTypes") ?? "");
    const budget = String(form.get("budget") ?? "");
    const deadline = String(form.get("deadline") ?? "");

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    console.info("[contact]", {
      name,
      email,
      phone,
      projectTypes,
      budget,
      deadline,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
