function preload() {

const location = Object.freeze({
    "jan": 1,
    "feb": 2,
    "mar": 4,
    "apr": 8,
    "may": 16,
    "jun": 32,
    "jul": 64,
    "aug": 128,
    "sep": 256,
    "oct": 512,
    "nov": 1024,
    "dec": 2048,
    
    "rain": 4096,
    
    "sea":                0, "airbound":         0,
    "pond":            8192, "earthbound":    8192,
    "river":          16384, "boulderbound": 16384,
    "mouth":          24576, "woodbound":    24576,
    "waterfall":      32768, "waterbound":   32768,
    "clifftop":       40960, "beachbound":   40960,
                             "flowerbound":  49152, 
    "dock":           57344, "animalbound":  57344,
    
    "resetMonths":   61440,
    "resetRain":     61439,
    "resetLocation":  8191                          
});

const rainyDay = 4096;

const month = Object.freeze({
    "January":   0,
    "February":  1,
    "March":     2,
    "April":     3,
    "May":       4,
    "June":      5,
    "July":      6,
    "August":    7,
    "September": 8,
    "October":   9,
    "November":  10,
    "December":  11
});

const hr = [
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
    1024,
    2048,
    4096,
    8192,
    16384,
    32768,
    65536,
    131072,
    262144,
    524288,
    1048576,
    2097152,
    4194304,
    8388608
];

let tools = {
    "setHourRange": function(start, end) {
        let flags = 0;
        let i = start;
        while (true) {
            flags += Math.pow(2, i);
            i++;
            if (i == 24) i = 0;
            if (i > end) return flags;
        }
    },
    
    "setMonthRange": function(start, end) {
        let flags = 0;
        let i = start;
        while (true) {
            flags += Math.pow(2, i);
            i++;
            if (i == 12) i = 0;
            if (i > end) return flags;
        }
    }
};

let fish = [
               [ "bitterling",        { "price":        900,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.November, month.March)     | location.river          }],
               
               [ "pale chub",         { "price":        200,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.January, month.Decmeber)   | location.river          }],
               
               [ "crucian carp",      { "price":        160,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.river          }],
               
               [ "dace",              { "price":        240,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.river          }],
               
               [ "carp",              { "price":        300,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.pond           }],
               
               [ "koi",               { "price":        4000,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.pond           }],
               
               [ "goldfish",          { "price":        1300,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.pond           }],
               
               [ "pop-eyed goldfish", { "price":        1300,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.pond           }],
               
               [ "ranchu goldfish",   { "price":        4500,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.pond           }],
               
               [ "killifish",         { "price":        300,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.August)       | location.pond           }],
               
               [ "crawfish",          { "price":        200,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.September)    | location.pond           }],
               
               [ "snapping turtle",   { "price":        5000,
                                        "hours":        tools.setHourRange(21, 4),
                                        "availability": tools.setMonthRange(month.April, month.October)      | location.river          }],
               
               [ "tadpole",           { "price":        100,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.March, month.July)         | location.pond           }],
               
               [ "frog",              { "price":        120,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.May, month.August)         | location.pond           }],
               
               [ "freshwater goby",   { "price":        400,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.river          }],
               
               [ "loach",             { "price":        400,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.March, month.May)          | location.river          }],
               
               [ "catfish",           { "price":        800,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.May, month.October)        | location.pond           }],
               
               [ "bluegill",          { "price":        180,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.river          }],
               
               [ "yellow perch",      { "price":        300,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.October, month.March)      | location.river          }],
               
               [ "black bass",        { "price":        400,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.river          }],
               
               [ "cherry salmon",     { "price":        1000,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.March, month.June)         | location.clifftop
                                                        tools.setMonthRange(month.September, month.November) | 0                       }],
               
               [ "golden trout",      { "price":        15000,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.March, month.May)          | location.clifftop
                                                        tools.setMonthRange(month.September, month.November) | 0                       }],
               
               [ "stringfish",        { "price":        15000,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.December, month.March)     | location.clifftop       }],
               
               [ "guppy",             { "price":        1300,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.April, month.November)     | location.river          }],
               
               [ "nibble fish",       { "price":        1500,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.May, month.September)      | location.river          }],
               
               [ "angelfish",         { "price":        3000,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.May, month.October)        | location.river          }],
               
               [ "betta",             { "price":        2500,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.May, month.October)        | location.river          }],
               
               [ "neon tetra",        { "price":        500,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.April, month.November)     | location.river          }],
               
               [ "rainbow fish",      { "price":        800,
                                        "hours":        tools.setHourRange(9, 15),
                                        "availability": tools.setMonthRange(month.May, month.October)        | location.river          }],
               
               [ "sea butterfly",     { "price":        1000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.December, month.March)     | location.sea            }],
               
               [ "sea horse",         { "price":        1100,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.November)     | location.sea            }],
               
               [ "clownfish",         { "price":        650,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.September)    | location.sea            }],
               
               [ "surgeonfish",       { "price":        1000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.September)    | location.sea            }],
               
               [ "butterfly fish",    { "price":        1000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.September)    | location.sea            }],
               
               [ "zebra turkeyfish",  { "price":        500,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.April, month.September])   | location.sea            }],
               
               [ "anchovy",           { "price":        200,
                                        "hours":        tools.setHourRange(4, 20),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "horse mackerel",    { "price":        150,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "barred knifejaw",   { "price":        5000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.March, month.November)     | location.sea            }],
               
               [ "sea bass",          { "price":        400,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "red snapper",       { "price":        3000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "dab",               { "price":        300,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.October, month.April)      | location.sea            }],
               
               [ "olive flounder",    { "price":        800,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "squid",             { "price":        500,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.December, month.August)    | location.sea            }],
               
               [ "tuna",              { "price":        7000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.November, month.April)     | location.dock           }],
               
               [ "blue marlin",       { "price":        10000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.November, month.April)     | location.dock
                                                        tools.setMonthRange(month.July, month.September)     | 0                       }],
               
               [ "mahi-mahi",         { "price":        6000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.May, month.October)        | location.dock           }],
               
               [ "football fish",     { "price":        2500,
                                        "hours":        tools.setHourRange(16, 9),
                                        "availability": tools.setMonthRange(month.November, month.March)     | location.sea            }],
               
               [ "oarfish",           { "price":        9000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.December, month.May)       | location.sea            }],
               
               [ "barreleye",         { "price":        15000,
                                        "hours":        tools.setHourRange(21, 4),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea            }],
               
               [ "coelacanth",        { "price":        15000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.January, month.December)   | location.sea | rainyDay }],
               
               [ "sturgeon",          { "price":        10000,
                                        "hours":        tools.setHourRange(0, 23),
                                        "availability": tools.setMonthRange(month.September, month.March)    | location.mouth          }] ];

