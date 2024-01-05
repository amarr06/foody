export default function cart() {

    const allOrders = getOrders().reduce((accumulator, order) => {
        const existingIndex = accumulator.findIndex((group) => group[0].id === order.id);
        if (existingIndex !== -1) {
            accumulator[existingIndex].push(order);
        } else {
            accumulator.push([order]);
        }
        return accumulator;
    }, []);






    let cartHtml = '';
    let totalPrice = 0;

    if (allOrders.length === 0) {
        cartHtml = '<tr><td colspan="12"><h4 class="text-center m-5">Your cart is empty</h4></td></tr>';
    } else {
        allOrders.forEach((m) => {
            const price = getRandomNumber();
            const totalOrderPrice = price * m.length;

            cartHtml += `
            <tr>
                <td style="height: 150px;"><img style="height: 150px; width: 200px;" class="rounded rounded-1 mx-2" src="${m[0].image}" class="mx-2" alt="..."></td>
                <td><h5 class="my-5">${m[0].name}</h5></td>
                <td class="py-5">
                    <p>Price: <strong class="order-price">${totalOrderPrice} $</strong></p>
                    <p>Quantity: <strong id="quantity-${m[0].id}" data-quantity=${m[0].id}>${m.length}</strong></p>
                </td>
                <td><button class="btn btn-light iksi bg-danger bg-gradient bg-opacity-50 border border-black rounded-5 my-5 border-1 clear px-3 py-2" data-clear=${m[0].id}>Remove</button></td>
            </tr>
            `;

            totalPrice += totalOrderPrice;
        });

        totalPrice = Math.round(totalPrice * 100) / 100;
    }

    let confhtml = () => {
        if (allOrders.length !== 0)
            return `<button id="sure" class="btn btn-light bg-success bg-gradient bg-opacity-50 border border-black rounded-5 p-4 w-50  mb-5 border-1  ">Confirm your order</button>`;
        else
            return '';
    }

    document.getElementById("confirm").innerHTML = confhtml();

    addDynamicEventListener(document.body, 'click', '#sure', function (tel) {
        var question = "";
        var tel = prompt(question + 'Please enter your phone number.');
        var isConfirm = confirm(`Your order has been received. You are gone be contacted soon, Thank you. `)

    })

    const totalHtml = `
        <tr>
            <td colspan="12" class="text-center"><h4 class="m-5">Total Price: <strong id="totalPriceValue">${totalPrice}</strong> $</h4></td>
        </tr>
    `;
    document.getElementById("totalPrice").innerHTML = totalHtml;

    document.getElementById("cart").innerHTML = cartHtml;


    addDynamicEventListener(
        document.body,
        "click",
        ".clear",
        function (e) {
            const id = e.target.getAttribute("data-clear");
            const removedOrders = getOrders().filter(order => order.id === id);
            const removedPrice = getRandomNumber() * removedOrders.length;

            clearMeal(id);

            const updatedAllOrders = getOrders();
            const updatedMealOrders = updatedAllOrders.filter((order) => id === order.id);
            document.getElementById(`quantity-${id}`).innerText = updatedMealOrders.length;

            totalPrice -= removedPrice;

            document.getElementById("totalPriceValue").innerText = totalPrice;

            const updatedCartHtml = getCartHtml(updatedAllOrders);
            document.getElementById("cart").innerHTML = updatedCartHtml;
        }
    );

    function getCartHtml(orders) {
        let html = '';
        if (orders.length === 0) {
            html = '<tr><td colspan="12" class="mx-5 p-5 text-center"><h4>Your cart is empty</h4></td></tr>';
        } else {
            orders.forEach((m) => {
                const price = getRandomNumber();
                const totalOrderPrice = price * m.length;

                html += `
                <tr>
                    <td style="height: 150px;"><img style="height: 150px; width: 200px;" src="${m[0].image}" class="mx-2" alt="..."></td>
                    <td><h5 class="my-5">${m[0].name}</h5></td>
                    <td class="py-5">
                        <p>Price: <strong class="order-price">${totalOrderPrice} $</strong></p>
                        <p>Quantity: <strong id="quantity-${m[0].id}" data-quantity=${m[0].id}>${m.length}</strong></p>
                    </td>
                    <td><button class="btn btn-light iksi bg-danger bg-gradient bg-opacity-50 border border-black rounded-5 my-5 border-1 clear px-3 py-2" data-clear=${m[0].id}>Remove</button></td>
                </tr>
                `;

                totalPrice += totalOrderPrice;
            });
        }
        return html;
    }
}
