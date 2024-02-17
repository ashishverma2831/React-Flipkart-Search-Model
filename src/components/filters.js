const filters = {
    prices:{
        "Below 20,000":20000,
        "Above 20,000 & Below 30,000":30000,
        "Above 30,000 & Below 40,000":40000,
        "Above 40,000 & Below 50,000":50000,
        "Above 50,000 & Below 60,000":60000,
        "Above 60,000 & Below 70,000":70000,
        "Above 70,000 & Below 80,000":80000,
        "Above 80,000":1000000
    },
    brands:{
        "Apple":"Apple",
        "Dell":"Dell",
        "HP":"HP",
        "Lenovo":"Lenovo",
        "Acer":"Acer",
        "Asus":"Asus",
        "MSI":"MSI",
        "Microsoft":"Microsoft",
        "Razer":"Razer",
        "Samsung":"Samsung",
        "Sony":"Sony",
        "Toshiba":"Toshiba",
        "Huawei":"Huawei",
        "LG":"LG",
        "Fujitsu":"Fujitsu",
        "Google":"Google",
        "Panasonic":"Panasonic",
        "Medion":"Medion",
        "Chuwi":"Chuwi",
        "Xiaomi":"Xiaomi",
        "Vero":"Vero",
        "Nexstgo":"Nexstgo",
        "Gigabyte":"Gigabyte",
        "Terrans Force":"Terrans Force",
        "Schenker":"Schenker",
        "Aorus":"Aorus",
        "Clevo":"Clevo",
        "Eluktronics":"Eluktronics",
        "Maingear":"Maingear",
        "Origin PC":"Origin PC",
        "System76":"System76",
        "Tongfang":"Tongfang",
        "Voodoo PC":"Voodoo PC",
        "Zepto":"Zepto",
        "Other":"Other"
    },
    storage:{
        "Below 256GB":256,
        "Above 256GB & Below 512GB":512,
        "Above 512GB & Below 1TB":1000,
        "Above 1TB & Below 2TB":2000,
        "Above 2TB":10000
    },
    screens:{
        "Below 13 inch":13,
        "Above 13 inch & Below 15 inch":15,
        "Above 15 inch & Below 17 inch":17,
        "Above 17 inch":100
    },
    ratings:{
        "1 Star & Above":1,
        "2 Star & Above":2,
        "3 Star & Above":3,
        "4 Star & Above":4,
        "5 Star":5
    },
    processors:{
        "Intel Core i3":"Intel Core i3",
        "Intel Core i5":"Intel Core i5",
        "Intel Core i7":"Intel Core i7",
        "Intel Core i9":"Intel Core i9",
        "AMD Ryzen 3":"AMD Ryzen 3",
        "AMD Ryzen 5":"AMD Ryzen 5",
        "AMD Ryzen 7":"AMD Ryzen 7",
        "AMD Ryzen 9":"AMD Ryzen 9",
        "Apple M1":"Apple M1",
        "Other":"Other"
    },
    graphics:{
        "Intel HD":"Intel HD",
        "Intel Iris":"Intel Iris",
        "Intel UHD":"Intel UHD",
        "Intel Xe":"Intel Xe",
        "Nvidia MX":"Nvidia MX",
        "Nvidia GTX":"Nvidia GTX",
        "Nvidia RTX":"Nvidia RTX",
        "Nvidia Quadro":"Nvidia Quadro",
        "AMD Radeon":"AMD Radeon",
        "AMD FirePro":"AMD FirePro",
        "Apple M1":"Apple M1",
        "Other":"Other"
    },
    ram:{
        "Below 4GB":4,
        "Above 4GB & Below 8GB":8,
        "Above 8GB & Below 16GB":16,
        "Above 16GB & Below 32GB":32,
        "Above 32GB":100
    },
    os:{
        "Windows":"Windows",
        "Mac":"Mac",
        "Linux":"Linux",
        "Chrome":"Chrome",
        "Other":"Other"
    },
    touchscreens:{
        "Yes":"Yes",
        "No":"No"
    },
    convertibles:{
        "Yes":"Yes",
        "No":"No"
    },
    gaming:{
        "Yes":"Yes",
        "No":"No"
    },
    business:{
        "Yes":"Yes",
        "No":"No"
    },
    student:{
        "Yes":"Yes",
        "No":"No"
    },
    home:{
        "Yes":"Yes",
        "No":"No"
    },
    professional:{
        "Yes":"Yes",
        "No":"No"
    },
    design:{
        "Yes":"Yes",
        "No":"No"
    },
    entertainment:{
        "Yes":"Yes",
        "No":"No"
    },
    travel:{
        "Yes":"Yes",
        "No":"No"
    },
    battery:{
        "Below 5 Hours":5,
        "Above 5 Hours & Below 10 Hours":10,
        "Above 10 Hours & Below 15 Hours":15,
        "Above 15 Hours":100
    },
    weight:{
        "Below 1 Kg":1,
        "Above 1 Kg & Below 2 Kg":2,
        "Above 2 Kg & Below 3 Kg":3,
        "Above 3 Kg & Below 4 Kg":4,
        "Above 4 Kg":100
    },
    color:{
        "Black":"Black",
        "White":"White",
        "Silver":"Silver",
        "Gray":"Gray",
        "Blue":"Blue",
        "Red":"Red",
        "Green":"Green",
        "Yellow":"Yellow",
        "Orange":"Orange",
        "Purple":"Purple",
        "Pink":"Pink",
        "Brown":"Brown",
        "Gold":"Gold",
        "Rose Gold":"Rose Gold",
        "Other":"Other"
    },
    warranty:{
        "1 Year":"1 Year",
        "2 Years":"2 Years",
        "3 Years":"3 Years",
        "4 Years":"4 Years",
        "5 Years":"5 Years",
        "Lifetime":"Lifetime"
    }
 }

module.exports = filters