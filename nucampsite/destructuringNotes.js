// Object destructuring 
let partner = { 
    image: "dumb.jpg",
    name: "retard",
    description: "destructuring is a dumb concept to teach to beginners"
} 

function output(image, name, description){
    console.log(`${image} - ${name} - ${description}`)
}

function oldway(p){
    const image = p.image;
    const name = p.name;
    const description = p.description;

    output(image, name, description);
}

function newway(p){
    const {image, name, description} = p;

    output(image, name, description);
}

function newnewway({image, name, description}){
    output(image, name, description);
}

//Now to test theses should all have the same outputs.
oldway(partner);
newway(partner);
newnewway(partner);


// Array destructuring
let array = [ 5, 6, 1, 3 ];

function aoldway(a){
    const five = a[0];
    const six = a[1];
    const one = a[2];
    const three = a[3];

    return six + three;
}

function anewway(a){
    const [five, six, one, three] = a;

    return six + three;
}

function anewnewway([five, six, one, three]){
    return six + three;
}

//Now to test theses should all have the same outputs.
aoldway(array);
anewway(array);
anewnewway(array);