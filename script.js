 
 function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const plus = element.querySelector('.plus');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        plus.textContent = '+';
    } else {
        answer.style.display = 'block';
        plus.textContent = '-';
    }
}


const blogData = {
general: [
{ title: "Understanding General Dentistry", date: "5th Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Basic Oral Health Tips", date: "10th Jan 2024", readTime: "2 min read", imgSrc: "image/blog(1).png" },
{ title: "How to Prevent Cavities", date: "15th Mar 2024", readTime: "2 min read", imgSrc: "image/blog(1).png" },
{ title: "Importance of Regular Checkups", date: "25th Apr 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Tips for Healthy Gums", date: "2nd May 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "How to Prevent Cavities", date: "15th Mar 2024", readTime: "2 min read", imgSrc: "image/blog(1).png" },
{ title: "Importance of Regular Checkups", date: "25th Apr 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Tips for Healthy Gums", date: "2nd May 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Signs of Oral Issues", date: "15th May 2024", readTime: "2 min read", imgSrc: "image/blog(1).png" }
],
cosmetics: [
{ title: "Cosmetic Dentistry: Smile Makeover", date: "1st Mar 2024", readTime: "4 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" },
{ title: "Cosmetic Dentistry: Smile Makeover", date: "1st Mar 2024", readTime: "4 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" },
{ title: "Teeth Whitening: What to Expect", date: "10th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(2).png" }
],
crowns: [
{ title: "Dry Sockets Demystified", date: "12th Feb 2024", readTime: "2 min read", imgSrc: "image/blog(3).png" },                                                                
{ title: "Crowns & Bridges: What's the Difference?", date: "18th Jan 2024", readTime: "3 min read", imgSrc: "image/blog(3).png" },
{ title: "When to Consider Crowns?", date: "2nd Mar 2024", readTime: "4 min read", imgSrc: "image/blog(3).png" }
],
nutrition: [
{ title: "Nutrition & Oral Health", date: "25th Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Nutrition & Oral Health", date: "25th Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Nutrition & Oral Health", date: "25th Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Nutrition & Oral Health", date: "25th Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" }
],
oral: [
{ title: "All About Oral Surgery", date: "1st Apr 2024", readTime: "4 min read", imgSrc: "image/blog(1).png" },
{ title: "All About Oral Surgery", date: "1st Apr 2024", readTime: "4 min read", imgSrc: "image/blog(1).png" },
{ title: "All About Oral Surgery", date: "1st Apr 2024", readTime: "4 min read", imgSrc: "image/blog(1).png" },
{ title: "All About Oral Surgery", date: "1st Apr 2024", readTime: "4 min read", imgSrc: "image/blog(1).png" }
],
root: [
{ title: "Root Canal Treatment Explained", date: "14th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Root Canal Treatment Explained", date: "14th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Root Canal Treatment Explained", date: "14th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Root Canal Treatment Explained", date: "14th Mar 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" }
],
implants: [
{ title: "Dental Implants vs Dentures", date: "22nd Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Dental Implants vs Dentures", date: "22nd Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Dental Implants vs Dentures", date: "22nd Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" },
{ title: "Dental Implants vs Dentures", date: "22nd Feb 2024", readTime: "3 min read", imgSrc: "image/blog(1).png" }
]
};

let currentCategory = 'general';
 
let articleIndex = 0;
 
const articlesPerPage = 6; 



function renderArticles(category, startIndex = 0, count = articlesPerPage) {
const blogGrid = document.getElementById("blogGrid");

const articles = blogData[category].slice(startIndex, startIndex + count);
 


articles.forEach(article => {
const blogItem = `
<div class="blog-item">
    <img src="${article.imgSrc}" alt="Blog Image">
    <div class="blog-details">
        <h2>${article.title}</h2>
        <p>${article.date} | ${article.readTime}</p>
    </div>
</div>`;
blogGrid.innerHTML += blogItem;
});


if (startIndex + count >= blogData[category].length) {
document.getElementById("loadMore").style.display = 'none'; 

} else {
document.getElementById("loadMore").style.display = 'block'; 

}
}


document.querySelectorAll('.category-menu span').forEach(span => {
span.addEventListener('click', (e) => {
document.querySelector('.category-menu .active').classList.remove('active');
e.target.classList.add('active');
currentCategory = e.target.dataset.category;
articleIndex = 0; 

document.getElementById("blogGrid").innerHTML = ''; 

renderArticles(currentCategory); 

});
});


document.getElementById("loadMore").addEventListener('click', (e) => {
e.preventDefault();
articleIndex += articlesPerPage; 

renderArticles(currentCategory, articleIndex); 

});


document.querySelector(`[data-category="general"]`).classList.add('active');
 
renderArticles(currentCategory);
 

document.getElementById('helpBtn').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    var contactContainer = document.getElementById('contactContainer');
    
    
    if (contactContainer.style.display === 'block') {
        contactContainer.style.display = 'none';
    } else {
        contactContainer.style.display = 'block';
    }
});

document.getElementById('treatmentsBtn').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    var treatmentCard = document.getElementById('treatmentCard');
    
    
    if (treatmentCard.style.display === 'block') {
        treatmentCard.style.display = 'none';
    } else {
        treatmentCard.style.display = 'block';
    }
});

document.querySelector('.book-btn').addEventListener('click', function() {
    
    document.getElementById('popup-container').style.display = 'flex';
    document.getElementById('form2-popup').classList.remove('hidden');
    document.getElementById('form3-popup').classList.add('hidden');
  });
  
  document.getElementById('next-btn').addEventListener('click', function() {
    
    document.getElementById('form2-popup').classList.add('hidden');
    document.getElementById('form3-popup').classList.remove('hidden');
  });
  
  document.querySelector('#form3-popup button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    
    document.getElementById('popup-container').style.display = 'none';
    
    
    document.querySelector('form').reset();
  });
  
