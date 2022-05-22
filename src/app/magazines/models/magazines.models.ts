export interface Magazine {
  id: string;
  name: string;
  issues: Issue[];
}

export interface Issue {
  id: string;
  month: number;
  year: number;
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  textContent: string;
  images: Image[];
}

export interface Image {
  id: string;
  fileName: string;
  caption: string;
}
