//assignment 1

function delayedResult(n1, n2, delayTime, callback){
    const result = n1 + n2;
    return setTimeout( callback(result), delayTime )
}

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); 

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
});

//assignment 2
let data = [] ;

function ajax (src, callback) {
    axios.get(src)
        .then((res) =>{
            data = res.data ; 
            callback(data)
        })
        .catch((err) =>{
            console.error(err)
        })
} 


function render(data){
    const app = document.querySelector('.app');
    const container = document.createElement('ul');
    container.classList.add('container');

    data.forEach(product => {
        const list = document.createElement('li');
        const content = document.createElement('p');
        const price = document.createElement('span');
        list.classList.add('list');
        content.textContent = `${product.name} 是${product.description}`
        price.textContent = `NT $${product.price}`
        list.appendChild(content)
        list.appendChild(price)
        container.appendChild(list);
    });
    app.appendChild(container);
} 

ajax( "https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response){render(response); })