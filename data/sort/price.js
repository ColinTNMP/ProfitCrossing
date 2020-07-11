/* Sorter tool: price (STP)
 *
 * Loads in 'main.json' then sorts entries by price (fallback: alphabetical). 
 * The sort result is JSON-ified into 'price.json'. 'main.json' isn't changed.
*/

var sort_price_array = [];

function sort_price_proto_byPrice(elem1, elem2) {
    if (elem1[0]  > elem2[0]) return  1;
    if (elem1[0] == elem2[0]) return  0;
    if (elem1[0]  < elem2[0]) return -1;
}

function sort_price_proto_byName(elem1, elem2) {
    if (elem1[0][0]  < elem2[0][0]) return  1;
    if (elem1[0][0] == elem2[0][0]) return  0;
    if (elem1[0][0]  > elem2[0][0]) return -1;
}

function sort_price_proto_prepare(section) {
    for (let i of section) 
        let price = i[1].price;
        let index = sort_price_array.findIndex( (elem) => (elem[0] == price) );
        if (index != -1) {
            sort_price_array[index][1].push(i);
        } else {
            sort_price_array.push([price, [i]);
        }
    }
    
    return;
}

function sort_price_proto_finish(section) {
    for (let i of sort_price_array)
        for (let j of i[1])
            section.push[j];
    
    return;
}

function sort_price_proto_sort(src, dest) {
    sort_price_proto_prepare(src);
    
    sort_price_array.sort(sort_price_proto_byPrice);
    
    for (let i of sort_price_array)
        i[1].sort(sort_price_proto_byName);
    
    sort_price_proto_finish(dest);
    
    return;
}

function sort_price() {
    let result = { fish: [], bugs: [] };
    
    sort_price_proto_sort(mainJSON.fish, result.fish);
    sort_price_proto_sort(mainJSON.bugs, result.bugs);
    
    let newJSON = JSON.stringify(result);
    let file    = new File([newJSON], "price.json", { type: "text/plain" });
    let iframe  = document.createNewElement("iframe");
        iframe.setAttribute("style", "display:none;");
        iframe.setAttribute("src", URL.createObjectURL(file));
    
    document.appendChild(iframe);
    
    return;
}