const form = document.querySelector('form');
const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;

    const user = { name, price };
    saveProduct(user);
});

let saveProduct = async (user) => {
    try {
        await axios.post("http://localhost:5000/products", {
            product_name: user.name,
            product_price: user.price,
        });
    } catch (err) {
        console.log(err);
    }
    document.querySelector('#name').value = '';
    document.querySelector('#price').value = '';

    const createLi = (user) => {
        const li = document.createElement('li');
        // add user details to `li`
        li.textContent = `${user.product_name} - ${user.product_price}`;
        return li;
    };

    let appendToDOM = async (users) => {
        const ul = document.querySelector('ul');
        //iterate over all users
        users.map(user => {
            ul.appendChild(createLi(user));
        });
    };

    let getProducts = async () => {

        try {
            const response = await axios.get("http://localhost:5000/products");
            log('=====================')
            let users = response.data;
            console.log(`GET list users`, users);
            // append to DOM
            appendToDOM(users);
        } catch (err) {
            console.log(err);
        }
    }
    getProducts();
}