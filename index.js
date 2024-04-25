
class HashMap{

    constructor(size){
        this.data=new Array(size).fill(null);
        this.size=size;
    }

    hash(key){

        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    secondary(i){
        return i*i;
    }

    set(key,value){
        let h=hash(key)%this.size;
        let i=1;

        while(this.data[h]!=null){
            if(key == this.data[h][0]){
                this.data[h].push([key,value]);
                return this.data;
            }
            else{
                h=(h+g(i++))%this.size;
            }
        }
        this.data[h].push([key,value]);
    }

}