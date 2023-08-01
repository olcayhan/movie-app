export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string | null;
  createdAt: string;
  id: string;
  updatedAt: string;
  url: string;
}

export interface AuthorDetails {
  avatar_path: string | null;
  name: string | null;
  rating: string | null;
  usernames: string | null;
}
