export default {
	data: () => ({
		tabs: ["Showroom", "Brand", "News&Events", "Lifestyle", "Worldwide"],
		secTabs: {
			Showroom: [
				'Passenger Cars',
				'Commercial Vehicles',
				'EV',
				'SPV',
			],
			Brand: ['Company', 'History', 'Philosophy', 'R&D', 'CRS', 'Service'],
			'News&Events': ['News', 'Events'],
			Lifestyle: [],
			Worldwide: [
				'Find A Dealer',
				'Book A Car'
			]
		},
		currenTab: "",
		currentSec: "",
	})
}