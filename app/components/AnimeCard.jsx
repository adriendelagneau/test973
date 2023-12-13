import Image from "next/image";


function AnimeCard({ anime }) {
  return (
    <div className="max-w-sm rounded relative w-full border-2">
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.imgUrl}
          alt={anime.title}
          fill
          className="rounded-xl"
        />
      </div>
    
      </div>
  );
}

export default AnimeCard;
