import Test from "../_components/TestComponents";

const Page = () => {
  return (
    <div>
      <div>Second page</div>
      <Test too={20} hello="Helloooo" />
    </div>
  );
};
export default Page;
