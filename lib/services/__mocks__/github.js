const makeCodeIntoToken = async (code) => {
  // eslint-disable-next-line no-console
  console.log(code);
  return 'mock token for code';
};

const fetchGithubProfile = async (token) => {
  // eslint-disable-next-line no-console
  console.log(token);
  return {
    login: 'fake_github_profile',
    email: 'fake-email@example.com',
    avatar_url: 'https://www.placecage.com/gif/300/300',
  };
};

module.exports = { makeCodeIntoToken, fetchGithubProfile };
