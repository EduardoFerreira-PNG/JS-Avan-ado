class Bind {
    constructor(model, view, props){
        let proxy = ProxyFectory.create(model, props, model => 
            view.update(model));

            view.update(model);


            return proxy;

            
    }
}