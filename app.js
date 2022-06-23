    /* ESTA CLASE CONTIENE LAS PROPIEDADES DEL PRODUCTO A INGRESAR  */
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
    /* ESTA CLASE CONTIENE LA INTERFAZ DE USUARIO */
class UI{
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">  
                <div class="card-body">
                    <strong>Nombre del Producto: </strong>${product.name}
                    <strong>Precio del Producto: </strong>${product.price}
                    <strong>Año del Producto: </strong>${product.year}
                    <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                    </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset();

    }

    deleteProdcut(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}` ;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App'); 
        container.insertBefore(div, app)
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
    }
}




        /* EVENTOS DEL DOM */
document.getElementById('product-form')
        .addEventListener('submit', e => {  
            e.preventDefault()
            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const year = document.getElementById('year').value;
            
            const product = new Product(name, price, year);

            const ui = new UI();

     
            if (name === "" || price === "" || year === "") {
                ui.showMessage("Por favor inserta todos los campos", "danger");
            }

            ui.addProduct(product);
            ui.showMessage('Producto agregado satisfactoriamente', 'success');
            ui.resetForm();

          
            
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProdcut(e.target)
    e.preventDefault();
})