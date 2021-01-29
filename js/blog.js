
// blog card data

const blogIMG = ['../assets/blogs/discord-dp.jpeg', '../assets/blogs/blog29-1.webp', '../assets/blogs/blog1-1.webp']
const blogTitle = ['<div>How to Use Discord to Market Your Business?</div>', '<div>How Small Businesses Can Take Advantage of Instagram Reels?</div>', '<div>Is the organic reach of LinkedIn going down? – Here’s the proof</div>']
const blogLink = ['./how-to-use-discord-to-market-your-business.html','./how-small-businesses-can-take-advantage-of-instagram-reels.html','./is-the-organic-reach-of-linkedin-going-down-here-s-the-proof.html']

document.getElementById('first-blog-card-img').src = blogIMG[0]
document.getElementById('first-blog-card-title').innerHTML = blogTitle[0]
document.getElementById('first-blog-card-title').href = blogLink[0]

document.getElementById('first-blog-card-img2').src = blogIMG[1]
document.getElementById('first-blog-card-title2').innerHTML = blogTitle[1]
document.getElementById('first-blog-card-title2').href = blogLink[1]

document.getElementById('first-blog-card-img3').src = blogIMG[2]
document.getElementById('first-blog-card-title3').innerHTML = blogTitle[2]
document.getElementById('first-blog-card-title3').href = blogLink[2]
