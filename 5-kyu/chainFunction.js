function add(n){
    const chain =  (x) => add(x+n);
    chain.valueOf = () => n;
    return chain;
}