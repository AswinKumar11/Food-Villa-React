export const ShimmerForPage = () => {
  return (
    <>
    <div className="bg-gray-200 m-3 p-3 h-14">
    </div>
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e,index) => {
          return (
            <div className="w-52 bg-gray-200 p-3 m-3 h-52" key={index}></div>
            )
        })}
    </div>
    </>
  );
};
export const ShimmerForSearch = () => {
  return <h1 className="font-bold">No Results on your search</h1>;
};
