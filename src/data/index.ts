import { directors } from "../constants";

export async function getDirectors() {
  return directors;
}

export async function getDirector(id: number) {
  let director = directors.find((director) => director.id === id);
  return director ?? null;
}
