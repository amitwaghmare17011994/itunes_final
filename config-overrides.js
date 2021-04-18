const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@pages': 'src/Pages',
    '@images' : 'src/Assets/images',
    '@api':'src/Apis/',
    '@components':'src/Components',
    '@atoms':'src/Atoms',
    '@utils':'src/Utils'
  })(config)

  return config
}