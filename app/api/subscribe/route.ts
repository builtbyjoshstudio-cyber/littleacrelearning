import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Email signup stub.
 *
 * Validates input and returns success. To go live, forward `email`/`name`
 * to an ESP (ConvertKit, Mailchimp, etc.) here — e.g. POST to the provider's
 * subscribe endpoint using a server-side API key from process.env.
 */
export async function POST(request: Request) {
  let body: { email?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 422 },
    );
  }

  // TODO: integrate ESP. For now we just acknowledge the signup.
  // eslint-disable-next-line no-console
  console.log(`[subscribe] ${name || "(no name)"} <${email}>`);

  return NextResponse.json({ ok: true, message: "Subscribed." });
}
