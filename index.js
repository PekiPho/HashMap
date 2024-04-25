
class HashMap{

    constructor(size){
        this.data=new Array(size);
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
        let h= this.hash(key)%this.data.length;
        let i=1;
        var obj={};

        while(this.data[h]!=null){
            if(key == this.data[h][0]){
                obj[0]=key;
                obj[1]=value;
                this.data[h]=obj;
                return this.data;
            }
            else{
                h=(h+this.g(i++))%this.data.length;
            }
        }
        obj[0]=key;
        obj[1]=value;
        this.data[h]= obj;
        return this.data;
    }

    get(key){
        let h=this.hash(key)%this.data.length;
        let i=1;

        while(this.data[h][0]!=key){
            h=(h+this.g(i++))%this.data.length;
            if(i>=this.data.length)
                return null;
        }
        return this.data[h][1];
    }

    has(key){
        var h=this.hash(key);
        var i=1;

        while(this.data[h][0]!=key){
            h=(h+this.g(i++))%this.data.length;
            if(i>=this.data.length)
                return false;
        }
        return true;
    }

    remove(key){

    }

    length(){
        var count = 0;
        for(var i=0;i<this.data.length;i++)
        {
            if(this.data[i]!=null)
            {
                count++;
            }
        }
        return count;
    }

    clear(){
        for(var i=0;i<this.data.length;i++){
            if(this.data[i]!=null)
                this.data[i]=null;
        }
    }

    keys(){
        var keyArr=new Array();
        var i=0;
        for(var j=0;j<this.data.length;j++)
        {
            if(this.data[j]!=null)
            {
                keyArr[i++]=this.data[j][0];
            }
        }
        return keyArr;
    }

    values(){
        var keyArr=new Array();
        var i=0;
        for(var j=0;j<this.data.length;j++)
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

let map = new HashMap(64);
map.set("Carlos",3);
map.set("Luke",5);
map.set("Carla",4);

console.log(map.length());
console.log(map.keys());