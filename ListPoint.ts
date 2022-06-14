import {Student} from "./Student";

export class ListPoint<T>{
    head:Student<T>|null;
    tail:Student<T>|null;
    size:number;
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insertFirst(name:string,score:number):void{
        let node = new Student(name,score);
        node.next=this.head;
        this.head=node;
        if(!this.tail){
            this.tail=node;
        }
        this.size++;
    }
    insertLast(name:string,score:number):void{
        if(!this.tail) {
            this.insertFirst(name,score);
        }
        else{
            let node=new Student(name,score);
            this.tail.next=node;
            this.tail=node;
            this.size++;
        }
    }
    showList():Student<T>[]{
        let listPoint:Student<T>[]=[];
        let pointRun=this.head;
        while (pointRun!==null){
            listPoint.push(pointRun);
            pointRun=pointRun.next;
        }
        return listPoint;
    }
    totalStudentsFail():number{
        let count=0;
        let pointRun=this.head;
        while (pointRun!==null){
            if(pointRun.score<=5){
                count++;
            }
            pointRun=pointRun.next;
        }
        return count;
    }
    listStudentMaxScore():Student<T>[]{
        let listPointMax:Student<T>[]=[];
        let pointRun=this.head;
        while (pointRun!==null){
            if(pointRun.score>=8){
                listPointMax.push(pointRun);
            }
            pointRun=pointRun.next;
        }
        return listPointMax;
    }
    findByName(name:string){
        let ListFineByName:Student<T>[]=[];
        let pointRun=this.head;
        while (pointRun!==null){
            if(pointRun.name==name){
                ListFineByName.push(pointRun);
            }
            pointRun=pointRun.next;
        }
        return ListFineByName;
    }
}