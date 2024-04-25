
class HashMap{

    constructor(size){
        this.data=new Array(size).fill(null);
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
        let h=hash(key)%this.data.length;
        let i=1;

        while(this.data[h]!=null){
            if(key == this.data[h][0]){
                this.data[h].push([key,value]);
                return this.data;
            }
            else{
                h=(h+g(i++))%this.data.length;
            }
        }
        this.data[h].push([key,value]);
    }

    get(key){
        let h=hash(key)%this.data.length;
        let i=1;

        while(this.data[h][0]!=key){
            h=(h+g(i++))%this.data.length;
            if(i>=this.data.length)
                return null;
        }
        return this.data[h][1];
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
        let keyArr=new Array();
        let i=0;
        for(let j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=null)
            {
                keyArr[i++]=this.data[j][0];
            }
        }
        return keyArr;
    }

    values(){
        let keyArr=new Array();
        let i=0;
        for(let j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=null)
            {
                keyArr[i++]=this.data[j][1];
            }
        }
        return keyArr;
    }

    entries(){

    }
}