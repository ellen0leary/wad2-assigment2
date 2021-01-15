export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovie = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcoming = () => {
    return fetch(
      '/api/movies/upcoming',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => console.log(res));
  }
  export const getMovieDetails = id => {
    return fetch(
       `/api/movies/${id}`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    ).then(res => res.json().then(console.log(res)));
  }

  export const addToFavourites = (userId, movieId) => {
    console.log(userId);
    console.log(movieId);
    return fetch(
      `api/users/${userId}/favourites/${movieId}`,{
        headers: {
          'Authorization': window.localStorage.getItem('token')
        },
        method: 'post',
        body: JSON.stringify({ "id": `${movieId}`})
    }
    ).then(res => res.json());
  };

  export const getFavourites = (userId) => {
    return fetch(
        `api/user/{userId}/favourites`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTrending = (userId) => {
    return fetch(
        `api/people/`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };