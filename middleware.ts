import { NextResponse, type NextRequest } from "next/server";

const isDanHabib = (host: string | null) =>
  /(^|\.)danhabib\.dev$/.test((host ?? "").split(":")[0]);

/** danhabib.dev sert la variante /dan (titre « Dan Habib ») ; ailleurs, /dan renvoie à l'accueil. */
export function middleware(request: NextRequest) {
  const dan = isDanHabib(request.headers.get("host"));
  const { pathname } = request.nextUrl;
  if (pathname === "/" && dan) {
    return NextResponse.rewrite(new URL("/dan", request.url));
  }
  if (pathname === "/dan" && !dan) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/dan"] };
