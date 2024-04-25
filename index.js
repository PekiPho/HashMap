
class HashMap{

    constructor(size){
        this.data=new Array(size).fill(null);
        this.size=size;
        const loadFactor=0.75;
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

    get(key){

    }

    has(key){

    }

    remove(key){

    }

    length(){
        let count = 0;
        for(let i=0;i<this.data.length;i++)
        {
            if(this.data[i]!=null)
            {
                count++;
            }
        }
        return count;
    }

    clear(){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]!=null)
                this.data[i]=null;
        }
    }

    keys(){

    }

    values(){

    }

    entries(){

    }
}