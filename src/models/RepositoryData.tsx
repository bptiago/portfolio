export interface RepositoryData {
  name: string;
  description?: string;
  html_url: string;
  owner: {
    login: string;
  };
}
