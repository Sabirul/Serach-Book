const ShowBookDetails = document.getElementById('show-details');
document.getElementById('submit').addEventListener('click', function(){

    const text = document.getElementById('search-book').value;
    document.getElementById('search-book').value ="";
    const url = `https://openlibrary.org/search.json?q=${text}`;

    fetch(url)
    .then(res => res.json())
    .then(data => ShowBook(data.docs))
})

const BookName = [];
const FirstPublish = [];
const Author = [];
const NumberOfPage = [];


const ShowBook = data =>{

    const MainSection = document.getElementById('show-book');
    MainSection.innerHTML ="";
    ShowBookDetails.innerHTML ='';

    data.forEach((book, index) =>{
        // console.log(index);
        BookName.push(book.title);
        FirstPublish.push(book.first_publish_year);
        Author.push(book.author_name);
        NumberOfPage.push(book.number_of_pages_median);


        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML =`
        <div class="col ">
        <div  class="card bg-info" style="width: 18rem;">
            <div onclick="ShowDetails(${index})" class="card-body">
              <h5 id ="${book.title}" class="card-title">${book.title.substring(0,20)}</h5>
              <h6 class="card-subtitle mb-2 text-muted text-white">Author: ${book.author_name[0]}</h6>
            </div>
          </div>
    </div>
        
        `
        MainSection.appendChild(div);
        
    })  
}

const ShowDetails = (x)=>{

    
    ShowBookDetails.innerHTML ='';

    ShowBookDetails.classList.add('design');
    const div = document.createElement('div');
    div.innerHTML = `
    <h4>Book Name: ${BookName[x]}</h4>
    <h5>Author: ${Author[x]}</h5>
    <h6>Publish: ${FirstPublish[x]}</h6>
    <p>Number of Page: ${NumberOfPage[x]}</p>
    
    `

    ShowBookDetails.appendChild(div);
}