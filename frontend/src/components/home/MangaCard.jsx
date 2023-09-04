import MangaSingleCard from './MangaSingleCard';

const MangaCard = ({ mangas }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {mangas.map((item) => (
        <MangaSingleCard key={item._id} manga={item} />
      ))}
    </div>
  );
};

export default MangaCard;