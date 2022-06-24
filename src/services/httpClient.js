const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjUyZDU5OWU5NDU3ZjM3ZTMwNzU4MGRjNDk2MzA5ZSIsInN1YiI6IjYyYjBmZTdhM2NkMTJjMDA2MmM3Yzk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QnWPRvz5gDeCG09bUMlTF5WDWgdMSxubDeuOdVt1i1M", 
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}