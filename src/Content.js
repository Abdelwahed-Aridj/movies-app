import React, { useState } from 'react';
import axios from 'axios';
import { apiKey } from './API';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});

  const onSearchHandler = () => {
    if (!searchTerm) {
      return;
    }

    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`,
    }).then((response) => {
      setData(response.data);
    });
    setSearchTerm('');
  };

  return (
    <div className={'bg-gray-900 h-screen w-full pt-7'}>
      <div className='w-full flex items-center justify-center'>
        <input
          type='text'
          placeholder='Type movie name...'
          className='bg-gray-600 text-[20px] mr-4 outline-none rounded-md p-2 w-[40%] text-white'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className='border border-white rounded-md p-2 text-white font-bold'
          onClick={onSearchHandler}
        >
          Search
        </button>
      </div>

      {Object.keys(data).length > 0 && (
        <div className='mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap'>
          <div>
            <img
              src={data.Poster}
              alt='#'
              className='border border-white rounded-lg'
            />
          </div>
          <div className=' p-2 ml-6 bg-slate-800 m-2 rounded-md'>
            <h1>Title: {data.Title}</h1>
            <div className='pt-2'></div>
            <p>Director: {data.Director}</p>
            <div className='pt-2'></div>
            <p>Genre: {data.Genre}</p>
            <div className='pt-2'></div>
            <p>Year: {data.Year}</p>
            <div className='pt-2'></div>
            <p>Country: {data.Country}</p>
            <div className='pt-2'></div>
            <p>Actors: {data.Actors}</p>
            <div className='pt-2'></div>
            <p>Language: {data.Language}</p>
            <div className='pt-2'></div>
            <p>Rating: {data.imdbRating}</p>
            <div className='pt-2'></div>
            <p>Plot: {data.Plot}</p>
            <div className='pt-2'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
