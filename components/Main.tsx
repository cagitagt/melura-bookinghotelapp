import Card from "./Card";

const Main = () => {
  return (
    <div className="max-w-6xl py-6 pb-20 px-4 mx-auto">
      <div className="flex flex-col gap-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;