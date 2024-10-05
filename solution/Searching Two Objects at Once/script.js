// english class object
const english = {
    advanced: { // advanced curriculum
      teacher: 'Ms. Abrimian',
        acceptsLateWork: false,
      },
      standard: { // standard curriculum
        teacher: 'Mr. Sheehan',
          acceptsLateWork: true,
      },
  }
  
  // math class object
  const math = {
      advanced: {
      teacher: 'Mr. Citrano',
        acceptsLateWork: false,
      },
      standard: {
          teacher: 'Ms. Marinelli',
          acceptsLateWork: false,
      },
  }
  
  function acceptsLateWork(teacher) {
      let arr = Object.entries(english).concat(Object.entries(math));
      for(let el of arr){
        if (el[1].teacher === teacher) {
            return el[1].acceptsLateWork;
        }   
      }
  }
  const res = acceptsLateWork('Mr. Sheehan');
  console.log(res);
  

