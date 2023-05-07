type Props = {
  params: {
    slug: string;
  };
};
const Pants = ({ params }: Props) => {
  return <div>{params.slug} product text</div>;
};

export default Pants;
