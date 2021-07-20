
// example of data structure for each month: 
// for each month the application will track data from both Steven and Clayton
// each month will provide total portfolio value by adding cash and asset values.
// If an asset has been purchased or sold it is kept track of under exchanges.
// Asset exchanges are characterized by their assetName, quantity and price.
// Assets that are purchased have a positive value, those that are sold are negative
// This just lets the App know how to flag the exchange and display it properly.
// Total values for cash on hand and assets on hand are a source of truth for the program.
// 
// If no exchanges for the time period occur it is assumed that cash on hand remains unchanged
// only asset values should change.
//
//jan: {
//      Steven: {
//        totalValue: [439<=totalCash, 1123<=totalAssetValue],
//      exchanges: [
//        {
//          assetName: "Tesla", 
//          quantity: 0.5,
//          price: 648.12
//        },
//        {
//          assetName: "Game Stop",
//          quantity: -4,
//          price: 178,
//        }
//      ],
//      },
//    Clayton: {
//      totalValue: [339, 1223],
//      exchanges: []
//      },
//    },


const altAssetChallenge = {
  2021: {

    jan: {
      Steven: {
        totalValue: [439, 1123],
        exchanges: [
          {
            assetName: "Tesla", 
            quantity: 0.5,
            price: 648.12
          },
          {
            assetName: "Game Stop",
            quantity: -4,
            price: 178,
          }
          ],
        },
      Clayton: {
        totalValue: [339, 1223],
        exchanges: []
        },
      },

    feb: {
      Steven: {
        totalValue: [814, 373],
        exchanges: [],
        },
      Clayton: {
        totalValue: [339, 1223],
        exchanges: [
          {
            assetName: "Dodge Coin",
            quantity: 300,
            price: 0.07,
          }
          ],
        },
      },

    mar: {
      Steven: {
        totalValue: [549, 1243],
        exchanges: [],
        },
      Clayton: {
        totalValue: [318, 1244],
        exchanges: []
        },
      },

    apr: {
      Steven: {
        totalValue: [549, 1468],
        exchanges: [],
        },
      Clayton: {
        totalValue: [318, 1299],
        exchanges: []
        },
      },

    may: {
      Steven: {
        totalValue: [549, 1220],
        exchanges: [],
        },
      Clayton: {
        totalValue: [318, 1159],
        newPurchases: []
        },
      },

    jun: {
      Steven: {
        totalValue: [549, 1243],
        exchanges: [],
        },
      Clayton: {
        totalValue: [318, 1673],
        newPurchases: []
        },
      },

    jul: {
      Steven: {
        totalValue: [549, 1243],
        exchanges: [],
        },
      Clayton: {
        totalValue: [318, 1673],
        newPurchases: []
        },
      },

    aug: {},

    sep: {},

    oct: {},

    nov: {},

    dec: {},
  },
}

export { altAssetChallenge }