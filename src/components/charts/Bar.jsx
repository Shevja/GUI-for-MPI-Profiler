import React from "react";
import { ResponsiveBarCanvas } from '@nivo/bar'

const Bar = ({ data }) => {

    const exData = [
        {
            "country": "AD",
            "hot dog": 161,
            "hot dogColor": "hsl(328, 70%, 50%)",
            "burger": 25,
            "burgerColor": "hsl(119, 70%, 50%)",
            "sandwich": 95,
            "sandwichColor": "hsl(287, 70%, 50%)",
            "kebab": 53,
            "kebabColor": "hsl(239, 70%, 50%)",
            "fries": 117,
            "friesColor": "hsl(134, 70%, 50%)",
            "donut": 189,
            "donutColor": "hsl(320, 70%, 50%)",
            "junk": 34,
            "junkColor": "hsl(206, 70%, 50%)",
            "sushi": 173,
            "sushiColor": "hsl(205, 70%, 50%)",
            "ramen": 32,
            "ramenColor": "hsl(191, 70%, 50%)",
            "curry": 123,
            "curryColor": "hsl(101, 70%, 50%)",
            "udon": 184,
            "udonColor": "hsl(22, 70%, 50%)",
            "bagel": 154,
            "bagelColor": "hsl(245, 70%, 50%)",
            "yakitori": 105,
            "yakitoriColor": "hsl(259, 70%, 50%)",
            "takoyaki": 99,
            "takoyakiColor": "hsl(271, 70%, 50%)",
            "tacos": 74,
            "tacosColor": "hsl(258, 70%, 50%)",
            "miso soup": 107,
            "miso soupColor": "hsl(89, 70%, 50%)",
            "tortilla": 80,
            "tortillaColor": "hsl(177, 70%, 50%)",
            "tapas": 191,
            "tapasColor": "hsl(237, 70%, 50%)",
            "chipirones": 96,
            "chipironesColor": "hsl(12, 70%, 50%)",
            "gazpacho": 7,
            "gazpachoColor": "hsl(169, 70%, 50%)",
            "soba": 128,
            "sobaColor": "hsl(335, 70%, 50%)",
            "bavette": 92,
            "bavetteColor": "hsl(285, 70%, 50%)",
            "steak": 153,
            "steakColor": "hsl(333, 70%, 50%)",
            "pizza": 167,
            "pizzaColor": "hsl(12, 70%, 50%)",
            "spaghetti": 176,
            "spaghettiColor": "hsl(276, 70%, 50%)",
            "ravioli": 107,
            "ravioliColor": "hsl(349, 70%, 50%)",
            "salad": 118,
            "saladColor": "hsl(88, 70%, 50%)",
            "pad thai": 4,
            "pad thaiColor": "hsl(300, 70%, 50%)",
            "bun": 53,
            "bunColor": "hsl(357, 70%, 50%)",
            "waffle": 49,
            "waffleColor": "hsl(357, 70%, 50%)",
            "crepe": 30,
            "crepeColor": "hsl(315, 70%, 50%)",
            "churros": 155,
            "churrosColor": "hsl(209, 70%, 50%)",
            "paella": 48,
            "paellaColor": "hsl(71, 70%, 50%)",
            "empanadas": 140,
            "empanadasColor": "hsl(315, 70%, 50%)",
            "bruschetta": 42,
            "bruschettaColor": "hsl(126, 70%, 50%)",
            "onion soup": 132,
            "onion soupColor": "hsl(106, 70%, 50%)",
            "cassoulet": 62,
            "cassouletColor": "hsl(134, 70%, 50%)",
            "bouillabaisse": 148,
            "bouillabaisseColor": "hsl(192, 70%, 50%)",
            "unagi": 14,
            "unagiColor": "hsl(50, 70%, 50%)",
            "tempura": 122,
            "tempuraColor": "hsl(54, 70%, 50%)",
            "tonkatsu": 182,
            "tonkatsuColor": "hsl(266, 70%, 50%)",
            "shabu-shabu": 166,
            "shabu-shabuColor": "hsl(141, 70%, 50%)",
            "twinkies": 125,
            "twinkiesColor": "hsl(71, 70%, 50%)",
            "jerky": 22,
            "jerkyColor": "hsl(254, 70%, 50%)",
            "fajitas": 53,
            "fajitasColor": "hsl(92, 70%, 50%)",
            "jambalaya": 168,
            "jambalayaColor": "hsl(246, 70%, 50%)",
            "meatloaf": 126,
            "meatloafColor": "hsl(228, 70%, 50%)",
            "mac n' cheese": 25,
            "mac n' cheeseColor": "hsl(76, 70%, 50%)",
            "baked beans": 168,
            "baked beansColor": "hsl(344, 70%, 50%)",
            "popcorn": 109,
            "popcornColor": "hsl(150, 70%, 50%)",
            "buffalo wings": 163,
            "buffalo wingsColor": "hsl(164, 70%, 50%)",
            "BBQ ribs": 176,
            "BBQ ribsColor": "hsl(348, 70%, 50%)",
            "apple pie": 166,
            "apple pieColor": "hsl(355, 70%, 50%)",
            "nachos": 83,
            "nachosColor": "hsl(305, 70%, 50%)",
            "risotto": 110,
            "risottoColor": "hsl(170, 70%, 50%)",
            "tiramisu": 123,
            "tiramisuColor": "hsl(296, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 199,
            "hot dogColor": "hsl(99, 70%, 50%)",
            "burger": 135,
            "burgerColor": "hsl(149, 70%, 50%)",
            "sandwich": 60,
            "sandwichColor": "hsl(124, 70%, 50%)",
            "kebab": 74,
            "kebabColor": "hsl(100, 70%, 50%)",
            "fries": 10,
            "friesColor": "hsl(227, 70%, 50%)",
            "donut": 196,
            "donutColor": "hsl(177, 70%, 50%)",
            "junk": 60,
            "junkColor": "hsl(314, 70%, 50%)",
            "sushi": 58,
            "sushiColor": "hsl(163, 70%, 50%)",
            "ramen": 128,
            "ramenColor": "hsl(20, 70%, 50%)",
            "curry": 114,
            "curryColor": "hsl(284, 70%, 50%)",
            "udon": 49,
            "udonColor": "hsl(296, 70%, 50%)",
            "bagel": 85,
            "bagelColor": "hsl(56, 70%, 50%)",
            "yakitori": 25,
            "yakitoriColor": "hsl(167, 70%, 50%)",
            "takoyaki": 194,
            "takoyakiColor": "hsl(251, 70%, 50%)",
            "tacos": 51,
            "tacosColor": "hsl(315, 70%, 50%)",
            "miso soup": 117,
            "miso soupColor": "hsl(59, 70%, 50%)",
            "tortilla": 197,
            "tortillaColor": "hsl(295, 70%, 50%)",
            "tapas": 97,
            "tapasColor": "hsl(244, 70%, 50%)",
            "chipirones": 93,
            "chipironesColor": "hsl(203, 70%, 50%)",
            "gazpacho": 161,
            "gazpachoColor": "hsl(350, 70%, 50%)",
            "soba": 68,
            "sobaColor": "hsl(208, 70%, 50%)",
            "bavette": 166,
            "bavetteColor": "hsl(15, 70%, 50%)",
            "steak": 33,
            "steakColor": "hsl(104, 70%, 50%)",
            "pizza": 171,
            "pizzaColor": "hsl(13, 70%, 50%)",
            "spaghetti": 44,
            "spaghettiColor": "hsl(359, 70%, 50%)",
            "ravioli": 110,
            "ravioliColor": "hsl(356, 70%, 50%)",
            "salad": 175,
            "saladColor": "hsl(302, 70%, 50%)",
            "pad thai": 133,
            "pad thaiColor": "hsl(284, 70%, 50%)",
            "bun": 113,
            "bunColor": "hsl(300, 70%, 50%)",
            "waffle": 47,
            "waffleColor": "hsl(264, 70%, 50%)",
            "crepe": 119,
            "crepeColor": "hsl(79, 70%, 50%)",
            "churros": 181,
            "churrosColor": "hsl(4, 70%, 50%)",
            "paella": 164,
            "paellaColor": "hsl(171, 70%, 50%)",
            "empanadas": 34,
            "empanadasColor": "hsl(167, 70%, 50%)",
            "bruschetta": 13,
            "bruschettaColor": "hsl(233, 70%, 50%)",
            "onion soup": 123,
            "onion soupColor": "hsl(80, 70%, 50%)",
            "cassoulet": 48,
            "cassouletColor": "hsl(264, 70%, 50%)",
            "bouillabaisse": 148,
            "bouillabaisseColor": "hsl(130, 70%, 50%)",
            "unagi": 22,
            "unagiColor": "hsl(136, 70%, 50%)",
            "tempura": 12,
            "tempuraColor": "hsl(229, 70%, 50%)",
            "tonkatsu": 178,
            "tonkatsuColor": "hsl(248, 70%, 50%)",
            "shabu-shabu": 196,
            "shabu-shabuColor": "hsl(32, 70%, 50%)",
            "twinkies": 61,
            "twinkiesColor": "hsl(134, 70%, 50%)",
            "jerky": 99,
            "jerkyColor": "hsl(318, 70%, 50%)",
            "fajitas": 1,
            "fajitasColor": "hsl(25, 70%, 50%)",
            "jambalaya": 73,
            "jambalayaColor": "hsl(353, 70%, 50%)",
            "meatloaf": 178,
            "meatloafColor": "hsl(58, 70%, 50%)",
            "mac n' cheese": 43,
            "mac n' cheeseColor": "hsl(88, 70%, 50%)",
            "baked beans": 83,
            "baked beansColor": "hsl(153, 70%, 50%)",
            "popcorn": 153,
            "popcornColor": "hsl(211, 70%, 50%)",
            "buffalo wings": 29,
            "buffalo wingsColor": "hsl(190, 70%, 50%)",
            "BBQ ribs": 173,
            "BBQ ribsColor": "hsl(19, 70%, 50%)",
            "apple pie": 118,
            "apple pieColor": "hsl(339, 70%, 50%)",
            "nachos": 169,
            "nachosColor": "hsl(113, 70%, 50%)",
            "risotto": 73,
            "risottoColor": "hsl(115, 70%, 50%)",
            "tiramisu": 57,
            "tiramisuColor": "hsl(358, 70%, 50%)"
        }
    ]

    let maxNumProc = 0;
    let minStartTime = data[0][1];
    let maxStartTime = 0;
    console.log(data);

    data.map(element => {
        if (Number(element[0]) > maxNumProc) {
            maxNumProc = Number(element[0]);
        }
    });
    data.map(element => {
        if (Number(element[1]) > maxStartTime) {
            maxStartTime = Number(element[1])
        };
        if (Number(element[1]) < minStartTime) {
            minStartTime = Number(element[1]);
        }
    });
    console.log("MinStime:", minStartTime, "MaxSTime", maxStartTime)

    let barData = [];
    for (let i = 0; i <= maxNumProc; i++) {
        let mass = [];
        let strNum = 0;
        mass.push({
            id: i
        })
        data.forEach(elem => {
            if (elem[0] == String(i)) {
                strNum++;
                mass.push({
                    y: i,
                    x: Number(elem[1]) / 1000000
                })
            }
        });
        barData.push(mass);
    }
    console.log(barData)
    console.log(exData)

    return (
        <div style={{ width: "100%", height: "900px" }}>
            <ResponsiveBarCanvas
                data={exData}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut',
                    'junk',
                    'sushi',
                    'ramen',
                    'curry',
                    'udon',
                    'bagel',
                    'yakitori',
                    'takoyaki',
                    'tacos',
                    'miso soup',
                    'tortilla',
                    'tapas',
                    'chipirones',
                    'gazpacho',
                    'soba',
                    'bavette',
                    'steak',
                    'pizza',
                    'spaghetti',
                    'ravioli',
                    'salad',
                    'pad thai',
                    'bun',
                    'waffle',
                    'crepe',
                    'churros',
                    'paella',
                    'empanadas',
                    'bruschetta',
                    'onion soup',
                    'cassoulet',
                    'bouillabaisse',
                    'unagi',
                    'tempura',
                    'tonkatsu',
                    'shabu-shabu',
                    'twinkies',
                    'jerky',
                    'fajitas',
                    'jambalaya',
                    'meatloaf',
                    'mac n\'cheese',
                    'baked beans',
                    'popcorn',
                    'buffalo wings',
                    'BBQ ribs',
                    'apple pie',
                    'nachos',
                    'risotto',
                    'tiramisu'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                pixelRatio={1}
                padding={0.15}
                innerPadding={0}
                minValue="auto"
                maxValue="auto"
                groupMode="stacked"
                layout="horizontal"
                reverse={false}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'red_blue' }}
                colorBy="id"
                borderWidth={0}
                borderRadius={0}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36
                }}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 36
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridX={true}
                enableGridY={false}
                enableLabel={true}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                isInteractive={true}
                legends={[]}
            />
        </div>
    );
}

export default Bar;