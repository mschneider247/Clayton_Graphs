const swingTrade = {
  style: {
    mainDark: "#27201A",
    mainLight: "#CBBE8F",
    secondDark: "#68671A",
    secondLight: "#A8B163",
    thirdDark: "#DF4239",
    thirdLight: "#F99D5C"
  },
  years: [
    {
      id: 2020,
      name: "2020",
      //     jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //     winning trades
      data: [4, 2, 4, 3, 2, 0, 7, 5, 13, 1, 4, 9],
      //     losing trades
      data2: [-4, -3, -1, -1, 0, -7, -4, -2, 0, -4, -8, -7]
    },
    {
      id: 2021,
      name: "2021",
      //     jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //     winning trades
      data: [8, 4, 3, 1, 0, 10, 4],
      //     loosing trades
      data2: [-1, 0, -1, -6, -2, -4]
    }
  ]
};

export { swingTrade }