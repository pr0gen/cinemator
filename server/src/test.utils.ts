import { AuthGuard } from '@nestjs/passport';
import { Repository } from 'typeorm';

export type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};

export class MockAuthGuard extends AuthGuard('test') {

}

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
    save: jest.fn(entity => entity),
    delete: jest.fn(entity => entity),
    findById: jest.fn(entity => entity),
    // ...
}));

