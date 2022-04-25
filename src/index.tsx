import Link from "next/link";

export const mdxComponents = {
  a: ({ href, children, ...props }) => (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  ),
};