let bugs = [ [ "common butterfly",           { "price":        160,
                                               "hours":        tools.setHourRange(9, 17),
                                               "availability": tools.setMonthRange(month.September, month.January)   | location.airbound                }],
             
             [ "yellow butterfly",           { "price":        160,
                                               "hours":        tools.setHourRange(4, 17),
                                               "availability": tools.setMonthRange(month.March, month.June)          | location.airbound
                                                               tools.setMonthRange(month.September, month.October)   | 0                                }],
             
             [ "tiger butterfly",            { "price":        240,
                                               "hours":        tools.setHourRange(4, 17),
                                               "availability": tools.setMonthRange(month.March, month.September)     | location.airbound                }],
             
             [ "peacock butterfly",          { "price":        2500,
                                               "hours":        tools.setHourRange(4, 17),
                                               "availability": tools.setMonthRange(month.March, month.June)          | location.airbound                }],
             
             [ "common bluebottle",          { "price":        300,
                                               "hours":        tools.setHourRange(4, 17),
                                               "availability": tools.setMonthRange(month.April, month.August)        | location.airbound                }],
             
             [ "paper kite butterfly",       { "price":        1000,
                                               "hours":        tools.setHourRange(8, 17),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.airbound                }],
             
             [ "great purple emperor",       { "price":        3000,
                                               "hours":        tools.setHourRange(4, 17),
                                               "availability": tools.setMonthRange(month.May, month.August)          | location.airbound                }],
             
             [ "emperor butterfly",          { "price":        4000,
                                               "hours":        tools.setHourRange(0, 0),
                                               "availability": tools.setMonthRange(month.December, month.March)      | location.airbound
                                                               tools.setMonthRange(month.June, month.September)      | 0                                }],
             
             [ "agrias butterfly",           { "price":        3000,
                                               "hours":        tools.setHourRange(8, 15),
                                               "availability": tools.setMonthRange(month.April, month.September)     | location.airbound                }],
             
             [ "Rajah Brooke's birdwing",    { "price":        2500,
                                               "hours":        tools.setHourRange(8, 15),
                                               "availability": tools.setMonthRange(month.December, month.February)   | location.airbound
                                                               tools.setMonthRange(month.April, month.September)     | 0                                }],
             
             [ "Queen Alexandra's birdwing", { "price":        4000,
                                               "hours":        tools.setHourRange(8, 15),
                                               "availability": tools.setMonthRange(month.May, month.September)       | location.airbound                }],
             
             [ "moth",                       { "price":        130,
                                               "hours":        tools.setHourRange(19, 3),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.airbound                }],
             
             [ "Atlas moth",                 { "price":        3000,
                                               "hours":        tools.setHourRange(19, 3),
                                               "availability": tools.setMonthRange(month.April, month.September)     | location.airbound                }],
             
             [ "Madagascan sunset moth",     { "price":        2500,
                                               "hours":        tools.setHourRange(8, 15),
                                               "availability": tools.setMonthRange(month.April, month.September)     | location.airbound                }],
             
             [ "long locust",                { "price":        200,
                                               "hours":        tools.setHourRange(8, 18),
                                               "availability": tools.setMonthRange(month.April, month.November)      | location.earthbound              }],
             
             [ "mantis",                     { "price":        430,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.March, month.November)      | location.flowerbound             }],
             
             [ "orchid mantis",              { "price":        2400,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.March, month.November)      | location.flowerbound             }],
             
             [ "honeybee",                   { "price":        200,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.March, month.July)          | location.flowerbound             }], //Techincally flower, can fly
             
             [ "wasp",                       { "price":        2500,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.woodbound               }],
             
             [ "darner dragonfly",           { "price":        230,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.April, month.October)       | location.airbound                }],
             
             [ "banded dragonfly",           { "price":        4500,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.May, month.October)         | location.airbound                }],
             
             [ "mole cricket",               { "price":        500,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.November, month.May)        | location.earthbound              }],
             
             [ "pondskater",                 { "price":        130,
                                               "hours":        tools.setHourRange(8, 18),
                                               "availability": tools.setMonthRange(month.May, month.September)       | location.waterbound              }], //Also in rivers
             
             [ "diving beetle",              { "price":        800,
                                               "hours":        tools.setHourRange(8, 18),
                                               "availability": tools.setMonthRange(month.May, month.September)       | location.waterbound              }],
             
             [ "giant waterbug",             { "price":        2000,
                                               "hours":        tools.setHourRange(19, 7),
                                               "availability": tools.setMonthRange(month.April, month.September)     | location.waterbound              }],
             
             [ "stinkbug",                   { "price":        120,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.March, month.October)       | location.flowerbound             }],
             
             [ "man-faced stinkbug",         { "price":        1000,
                                               "hours":        tools.setHourRange(19, 7),
                                               "availability": tools.setMonthRange(month.March, month.October)       | location.flowerbound             }],
             
             [ "ladybug",                    { "price":        200,
                                               "hours":        tools.setHourRange(8, 16),
                                               "availability": tools.setMonthRange(month.March, month.June)          | location.flowerbound
                                                               month.October                                         | 0                                }],
             
             [ "tiger beetle",               { "price":        1500,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.February, month.October)    | location.earthbound              }],
             
             [ "jewel beetle",               { "price":        2400,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.April, month.August)        | location.woodbound               }],
             
             [ "violin beetle",              { "price":        450,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.May, month.June)            | location.woodbound
                                                               tools.setMonthRange(month.September, month.November)  | 0                                }],
             
             [ "citrus long-horned beetle",  { "price":        350,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.woodbound               }],
             
             [ "rosalia batesi beetle",      { "price":        3000,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.May, month.September)       | location.woodbound               }],
             
             [ "bagworm",                    { "price":        600,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.woodbound               }],
             
             [ "spider",                     { "price":        600,
                                               "hours":        tools.setHourRange(19, 7),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.woodbound               }],
             
             [ "ant",                        { "price":        80,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.earthbound              }], //turnip
             
             [ "hermit crab",                { "price":        1000,
                                               "hours":        tools.setHourRange(19, 7),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.beachbound              }],
             
             [ "wharf roach",                { "price":        200,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.beachbound              }],
             
             [ "fly",                        { "price":        60,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.airbound                }], //garbage, lands on it
             
             [ "flea",                       { "price":        70,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.April, month.November)      | location.animalbound             }],
             
             [ "snail",                      { "price":        250,
                                               "hours":        tools.setHourRange(0, 23),
                                               "availability": tools.setMonthRange(month.January, month.December)    | location.boulderbound | rainyDay }], //Also on shrubberies, sits on top instead of inside
             
             [ "pill bug",                   { "price":        250,
                                               "hours":        tools.setHourRange(22, 15),
                                               "availability": tools.setMonthRange(month.September, month.June)      | location.boulderbound            }],
             
             [ "centipede",                  { "price":        300,
                                               "hours":        tools.setHourRange(16, 21),
                                               "availability": tools.setMonthRange(month.September, month.June)      | location.boulderbound            }],
             
             [ "tarantula",                  { "price":        8000,
                                               "hours":        tools.setHourRange(19, 3),
                                               "availability": tools.setMonthRange(month.November, month.April)      | location.earthbound              }],
             
             [ "scorpion",                   { "price":        8000,
                                               "hours":        tools.setHourRange(19, 3),
                                               "availability": tools.setMonthRange(month.May, month.October)         | location.earthbound              }] ];


let data = {
    "fish": new Map(fish),
    "bugs": new Map(bugs)
};

return data;

}