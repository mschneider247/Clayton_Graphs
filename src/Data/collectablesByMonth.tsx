const collectablesByMonth = {
  style: {
    mainDark: "#27201A",
    mainLight: "#CBBE8F",
    secondDark: "#68671A",
    secondLight: "#A8B163",
    thirdDark: "#DF4239",
    thirdLight: "#F99D5C",
    fourthDark: "#EEAE3C",
    fourthLight: "#E2BD64",
    fifthDark: "#891A52",
    fifthLight: "#B44058"
  },
  years: [
    {
      id: 2018,
      name: "2018",
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Art
      data: [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Books
      data2: [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Cards
      data3: [0, 3, 0, 1, 0, 1, 3, 0, 1, 1, 1, 1],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Comics
      data4: [2, 3, 4, 1, 0, 2, 2, 4, 4, 1, 0, 1],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Movies
      data5: [0, 2, 0, 1, 1, 3, 1, 1, 1, 1, 1, 1]
    },
    {
      id: 2019,
      name: "2019",
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Art
      data: [0, 2, 0, 1, 0, 2, 0, 0, 3, 0, 4, 1],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Books
      data2: [0, 1, 4, 0, 4, 4, 1, 1, 1, 4, 4, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Cards
      data3: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Comics
      data4: [2, 3, 4, 1, 0, 2, 0, 0, 0, 0, 0, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Movies
      data5: [0, 3, 1, 0, 1, 2, 1, 1, 1, 3, 0, 0]
    },
    {
      id: 2020,
      name: "2020",
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Art
      data: [0, 2, 1, 1, 0, 2, 0, 0, 3, 0, 4, 1],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Books
      data2: [0, 1, 1, 0, 4, 4, 1, 1, 1, 4, 4, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Cards
      data3: [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Comics
      data4: [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Movies
      data5: [2, 3, 1, 0, 1, 2, 1, 1, 1, 3, 4, 4]
    },
    {
      id: 2021,
      name: "2021",
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Art
      data: [0, 2, 0, 1, 0, 2, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Books
      data2: [1, 0, 2, 3, 1, 1, 2],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Cards
      data3: [1, 2, 3, 4, 2, 0, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Comics
      data4: [2, 2, 2, 1, 0, 0, 0],
      //           jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //          Movies
      data5: [0, 2, 1, 2, 0, 0, 1],
    }
  ]
};

export { collectablesByMonth };
