export default function useEnvironment(request: Request) {
  const isDevelopmentMode =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  const url = new URL(request.url);
  const previewProduction = url.searchParams.get("previewProduction");

  return {
    isDevMode: isDevelopmentMode && !(previewProduction === "true"),
  };
}
