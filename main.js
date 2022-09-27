const usersContainer = document.querySelector('.container');
const dataUrl = 'https://jsonplaceholder.typicode.com/users';

const getData = async (dataUrl) => {
	const res = await fetch(dataUrl)
	const json = await res.json()
	return json
}



const fetchData = async () => {
	try{
		const data = await getData(dataUrl);

		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		const renderData = (data) => {
			usersContainer.innerHTML = data.map((user) => {
			const {
				address: {
					street,
					suite,
					city,
					zipcode,
				},
				company: {
					name: companyName,
					catchPhrase,
				},
				email,
				id,
				name,
				phone,
				website,
			} = user;
			return renderUser({id,name,companyName,city,street,suite,zipcode,catchPhrase,phone,website,email})
			}).join('')
		}

		renderData(data)
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





	}catch(error){
		console.log(error.message)
	}
}
fetchData()


const renderUser = (user) => {

	const {
		id,
		name,
		companyName,
		catchPhrase,
		city,
		street,
		suite,
		zipcode,
		website,
		email,
		phone,
	} = user;

	return `		<div class="user">
						<div class="user__header">
							<img src="" alt="">
							<p class="user__id">${id}</p>
							<p class="user__name">${name}</p>
						</div>
						<p class="user__company">${companyName}</p>
						<p class="user__phrase">${catchPhrase}</p>
						<div class="user__location">
							<p class="user__city">${city}</p>
							<p class="user__street">${street}</p>
							<p class="user__suite">${suite}</p>
							<p class="user__zipcode">${zipcode}</p>
							<p class="user__phone">${website}</p>
							<p class="user__email">${email}</p>
							<p class="user__website">${phone}</p>
						</div>
					</div>
	`
}





// 		const {
// 			address: {
// 				street,
// 				suite,
// 				city,
// 				zipcode,
// 			},
// 			company: {
// 				name: companyName,
// 				catchPhrase,
// 			},
// 			email,
// 			id,
// 			name,
// 			phone,
// 			website,
// 		} = user;


// 		userSample = {
// 			id,
// 			name,
// 			companyName,
// 			catchPhrase,
// 			city,
// 			street,
// 			suite,
// 			zipcode,

// 			website,
// 			phone,
// 			email,

// 		}