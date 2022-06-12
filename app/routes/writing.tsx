import { LoaderFunction, useLoaderData } from "@remix-run/react";

import UnderConstruction from "~/components/util/UnderConstructions";
import useEnvironment from "~/hooks/useEnvironment";

export const loader: LoaderFunction = async ({ request }) => ({ request });

export default function Writing() {
  const { request } = useLoaderData();
  const { isDevMode } = useEnvironment(request);
  if (!isDevMode) {
    return <UnderConstruction />;
  }

  return <h1>Writing</h1>;
}
