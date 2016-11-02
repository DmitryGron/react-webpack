import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {
        let cat = new Cat('yo');
        console.log(cat.name);

        try{
            cat.meow = function(){console.log('hohoh')};
        }catch(e){
            console.error('throws an error because of the "readonly" decorator');
        }
        
        console.log(Cat.isSupercat);        
    }

    render() {
        return (
            <div>
                <h1>Welcome Home</h1>                                
            </div>
        )
    }
}

// some decorators
function supercat(target) {
    target.isSupercat = true;
    target.power = 'flight';
}

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

@supercat
class Cat {
    constructor(name){
        this.name = name;
    }
    @readonly
    meow(){
        return 'yo';
    }
}