export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  const res = await fetch(
    `https://func-disney-clone.azurewebsites.net/api/getaisuggestion?term=${term}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24, // revalidate 24 hours
      },
    }
  );

  const message = await res.text();
  return Response.json({ message });
}
