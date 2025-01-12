import CardProps from "../interface/cardProps.tsx";
const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-[20px] w-[50%] mx-auto h-[90vh] mt-10 border-solid border-2 border-[#59DCF7] overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
