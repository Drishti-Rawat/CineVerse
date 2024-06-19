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


export const searchMoviesWithKeyword = async (term)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${term}&page=1`, options)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data.results; // Return the genres array
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


export const NowPlayingMovies = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  try {
    const response = await 
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data.results; // Return the genres array
} catch (error) {
    console.error('Failed to fetch genres:', error);
    return [];
}
}

export const GetPopularMovies = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
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

export const GetTopRatedMovies = async ()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  
  
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
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

export const GetUpcomingMovies = async()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWU0ZTBhNzMyNzE4ZjRmZjVjZmEyMDY2YTk0ZjY3NyIsInN1YiI6IjY2NzExYmEwMTMwNWZiOWMxODNmMDc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Th3xlBauwMmMoqtYCdAmelzXVQ9takbg9pWoSNj5exM'
    }
  };
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
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