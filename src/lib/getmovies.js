export const getMovieGenerList = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
        }
      };
      
      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.genres; // Return the genres array
    } catch (error) {
        console.error('Failed to fetch genres:', error);
        return [];
    }
}


export const DiscoverMovies = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data)
        return data.results; // Return the genres array
    } catch (error) {
        console.error('Failed to fetch genres:', error);
        return [];
    }
      
     
}


export const NowPlayingMovies = async(pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  try {
    const response = await 
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
}

export const GetPopularMovies = async(pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
}

export const GetTopRatedMovies = async (pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
}

export const GetUpcomingMovies = async(pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
  
    

}



export const GetSearchMovie = async (query,pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsIm5iZiI6MTcxOTQ5NDI0My4xNDg0OTksInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dty-Wz8Meb9cjYnzIYOF_4FLuVPBOg4Y1HjwCW1b_kc'
    }
  };
  
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
  
}


export const GetmoviesforGener = async (id,pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsIm5iZiI6MTcxOTQ5NDI0My4xNDg0OTksInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dty-Wz8Meb9cjYnzIYOF_4FLuVPBOg4Y1HjwCW1b_kc'
    }
  };
  
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pg}&sort_by=popularity.desc&with_genres=${id}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
  
}


export const GetmovieDetails = async (id)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsIm5iZiI6MTcxOTQ5NDI0My4xNDg0OTksInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dty-Wz8Meb9cjYnzIYOF_4FLuVPBOg4Y1HjwCW1b_kc'
    }
  };
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch mpovie details:', error);
    return [];
}
  
}



export const GetSImilarMovies = async(id,pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsIm5iZiI6MTcxOTY1MDMyMC4xMjE2OTksInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtJXCekfyI-WJBNe9x5haZuCIBG3cywBRQ7rIziHSTU'
    }
  };
  
  
   
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${pg}`, options)
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data)
      return data; // Return the genres array
  } catch (error) {
      console.error('Failed to fetch mpovie details:', error);
      return [];
  }
}

export const GetRecommendation = async (id,pg)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsIm5iZiI6MTcxOTY1MDMyMC4xMjE2OTksInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtJXCekfyI-WJBNe9x5haZuCIBG3cywBRQ7rIziHSTU'
    }
  };
 
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=${pg}`, options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; // Return the genres array
} catch (error) {
    console.error('Failed to fetch mpovie details:', error);
    return [];
}
}