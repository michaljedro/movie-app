export enum MovieAcctionTypes {
  GET_MOVIES = "GET_MOVIES",
}

export type Movie = {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

export type MovieAction = {
  type: MovieAcctionTypes.GET_MOVIES;
  payload: Movie[];
};
