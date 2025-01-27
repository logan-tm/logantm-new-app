type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = (props: CardProps) => {
  // Tailwind taken from SailboatUI
  return (
    <div
      className={
        "mx-auto max-w-md rounded-lg bg-white shadow-xl border-1 border-teal-500 hover:shadow-2xl" +
        (props.className ? " " + props.className : "")
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
