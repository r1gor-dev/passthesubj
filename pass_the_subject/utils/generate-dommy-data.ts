import {faker} from '@faker-js/faker';
import {PostPtS, User} from "../types/postinfo";

export function createRandomFollower():User {
    const firstName = faker.person.firstName();
    const lastName  = faker.person.lastName();
    const name = firstName + " " + lastName;

    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        verified: false,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
    };

}
export function createRandomUser():User {
    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        verified: false,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
        followers: new Array(Math.floor(Math.random() * 10)).fill(0).map((_) => createRandomFollower()),
    };
}

export function createRandomPostPtS(): PostPtS {
    const author = createRandomUser();
    const mentionUser = createRandomUser();

    return{
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        image: Math.random() > 0.5 ? faker.image.url() : undefined,
        replies: new Array(Math.floor(Math.random() * 10)).fill(0).map((_) => ({
            id: faker.string.uuid(),
            author: createRandomUser(),
            content: faker.lorem.sentence(),
            likes: Math.floor(Math.random() * 1000),
            createdAt: faker.date.recent().toISOString(),
        })),
        repliesCount: Math.floor(Math.random() * 100),
        likesCount: Math.floor(Math.random() * 1000),
        mention: Math.random() > 0.5,
        mentionUser,
        createdAt: faker.date.recent().toISOString(),
    }
}

export function generatePostPtS(): PostPtS[] {
    return new Array(55).fill(0).map((_) => createRandomPostPtS());
}
