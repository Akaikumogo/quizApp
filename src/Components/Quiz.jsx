// eslint-disable-next-line react/prop-types
const Quiz = ({ quiz }) => {
  return (
    <div className="w-full h-[65%] flex justif-center items-center">
      <h1 className="text-[36px] mx-auto ">{quiz}</h1>
    </div>
  );
};

export default Quiz;
