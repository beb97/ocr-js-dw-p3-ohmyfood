let entrees =
    [{
        "name":"Fricassée d'escargot",
        "desc":"Au piment d'Espelette ",
        "price":"25€"
    },
    {
        "name":"Foie gras de canard mi-cuit",
        "desc":"Et ses copeaux de truffe noire",
        "price":"35€"
    },
    {
        "name":"Oeuf au plat",
        "desc":"Assaisonné à la truffe sur lit de caviar",
        "price":"20€"
    }]

let plats=
    [{
        "name":"Filet de boeuf aux herbes",
        "desc":"Accompagné de sa ribambelle de légumes",
        "price":"40€"
    },
    {
        "name":"Parmentier de queue de boeuf",
        "desc":"À la truffe noire sur sa purée de panais",
        "price":"35€"
    },
    {
        "name":"Filet de turbot",
        "desc":"Aux agrumes",
        "price":"44€"
    }]

let desserts=
    [{
        "name":"Paris-Brest",
        "desc":"Revisité",
        "price":"18€"
    },
    {
        "name":"Macaron au chocolat d'exception ",
        "desc":"Et glace à la vanille de Madagascar",
        "price":"22€"
    },
    {
        "name":"Mousse au chocolat ",
        "desc":"Au piment d'Espelette et à la truffe noire",
        "price":"23€  "
    }]


append(entrees, "#entrees");
append(plats, "#plats");
append(desserts, "#desserts");

function append(array, anchor) {

    let temp = document.querySelector("#menu-template");

    array.forEach(entry => {
        let clone = temp.cloneNode(true);
        clone.removeAttribute('id');
        clone.querySelector(".item-text_title").innerHTML=entry.name;
        clone.querySelector(".item-text_desc").innerHTML=entry.desc;
        clone.querySelector(".item-price").innerHTML=entry.price;
        document.querySelector(anchor).appendChild(clone);
    })
}
