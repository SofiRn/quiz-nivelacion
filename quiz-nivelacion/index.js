const studentGrades = [100,50,65,70,85,96,45];

const result = (arreglo) => {
  arreglo.forEach(element => {
    const allResults = [];
    if (studentGrades > 90) {
     "A" ;
    } else if (studentGrades == 80 - 89 ) {
      "B";
    }
    else if (studentGrades == 70 - 79 ) {
      "C";
    }
    else if (studentGrades == 60 - 69 ) {
      "D";
    }
    else if (studentGrades < 60  ) {
      "F";
    }
  });
}

const Total =