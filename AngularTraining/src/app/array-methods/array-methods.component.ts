import { Component } from '@angular/core';
import { ConcatData1, ConcatData2, CopyWithinData, Data1, Data2, EveryData, FillData, FilterData, FindData, FindIndexData, FlatData, FlatMapData, ForEachData, IncludesData, IndexOfData, JoinData, KeysData, LastIndexOfData, MapData, PopData, PushData, ReduceData, ReduceRightData, ReverseData, ShiftData, SliceData, SomeData, SortData, SpliceData, ToStringData, UnshiftData } from './data';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.css']
})
export class ArrayMethodsComponent {

  public data1: any[] = Data1;
  public data2: any[] = Data2;
  public filterData: any[] = FilterData;
  public concatData1: any[] = ConcatData1;
  public concatData2: any[] = ConcatData2;
  public copyWithinData: any[] = CopyWithinData;
  public everyData: any[] = EveryData;
  public fillData: any[] = FillData;
  public findData: any[] = FindData;
  public findIndexData: any[] = FindIndexData;
  public flatData: any[] = FlatData;
  public flatMapData: any[] = FlatMapData;
  public forEachData: any[] = ForEachData;
  public includeData: any[] = IncludesData;
  public indexOfData: any[] = IndexOfData;
  public joinData: any[] = JoinData;
  public keysData: any[] = KeysData;
  public lastIndexOfData: any[] = LastIndexOfData;
  public mapData: any[] = MapData;
  public popData: any[] = PopData;
  public pushData: any[] = PushData;
  public reduceData: any[] = ReduceData;
  public reduceRightData: any[] = ReduceRightData;
  public reverseData: any[] = ReverseData;
  public shiftData: any[] = ShiftData;
  public sliceData: any[] = SliceData;
  public someData: any[] = SomeData;
  public sortData: any[] = SortData;
  public spliceData: any[] = SpliceData;
  public toStringData: any[] = ToStringData;
  public unshiftData: any[] = UnshiftData;


  public filterResult: any[] = [];
  public concatResult: any[] = [];
  public copyWithinResult: any[] = [];
  public everyResult!: boolean;
  public fillResult: any[] = [];
  public findResult: any[] = [];
  public findIndexResult!: any;
  public flatResult: any[] = [];
  public flapMapResult: any[] = [];
  public forEachResult: any;
  public includesResult: any;
  public indexOfResult: any;
  public joinResult: any;
  public keysResult: any;
  public lastIndexOfResult: any;
  public mapResult: any[] = [];
  public popResult: any[] = [];
  public pushResult: any;
  public reduceResult: any[] = [];
  public reduceRightResult: any[] = [];
  public shiftResult: any[] = [];
  public sliceResult: any[] = [];
  public someResult: any;
  public sortResult: any[] = [];
  public spliceResult: any[] = [];
  public toStringResult: any;
  public unshiftResult: any;



  ngOnInit(): void {
    this.onFilter();
    this.onConcat();
    this.onCopyWithin();
    this.onEvery();
    this.onFill();
    this.onFind();
    this.onFindIndex();
    this.onFlat();
    this.onFlatMap();
    this.onForEach();
    this.onIncludes();
    this.onIndexOf();
    this.onJoin();
    this.onKeys();
    this.onLastIndexOf();
    this.onMap();
    this.onPop();
    this.onPush();
    this.onReduce();
    this.onReduceRight();
    this.onReverse();
    this.onShift();
    this.onSlice();
    this.onSome();
    this.onSort();
    this.onSplice();
    this.onToString();
    this.onUnshift();
  }

  onFilter(): void {
    this.filterResult = this.filterData.filter((d: any) => d.age < 4);
  }

  onConcat(): void {
    this.concatResult = this.concatData1.concat(this.concatData2);
  }

  onCopyWithin(): void {
    // this.copyWithinResult = this.copyWithinData.copyWithin(1,2);
    this.copyWithinResult = this.copyWithinData.copyWithin(1, 0, 3);
  }

  onEvery(): void {
    this.everyResult = this.everyData.every((d: any) => d.age <= 5)
  }

  onFill(): void {
    // this.fillResult=this.fillData.fill({id:"filled",name:"filledName",age:0})
    // this.fillResult=this.fillData.fill(({id:"filled",name:"filledName",age:0}),2)
    this.fillResult = this.fillData.fill(({ id: "filled", name: "filledName", age: 0 }), 2, 5)
  }

  onFind(): void {
    this.findResult = this.findData.find((d: any) => d.id == 1)
  }

  onFindIndex(): void {
    this.findIndexResult = this.findIndexData.findIndex((d: any) => d.id == 3)
  }

  onFlat(): void {
    // this.flatResult=this.flatData.flat()
    this.flatResult = this.flatData.flat(2)
  }

  onFlatMap(): void {
    this.flapMapResult = this.flatMapData.flatMap((d: any) => d)
  }

  onForEach(): void {
    this.forEachData.forEach((d: any) => { d.age = d.age + 10 })
  }

  onIncludes(): void {
    this.includesResult = this.includeData.includes("apple")
  }

  onIndexOf(): void {
    // this.indexOfResult = this.indexOfData.indexOf("apple")
    this.indexOfResult = this.indexOfData.indexOf("apple", 2)
  }

  onJoin(): void {
    this.joinResult = this.joinData.join("+").toString()
  }

  onKeys(): void {
    this.keysResult = ""
    this.keysData.keys()
    for (let i in this.keysData) {
      this.keysResult += i
    }
  }

  onLastIndexOf(): void {
    this.lastIndexOfResult = this.lastIndexOfData.lastIndexOf(4)
  }

  onMap(): void {
    this.mapResult = this.mapData.map((d: any) => d.age)
  }

  onPop(): void {
    this.popResult = this.popData.pop()
  }

  onPush(): void {
    this.pushResult = this.pushData.push({ id: 88 })
  }

  onReduce(): void {
    this.reduceResult = this.reduceData.reduce((d: any, d1: any) => d - d1)
  }

  onReduceRight(): void {
    this.reduceRightResult = this.reduceRightData.reduceRight((d: any, d1: any) => d - d1)
  }

  onReverse(): void {
    this.reverseData.reverse()
  }

  onShift(): void {
    this.shiftResult = this.shiftData.shift()
  }

  onSlice(): void {
    // this.sliceResult = this.sliceData.slice(1)
    this.sliceResult = this.sliceData.slice(2, 5)
  }

  onSome(): void {
    this.someResult = this.someData.some((d: any) => d.age < 2)
  }

  onSort(): void {
   this.sortResult = this.sortData.sort((a:any,b:any)=>b.id-a.id)
  }

  onSplice(): void {
    this.spliceResult = this.spliceData.splice(2, 2, { id: "new" })
    // this.spliceResult = this.spliceData.splice(2, 1)
  }

  onToString(): void {
    this.toStringResult = this.toStringData.toString()
  }

  onUnshift(): void {
    this.unshiftResult = this.unshiftData.unshift({ id: "new" })
  }

}
