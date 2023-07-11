module.exports = {
	index: async (req, res) => {
		try {
			res.render('index', {
				title: 'Express JS Berjalan',
			})
		} catch (error) {
			console.log(error)
		}
	},
}
