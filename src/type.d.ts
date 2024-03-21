export interface destiniationtype {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface crewtype {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface technologytype {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
