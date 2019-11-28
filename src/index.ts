import { Faker as FakerClass } from './faker';

const instance = new FakerClass();

export let Faker = instance;
export default instance;
