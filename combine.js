const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const xW = 400; //Width of output extraction images
const yW = 450; //Height of output extraction images

async function main(){
	const dir = fs.readdirSync('./input/screenshots')
		.sort((a, b) => parseInt(a.split('.')[0]) - parseInt(b.split('.')[0]));
	const x = Math.ceil(Math.sqrt(dir.length));
	const y = x + Number(x === Math.sqrt(dir.length));

	const canvas = createCanvas(x * xW, y * yW);
	const context = canvas.getContext('2d');

	let curX = 0;
	let curY = 0;
	for (const img of dir){
		const image = await loadImage('./input/screenshots/' + img);
		context.drawImage(
			image,		//The screenshot taken
			1325,	//The leftmost pixel to extract image from
			135,	//The topmost pixel to extract image from
			xW,			//Line 4
			yW,			//Line 5
			curX,		//Current X position to draw (don't edit below this)
			curY,		//Current Y position to draw
			xW,			//Line 4
			yW			//Line 5
		);

		console.log('Drew ' + img);

		curX += xW;
		if (curX === x * xW) {
			curX = 0;
			curY += yW;
		}
	}

	fs.writeFileSync('./output.png', canvas.toBuffer('image/png'));
}

main();