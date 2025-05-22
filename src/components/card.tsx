type CardData = {
  image: string;
  title: string;
  subtitle: string;
};

function Card({ image, title, subtitle }: CardData) {
  return (
    <div className="rounded-lg lg:w-[294px]">
      <img
        src={image}
        alt={title}
        className="w-full rounded-lg h-56 sm:h-64 md:h-72  lg:h-[360px] lg:pb-2 object-cover"
      />
      <div className="pt-2">
        <h3 className="text-white mb-2 font-bold text-lg sm:text-xl md:text-[20px] leading-[125%]">
          {title}
        </h3>
        <p className="text-gray-400  font-normal text-sm sm:text-base leading-[150%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Card;
