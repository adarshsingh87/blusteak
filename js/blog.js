
// blog card data

const blogIMG = [
  '../assets/blogs/quora-thumb.jpeg',
  '../assets/case-studies/WhatsApp Image 2021-04-01 at 4.24.29 PM.jpeg',
  '../assets/blogs/01.jpg',
]
const blogTitle = [
  '<div>How to Use Quora Ads to Promote Your Business?</div>',
  '<div>[Case Study] WhatsApp vs Telegram: for Business Marketing</div>',
  '<div>Is Twitter Spaces the Clubhouse for Android?</div>',
]
const blogLink = [
  './How-to-Use-Quora-Ads-to-Promote-Your-Business.html',
  './whatsapp-v-telegram.html',
  './Is-Twitter-Spaces-the-Clubhouse-for-Android.html',
]

document.getElementById('first-blog-card-img').src = blogIMG[0]
document.getElementById('first-blog-card-title').innerHTML = blogTitle[0]
document.getElementById('first-blog-card-title').href = blogLink[0]

document.getElementById('first-blog-card-img2').src = blogIMG[1]
document.getElementById('first-blog-card-title2').innerHTML = blogTitle[1]
document.getElementById('first-blog-card-title2').href = blogLink[1]

document.getElementById('first-blog-card-img3').src = blogIMG[2]
document.getElementById('first-blog-card-title3').innerHTML = blogTitle[2]
document.getElementById('first-blog-card-title3').href = blogLink[2]

// made by @adarshsingh87
