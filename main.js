
window.onload = function(){
	let para = document.getElementById('quote');
	
	//get quote
	fetch('https://favqs.com/api/qotd')
		.then(response => response.json())
		.then(data => {
			let author = data.quote.author;
			let quote = data.quote.body;
			
			let titleNode = document.createElement('h1');
			titleNode.innerText = 'Quote of the day';
			let quoteNode = document.createElement('quote');
			quoteNode.innerText = quote;
			let authorNode = document.createElement('p');
			authorNode.innerText = 'Author: '+author;
			let div = document.createElement('div');
			div.appendChild(titleNode);
			div.appendChild(quoteNode);
			div.appendChild(authorNode);
			document.getElementById('right').appendChild(div);
		});
		
	//get image
	fetch('https://api.nasa.gov/planetary/apod?api_key=KlJ4cz5Iolzoo1dwVIxqTe4I4oEXoJxfIvCdHGHx')
		.then(response => response.json())
		.then(data => {
			let description = data.explanation;
			let imgUrl = data.url;
			let date = data.date;
			let author = data.copyright;
			
			//img
			let imgNode = document.createElement('IMG');
			imgNode.src = imgUrl;
			let div = document.createElement('div');
			document.getElementById('container').appendChild(imgNode);
			//img info
			let titleNode = document.createElement('h2');
			titleNode.innerText = 'Image Info';
			let descNode = document.createElement('p');
			descNode.innerText = description;
			let authorNode = document.createElement('p');
			authorNode.innerText = 'Author: '+author;
			let dateNode = document.createElement('p');
			dateNode.innerText = 'Date: '+date;
			
			let div2 = document.createElement('div');
			div2.appendChild(titleNode);
			div2.appendChild(descNode);
			div2.appendChild(authorNode);
			div2.appendChild(dateNode);
			document.getElementById('right').appendChild(div2);
		});
}