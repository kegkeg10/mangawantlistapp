import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow  } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { useState } from 'react';
import MangaModal from './MangaModal';

const MangaSingleCard = ({manga}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div key={manga._id}
        className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {manga.publishYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{manga._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
            <h2 className='my-1'>{manga.title}</h2>
            </div>
            <div className=' gap-x-2 flex justify-start items-center'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{manga.author}</h2>
            </div>
            <div className='mt-4 p-4 flex justify-between items-center gap-x-2'>
            <BiShow
            className='text-3xl text-blue-800 hover:text-black cursor-pointer'
            onClick={() => setShowModal(true)}
            />
                <Link to={`/mangas/details/${manga._id}`}>
                    <BsInfoCircle className='text-2xl text-green-700' />
                </Link>
                <Link to={`/mangas/edit/${manga._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-500' />
                </Link>
                <Link to={`/mangas/delete/${manga._id}`}>
                    <AiOutlineEdit className='text-2xl text-red-500' />
                </Link>
            </div>
            {showModal && (
            <MangaModal manga={manga} onClose={() => setShowModal(false)} />
            )}
            </div>
    )
}

export default MangaSingleCard