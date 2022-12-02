import { getOrders, getMetals, getSizes, getStyles } from "./database.js"
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const orders = getOrders()

const findTotalCost = (order) =>{
    let totalCost = 0

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    totalCost = foundStyle.price + foundSize.price + foundMetal.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>Order #${order.id} cost ${costString}</li>`
}


// const buildOrderListItem = (order) => {
  
//     return `<li>Order #${order.id} was placed at ${order.timestamp}</li>`
// }


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(findTotalCost)

    html += listItems.join("")
    html += "</ul>"

    return html
}

