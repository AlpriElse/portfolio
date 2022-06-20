import { Link, useLoaderData } from "@remix-run/react";

import UnderConstruction from "~/components/util/UnderConstructions";
import useEnvironment from "~/hooks/useEnvironment";

import * as mixtapePost from "./90s-mixtape.mdx";
import * as firstPost from "my-first-post.mdx";

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader = async ({ request }) => {
  return {
    posts: [postFromModule(mixtapePost), postFromModule(firstPost)],
    request,
  };
};

export default function Blog() {
  const { posts, request } = useLoaderData();
  const { isDevMode } = useEnvironment(request);

  if (!isDevMode) {
    return <UnderConstruction />;
  }

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
