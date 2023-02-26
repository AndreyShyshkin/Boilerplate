const isDev = process.env.NODE_ENV === 'development'
const environment = {
	apiUrl: isDev ? 'http://localhost:3000' : 'https://api.example.com',
}
module.exports = environment
