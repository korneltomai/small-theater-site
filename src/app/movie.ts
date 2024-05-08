import { Screening } from './screening' 

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseTime: string;
    director: string;
    genres: string[];
    runningTime: number;
    imagePath: string;
    url: string;
  }
  