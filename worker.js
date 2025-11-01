addEventListener("fetch", event => {
  event.respondWith(
    handleRequest(event.request)
  );
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Cambia esto por la IP o dominio de tu VPS
  url.reagensvpnpro-194750411334.us-central1.run.app = "holisprite.es"
  url.protocol = "https:"
  url.port = "443"

  return fetch(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
}
