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
		thirdTabs: {
			'Passenger Cars': [
				'J7',
				'S7',
				'S7pro',
				'S5',
				'S4',
				'JS4',
				'S3',
				'M4'
			]
		},
		currentTab: "",
		currentSec: "",
	})
}
