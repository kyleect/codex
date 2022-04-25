import { allBeings, Being } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "src";

export async function getStaticPaths() {
  const paths = allBeings.map((being) => being.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const being = allBeings.find((being) => being.name === params.slug);
  return {
    props: {
      being,
    },
  };
}

type Props = {
  being: Being;
};

const ViewBeing = ({ being }: Props) => {
  const MDX = useMDXComponent(being.body.code);

  return (
    <>
      <h2>Beings</h2>

      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h3 className="mb-1 text-3xl font-bold">{being.name}</h3>
        </div>
        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewBeing;
