const blogs = document.getElementsByTagName('p');

// where to add
const section = document.getElementById('blog-section');

// create element
const p = document.createElement('p');
p.innerText = 'lolssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss lolssssssssssssssssssssssssssssssssssssssssssssssssss lolsssssssssssssssssssssssssssssssssssssssssssssss lolssssssssssssssss lolssssssssssssssssssssssss lolssssssssssssssssssssssssssssssssssssssssssssssssssssss';
section.appendChild(p);

// console.log(blogs);
function styles(blog) {
    blog.style.backgroundColor = 'steelblue';
    blog.style.fontSize = '20px';
    blog.style.padding = '15px';
    blog.style.borderRadius = '10px';
    blog.style.color = 'white';
}
for (const blog of blogs) {
    // console.log(blog);
    styles(blog);
}

// where to add 
const ul = document.getElementById('ul');

// create element || li
const li = document.createElement('li');
li.innerText = 'Friend 007';
ul.appendChild(li);


// if i wanted to add a class then
/* 
 blog.classList.add('blogOrClassName');
 */



const veritatis = document.getElementById('veritatis');
veritatis.style.color = 'red';

