import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: {opacity: 1}
  
}


function AnimeCard({ anime, index }) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (index % 8) * 0.1,
        ease: "easeInOut",
        duration: 0.5
      }}
      className="max-w-sm rounded relative w-full border-2"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.imgUrl}
          alt={anime.title}
          fill
          className="rounded-xl"
        />
      </div>
    
      </MotionDiv>
  );
}

export default AnimeCard;
