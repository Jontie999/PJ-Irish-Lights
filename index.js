export default {
  async fetch(req) {
    const url = new URL(req.url);
    const r = await fetch("https://hub.dublinbaybuoy.com" + url.pathname + url.search);
    return new Response(r.body, {
      status: r.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
