import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event: FetchEvent): Promise<Response> {
  const { request } = event

  // waitUntil method is used for sending logs, after response is sent
  event.waitUntil(
    prisma.oi.create({
      data: {
        casa: "oiii"
      },
    })
  )
  return new Response(`request method: ${request.method}!`)
}