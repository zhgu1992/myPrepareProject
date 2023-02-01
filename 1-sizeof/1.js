  /**
   * 实现sizeOf函数，计算object占用多少byte
   * Number类型8字节（64/8）， string类型一个字符2字节，boolean 4字节
   */




  const setManager = new WeakSet();
  function sizeOfObj(obj) {
      if(obj === null) return 0;
      const keys = Object.keys(obj);
      let byte = 0;
      keys.forEach(key=>{
          byte += calculateMemory(key);
          const v = obj[key];
          // 对于obj进行处理
          if(typeof v === 'object' && v!== null){
              if(!setManager.has(v)){
                  setManager.add(v);
                  byte += calculateMemory(v);
              }
          }else{
              byte += calculateMemory(v);
          }

      });
      return byte;
  }


  function calculateMemory(data) {
      let byte = 0;
      switch (typeof data) {
          case 'number':
              byte = 8;
              break;
          case 'boolean':
              byte = 4;
              break;
          case 'string':
              byte = data.length * 2;
              break;
          case 'object':
              if(Array.isArray(data)){
                  byte = data.map(v=> calculateMemory(v))
                      .reduce((pre, cur)=> pre+cur, 0);
              }else{
                  byte = sizeOfObj(data);
              }
              break;
          default:
                byte = 0;
      }
      return byte;
  }

  // 注意相同的内存空间

  const m ={a: 111};// 10
  // 70
  const testData = {
      a: 111, // 10
      b: 'ccc',// 8
      c: {k:false, s:[11]}, // 18
      d: [{e: [11, 22]}], //20
      e: m, // 12
      f: m, // 2
  };

  const res = sizeOfObj(testData);
  console.log(res);
