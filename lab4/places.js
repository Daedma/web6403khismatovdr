document.addEventListener('DOMContentLoaded', function() {
	fetch('http://localhost:8000/lab4/data')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			const table = document.getElementById('mushroom-places-table');
			data.forEach(item => {
				const row = document.createElement('tr');
				row.innerHTML = `
					<td><a href="${item.mapLink}" target="_blank">${item.place}</a></td>
					<td>${item.description}</td>
					<td>${item.season}</td>
				`;
				table.appendChild(row);
			});
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});
});