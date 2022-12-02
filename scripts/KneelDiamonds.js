import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                    <div class="metals__types">
                    ${Metals()}
                    </div>
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                    <div class="sizes__types">
                    ${DiamondSizes()}
                    </div>
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                    <div class="styles__types">
                    ${JewelryStyles()}
                    </div>
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

