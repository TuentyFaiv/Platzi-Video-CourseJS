import gravatar from '../gravatar';

describe('Gravatar funciton', () => {
  it('Should return gravatar default url', () => {
    const email = 'ton@lli.com';
    const gravatarDefaultImage = "https://gravatar.com/avatar/"
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });
});