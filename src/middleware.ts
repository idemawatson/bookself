export { default } from 'next-auth/middleware'

export const config = {
  // matcher: ["/profile"],
  matcher: ['/((?!register|api|login|top|static|.*\\..*|_next/image).*)'],
}
