"use client";

type Props = {
  mainTitle?: string;
  subTitle?: string;
  containerClass?: string;
  mainTitleClass?: string;
  subTitleClass?: string;
};

const Heading = ({
  mainTitle,
  subTitle,
  containerClass,
  mainTitleClass,
  subTitleClass,
}: Props) => {
  return (
    <div className={`my-2 ${containerClass}`}>
      <h2
        className={`text-center text-neutral-600 font-bold text-lg ${mainTitleClass}`}
      >
        {mainTitle}
      </h2>
      <h3
        className={`text-center p-2 text-neutral-400 font-medium ${subTitleClass}`}
      >
        {subTitle}
      </h3>
    </div>
  );
};

export default Heading;