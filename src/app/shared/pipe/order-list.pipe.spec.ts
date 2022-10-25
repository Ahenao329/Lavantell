import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/sucursales.json'

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it ('🆗Probando entrada y salida de valores', () => {
    //Arange
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default


    //Act
    const result: TextTrackMode[] = pipe.transform(data)

    //Asert
    expect(result).toEqual(data)
  })


  it ('👌Probando si el orden es ASC', () => {
    //Arange
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default
    const lastValue = data.find((i: any) => i._id ==1)
    const firstValue = data.find((i: any) => i._id ==4)
    console.log('', firstValue);
    console.log('👌', lastValue);
    //Act
    const result: TextTrackMode[] = pipe.transform(data, 'nombre', 'asc')
    const firstResult = result[0]
    const lastResult = result[result.length - 1]
    console.log('👌👌', firstResult);
    console.log('👌', lastResult);

    //Asert
    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })


  // it ('👌Probando si el orden es DESC', () => {
  //   //Arange
  //   const pipe = new OrderListPipe();
  //   const {data}: any = (mockRaw as any).default
  //   const firstValue = data.find((i: any) => i._id ==1)
  //   const lastValue = data.find((i: any) => i._id ==4)
  //   console.log('🆗', firstValue);
  //   console.log('🆗🆗', lastValue);
  //   //Act
  //   const result: TextTrackMode[] = pipe.transform(data, 'nombre', 'desc')
  //   const firstResult = result[0]
  //   const lastResult = result[result.length - 1]
  //   console.log('🐷', firstResult);
  //   console.log('🐷🐷', lastResult);
  //   //Asert
  //   expect(firstResult).toEqual(lastValue)
  //   expect(lastResult).toEqual(firstValue)
  // })
});
