import { faker } from '@faker-js/faker';
import { Documentary, Genre } from '../types';

export const genres: Genre[] = [
  { id: '1', name: 'Nature', description: 'Explore the wonders of our natural world' },
  { id: '2', name: 'History', description: 'Journey through time and civilizations' },
  { id: '3', name: 'Science', description: 'Discover scientific breakthroughs and theories' },
  { id: '4', name: 'Technology', description: 'Latest innovations and digital transformation' },
  { id: '5', name: 'Social Issues', description: 'Contemporary challenges facing society' },
];

export const documentaries: Documentary[] = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  thumbnailUrl: faker.image.url(),
  duration: faker.number.int({ min: 30, max: 180 }),
  genre: faker.helpers.arrayElements(genres, { min: 1, max: 3 }).map(g => g.name),
  releaseYear: faker.number.int({ min: 2010, max: 2024 }),
  rating: faker.number.float({ min: 3, max: 5, precision: 0.1 }),
  views: faker.number.int({ min: 1000, max: 1000000 }),
  director: faker.person.fullName(),
  streamUrl: faker.internet.url(),
}));