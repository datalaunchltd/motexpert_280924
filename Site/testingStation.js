class TestingStation {
    constructor(id) {
        console.log('testingStationData', testingStationData)
        this.filteredData = []
        this.filters = []
        // this.generateDummyData()
        this.data = testingStationData
        document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu')
        if (id) {
            this.id = id
            let rec;
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id === parseInt(id)) {
                    rec = this.data[i]
                }        
            }
            this.openForm(true, rec)
            this.addListeners()
        }
        else {
           this.renderHTMLHeader()
        }
    }
    generateDummyData() {
        // Arrays of data
        const maleNames = [
            "Liam", "Noah", "Oliver", "William", "Elijah", "James", "Benjamin", "Lucas", "Henry", "Alexander",
            "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
            "Jack", "Owen", "Theodore", "Aiden", "Samuel", "Joseph", "John", "David", "Wyatt", "Matthew",
            "Luke", "Asher", "Carter", "Julian", "Grayson", "Leo", "Jayden", "Gabriel", "Isaac", "Lincoln",
            "Anthony", "Hudson", "Dylan", "Ezra", "Thomas", "Charles", "Christopher", "Jaxon", "Maverick",
            "Josiah", "Isaiah", "Andrew", "Elias", "Joshua", "Nathan", "Caleb", "Ryan", "Adrian", "Miles",
            "Eli", "Nolan", "Christian", "Aaron", "Cameron", "Ezekiel", "Colton", "Luca", "Landon", "Hunter",
            "Jonathan", "Santiago", "Axel", "Easton", "Cooper", "Jeremiah", "Angel", "Roman", "Connor", "Jameson",
            "Robert", "Greyson", "Jordan", "Ian", "Carson", "Adam", "Jaxson", "Brooks", "Tristan", "Luis"
        ];
        const femaleNames = [
            "Olivia", "Emma", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn",
            "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett",
            "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora",
            "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe",
            "Leah", "Hazel", "Violet", "Aurora", "Savannah", "Audrey", "Brooklyn", "Bella", "Claire", "Skylar",
            "Lucy", "Paisley", "Everly", "Anna", "Caroline", "Nova", "Genesis", "Emilia", "Kennedy", "Samantha",
            "Maya", "Willow", "Kinsley", "Naomi", "Aaliyah", "Elena", "Sarah", "Ariana", "Allison", "Gabriella",
            "Alice", "Madelyn", "Cora", "Ruby", "Eva", "Serenity", "Autumn", "Adeline", "Hailey", "Gianna",
            "Valentina", "Isla", "Eliana", "Quinn", "Nevaeh", "Ivy", "Sadie", "Piper", "Lydia", "Alexa"
        ]; 
        const maleLastNames = [
            "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
            "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
            "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
            "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
            "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart",
            "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson",
            "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks",
            "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo",
            "Sanders", "Patel", "Myers"
        ];
        
        const femaleLastNames = [
            "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
            "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
            "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
            "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
            "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart",
            "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson",
            "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks",
            "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo",
            "Sanders", "Patel", "Myers"
        ];
        const industries = [
            "Information Technology",
            "Healthcare",
            "Finance",
            "Retail",
            "Education",
            "Manufacturing",
            "Construction",
            "Hospitality",
            "Transportation",
            "Real Estate",
            "Telecommunications",
            "Media",
            "Automotive",
            "Energy",
            "Agriculture",
            "Entertainment",
            "Biotechnology",
            "Pharmaceuticals",
            "Aerospace",
            "Insurance",
            "Consulting",
            "Government",
            "Legal",
            "Marketing",
            "Advertising",
            "Food & Beverage",
            "Fitness",
            "Fashion",
            "E-commerce",
            "Travel",
            "Logistics",
            "Architecture",
            "Design",
            "Engineering",
            "Security",
            "Environmental",
            "Mining",
            "Health & Wellness",
            "Music",
            "Sports",
            "Gaming",
            "Non-profit",
            "Human Resources",
            "Recruitment",
            "Information Services",
            "Banking",
            "Investment",
            "Accounting",
            "Venture Capital",
            "Retail",
            "Wholesale",
            "Shipping",
            "Airline",
            "Warehousing",
            "Legal Services",
            "Software",
            "Hardware",
            "Internet",
            "Social Media",
            "Data Analytics",
            "Artificial Intelligence",
            "Robotics",
            "Fintech",
            "Blockchain",
            "Cryptocurrency",
            "Renewable Energy",
            "Oil & Gas",
            "Chemicals",
            "Telecom",
            "Wireless",
            "Networking",
            "Computer",
            "Electronics",
            "Biotech",
            "Medical Devices",
            "Insurance",
            "Biopharma",
            "Computer Games",
            "Online Games",
            "Cosmetics",
            "Beauty",
            "Health",
            "Fitness",
            "Nutrition",
            "Pharma",
            "Food Processing",
            "Textiles",
            "Apparel",
            "Footwear",
            "Consumer Electronics",
            "Consumer Goods",
            "Retailing",
            "E-commerce",
            "Supermarkets",
            "Home Improvement",
            "Automobile",
            "Chemical",
            "Textile",
            "Telecommunications",
            "Media",
            "Entertainment",
            "Leisure",
            "Construction",
            "Engineering",
            "Agriculture",
            "Forestry",
            "Fishing",
            "Mining",
            "Quarrying",
            "Utilities",
            "Waste Management",
            "Water Management"
        ];
        const streetTypes = ['Close', 'Drive', 'Range', 'Road', 'View', 'Lake', 'End', 'Avenue', 'Side', 'Cross', 'End', 'Walk', 'Wharf', 'Manor']
        // Function to generate a random UK postcode
        const generateUKPostcode = () => {
            // Array of valid UK postcode areas
            const postcodeAreas = [
            "AB", "AL", "B", "BA", "BB", "BD", "BH", "BL", "BN", "BR", "BS", "BT", "CA", "CB", "CF", "CH", "CM", "CO", "CR", "CT",
            "CV", "CW", "DA", "DD", "DE", "DG", "DH", "DL", "DN", "DT", "DY", "E", "EC", "EH", "EN", "EX", "FK", "FY", "G", "GL",
            "GU", "HA", "HD", "HG", "HP", "HR", "HS", "HU", "HX", "IG", "IP", "IV", "KA", "KT", "KW", "KY", "L", "LA", "LD", "LE",
            "LL", "LN", "LS", "LU", "M", "ME", "MK", "ML", "N", "NE", "NG", "NN", "NP", "NR", "NW", "OL", "OX", "PA", "PE", "PH",
            "PL", "PO", "PR", "RG", "RH", "RM", "S", "SA", "SE", "SG", "SK", "SL", "SM", "SN", "SO", "SP", "SR", "SS", "ST", "SW",
            "SY", "TA", "TD", "TF", "TN", "TQ", "TR", "TS", "TW", "UB", "W", "WA", "WC", "WD", "WF", "WN", "WR", "WS", "WV", "YO", "ZE"
            ];
        
            // Randomly select a postcode area
            const area = postcodeAreas[Math.floor(Math.random() * postcodeAreas.length)];
        
            // Randomly generate the district and sector parts of the postcode
            const district = Math.floor(Math.random() * 10);
            const sector = Math.floor(Math.random() * 10);
        
            // Generate the outward code (area + district)
            const outwardCode = area + (district < 10 ? ` ${district}` : district);
        
            // Generate the inward code (sector + single digit)
            const inwardCode = `${sector} ${Math.floor(Math.random() * 10)}`;
        
            // Combine outward and inward codes to form the full postcode
            const postcode = `${outwardCode} ${inwardCode}`;
        
            return postcode;
        };
  
  
        // Function to generate random integers
        const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // Function to get a random element from an array
        const getRandomElement = (array) => {
        return array[getRandomInt(0, array.length - 1)];
        };

        // Generate dummy data
        const generateDummyData = () => {
            for (let i = 0; i < 200; i++) {
                const gender = getRandomInt(0, 1); // 0 for male, 1 for female
                const firstName = gender === 0 ? getRandomElement(maleNames) : getRandomElement(femaleNames);
                const lastName = getRandomElement(maleLastNames);
                const trading_name = `${lastName} ${getRandomElement(industries)}`;

                const dummyObject = {
                vtsId: `${this.generateRandomId()}`,
                vtsSiteNo: `${this.generateRandomId()}`,
                trading_name: trading_name,
                contactForeName: firstName,
                contactSurname: lastName,
                garageRecord: '111',
                contactMainNo: `0${getRandomInt(1000000000, 9999999999)}`,
                contactMobileNo: `07${getRandomInt(100000000, 999999999)}`,
                contactEmail: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
                password: `${getRandomInt(10000, 99999)}`,
                aedmName: `${firstName} ${lastName}`,
                aedmPhoneNo: `0${getRandomInt(1000000000, 9999999999)}`,
                aedmEmail: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
                dateCalled: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
                callbackDate: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
                notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                cpdNeeded: Math.random() < 0.5,
                cpdNotes: "CPD notes Lorem ipsum dolor sit amet.",
                level3Required: Math.random() < 0.5,
                level3Notes: "Level 3 notes Lorem ipsum dolor sit amet.",
                motTestingClass47Required: Math.random() < 0.5,
                motTestingClass47Notes: "Mot testing class 47 notes Lorem ipsum dolor sit amet.",
                motTestingClass12Required: Math.random() < 0.5,
                motTestingClass12Notes: "Mot testing class 12 notes Lorem ipsum dolor sit amet.",
                motTestingClass3Required: Math.random() < 0.5,
                motTestingClass3Notes: 'these are the mot testing class 3 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
                motTestingClass5Required: Math.random() < 0.5,
                motTestingClass5Notes: 'these are the mot testing class 5 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
                motTestCentreManagementRequired: Math.random() < 0.5,
                motTestCentreManagementNotes: 'these are the mot test centre management notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
                vtsProSolutionRequired: Math.random() < 0.5,
                vtsProSolutionRequiredNotes: 'these are the vts pro solution notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
                invoiceContact: getRandomElement(maleNames),
                invoiceContactNo: '099999',
                invoiceContactEmail: `${getRandomElement(maleNames)}@hotmail.com`,
                invoiceContactNotes: 'these are the invoice contact notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
                vtsAddress1: `${getRandomInt(1000000000, 9999999999)} ${getRandomElement(industries)} ${getRandomElement(streetTypes)}`,
                vtsAddress2: 'Corby',
                vtsAddress3: '',
                vtsCity: 'Corby',
                vtsCounty: 'Northamptonshire',
                vtsPostcode:`${generateUKPostcode()}`,
                vtsData1: 1,
                vtsData2: 1,
                vtsData3: 1,
                vtsData4: 1,
                vtsData5: 1,
                vtsData7: 1,
                garageTesters: [
                    {
                        firstName: 'Helen',
                        lastName: 'Smith',
                        userID: 'h111',
                        phoneNo: '09999999898',
                        email: 'yup@gmail.com'
                    },
                    {
                        firstName: 'David',
                        lastName: 'Smith',
                        userID: 'h111',
                        phoneNo: '09999999898',
                        email: 'yup@gmail.com'
                    },
                    {
                        firstName: 'Gary',
                        lastName: 'Smith',
                        userID: 'h111',
                        phoneNo: '09999999898',
                        email: 'yup@gmail.com'
                    },
                    {
                        firstName: 'Holly',
                        lastName: 'Smith',
                        userID: 'h111',
                        phoneNo: '09999999898',
                        email: 'yup@gmail.com'
                    },
                    {
                        firstName: 'Chris',
                        lastName: 'Smith',
                        userID: 'h111',
                        phoneNo: '09999999898',
                        email: 'yup@gmail.com'
                    }
                ],
                consultant: 'Ben',
                documents: [],
                contactedForTraining: Math.random() < 0.5,
                contactedForCompliance: Math.random() < 0.5,
                callbackNeeded: Math.random() < 0.5,
                headStation: Math.random() < 0.5,
                testingStationList: [],
                archive: Math.random() < 0.5
                // Add more fields as needed
                };

                this.data.push(dummyObject);
            }
        };
        let liamObject = {
            vtsId: `57`,
            vtsSiteNo: `${getRandomInt(1000, 9999)}`,
            trading_name: 'Liam Walton',
            contactForeName: 'Liam',
            garageRecord: '111',
            contactSurname: 'Walton',
            contactMainNo: `0${getRandomInt(1000000000, 9999999999)}`,
            contactMobileNo: `07${getRandomInt(100000000, 999999999)}`,
            contactEmail: `Liam@example.com`,
            password: `${getRandomInt(10000, 99999)}`,
            aedmName: `Liam`,
            aedmPhoneNo: `0${getRandomInt(1000000000, 9999999999)}`,
            aedmEmail: `Liam`,
            dateCalled: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
            callbackDate: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
            notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            cpdNeeded: Math.random() < 0.5,
            cpdNotes: "CPD notes Lorem ipsum dolor sit amet.",
            level3Required: Math.random() < 0.5,
            level3Notes: "Level 3 notes Lorem ipsum dolor sit amet.",
            motTestingClass47Required: Math.random() < 0.5,
            motTestingClass47Notes: "Mot testing class 47 notes Lorem ipsum dolor sit amet.",
            motTestingClass12Required: Math.random() < 0.5,
            motTestingClass12Notes: "Mot testing class 12 notes Lorem ipsum dolor sit amet.",
            motTestingClass3Required: Math.random() < 0.5,
            motTestingClass3Notes: 'these are the mot testing class 3 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
            motTestingClass5Required: Math.random() < 0.5,
            motTestingClass5Notes: 'these are the mot testing class 5 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
            motTestCentreManagementRequired: Math.random() < 0.5,
            motTestCentreManagementNotes: 'these are the mot test centre management notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
            vtsProSolutionRequired: Math.random() < 0.5,
            vtsProSolutionRequiredNotes: 'these are the vts pro solution notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
            invoiceContact: `Liam`,
            invoiceContactNo: '099999',
            invoiceContactEmail: `${getRandomElement(maleNames)}@hotmail.com`,
            invoiceContactNotes: 'these are the invoice contact notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
            vtsAddress1: `4 Flatford Close`,
            vtsAddress2: '',
            vtsAddress3: '',
            vtsCity: 'Corby',
            vtsCounty: 'Northamptonshire',
            vtsPostcode:`NN18 8PU`,
            vtsData1: 1,
            vtsData2: 1,
            vtsData3: 1,
            vtsData4: 1,
            vtsData5: 1,
            vtsData7: 1,
            garageTesters: [
                {
                    firstName: 'Helen',
                    lastName: 'Smith',
                    userID: 'h111',
                    phoneNo: '09999999898',
                    email: 'yup@gmail.com'
                },
                {
                    firstName: 'David',
                    lastName: 'Smith',
                    userID: 'h111',
                    phoneNo: '09999999898',
                    email: 'yup@gmail.com'
                },
                {
                    firstName: 'Gary',
                    lastName: 'Smith',
                    userID: 'h111',
                    phoneNo: '09999999898',
                    email: 'yup@gmail.com'
                },
                {
                    firstName: 'Holly',
                    lastName: 'Smith',
                    userID: 'h111',
                    phoneNo: '09999999898',
                    email: 'yup@gmail.com'
                },
                {
                    firstName: 'Chris',
                    lastName: 'Smith',
                    userID: 'h111',
                    phoneNo: '09999999898',
                    email: 'yup@gmail.com'
                }
            ],
            consultant: 'Ben',
            documents: [],
            contactedForTraining: Math.random() < 0.5,
            contactedForCompliance: Math.random() < 0.5,
            callbackNeeded: Math.random() < 0.5,
            headStation: Math.random() < 0.5,
            testingStationList: [],
            archive: Math.random() < 0.5
            };
        this.data.push(liamObject)

        let motExpertObj = {
        vtsId: `8788`,
        vtsSiteNo: `${getRandomInt(1000, 9999)}`,
        trading_name: 'Paul McAlindon',
        contactForeName: 'Paul',
        contactSurname: 'McAlindon',
        contactMainNo: `0${getRandomInt(1000000000, 9999999999)}`,
        contactMobileNo: `07${getRandomInt(100000000, 999999999)}`,
        contactEmail: `Liam@example.com`,
        password: `${getRandomInt(10000, 99999)}`,
        garageRecord: '111',
        aedmName: `Liam`,
        aedmPhoneNo: `0${getRandomInt(1000000000, 9999999999)}`,
        aedmEmail: `Liam`,
        dateCalled: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
        callbackDate: `${getRandomInt(1, 28)}-${getRandomInt(1, 12)}-2024`,
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cpdNeeded: Math.random() < 0.5,
        cpdNotes: "CPD notes Lorem ipsum dolor sit amet.",
        level3Required: Math.random() < 0.5,
        level3Notes: "Level 3 notes Lorem ipsum dolor sit amet.",
        motTestingClass47Required: Math.random() < 0.5,
        motTestingClass47Notes: "Mot testing class 47 notes Lorem ipsum dolor sit amet.",
        motTestingClass12Required: Math.random() < 0.5,
        motTestingClass12Notes: "Mot testing class 12 notes Lorem ipsum dolor sit amet.",
        motTestingClass3Required: Math.random() < 0.5,
        motTestingClass3Notes: 'these are the mot testing class 3 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
        motTestingClass5Required: Math.random() < 0.5,
        motTestingClass5Notes: 'these are the mot testing class 5 notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
        motTestCentreManagementRequired: Math.random() < 0.5,
        motTestCentreManagementNotes: 'these are the mot test centre management notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
        vtsProSolutionRequired: Math.random() < 0.5,
        vtsProSolutionRequiredNotes: 'these are the vts pro solution notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
        invoiceContact: `Liam`,
        invoiceContactNo: '099999',
        invoiceContactEmail: `${getRandomElement(maleNames)}@hotmail.com`,
        invoiceContactNotes: 'these are the invoice contact notes  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore. Nulla ratione exercitationem doloribus ab suscipit quis reiciendis, placeat dicta quae, et praesentium provident libero ut, architecto error. In, repellat?',
        vtsAddress1: `4 Cirrus Park`,
        vtsAddress2: 'Moulton Park Industrial Estate',
        vtsAddress3: '',
        vtsCity: 'Northampton',
        vtsCounty: 'Northamptonshire',
        vtsPostcode:`NN3 6UR`,
        vtsData1: 1,
        vtsData2: 1,
        vtsData3: 1,
        vtsData4: 1,
        vtsData5: 1,
        vtsData7: 1,
        garageTesters: [
            {
                firstName: 'Helen',
                lastName: 'Smith',
                userID: 'h111',
                phoneNo: '09999999898',
                email: 'yup@gmail.com'
            },
            {
                firstName: 'David',
                lastName: 'Smith',
                userID: 'h111',
                phoneNo: '09999999898',
                email: 'yup@gmail.com'
            },
            {
                firstName: 'Gary',
                lastName: 'Smith',
                userID: 'h111',
                phoneNo: '09999999898',
                email: 'yup@gmail.com'
            },
            {
                firstName: 'Holly',
                lastName: 'Smith',
                userID: 'h111',
                phoneNo: '09999999898',
                email: 'yup@gmail.com'
            },
            {
                firstName: 'Chris',
                lastName: 'Smith',
                userID: 'h111',
                phoneNo: '09999999898',
                email: 'yup@gmail.com'
            }
        ],
        consultant: 'Ben',
        documents: [],
        contactedForTraining: Math.random() < 0.5,
        contactedForCompliance: Math.random() < 0.5,
        callbackNeeded: Math.random() < 0.5,
        headStation: Math.random() < 0.5,
        testingStationList: [],
        archive: Math.random() < 0.5
        };
    this.data.push(motExpertObj)

        // Generate dummy data
        const dummyData = generateDummyData();
        // this.data = dummyData        
    }
    renderHTMLHeader () {
        let html = `
        <div class="button-container">
            <button class="modern-button data-launch-add-new-testing-station-record">
                <span class="plus-icon">+</span>
                New Testing Station
            </button>
        </div>
        <div class="container" style="height: 80vh; overflow-y: auto;">
            <table class="responsive-table" style="width: 100%; border-collapse: collapse;">
                <thead class="responsive-table__head" style="position: sticky; top: 0; z-index: 1;">
                    <tr class="responsive-table__row">
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">ID</th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">VTS</th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <span class='data-launch-header-label'>Trading Name</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <span class='data-launch-header-label'>Phone</span>
                        </th>
                         <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <span class='data-launch-header-label'>VTS City</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <span class='data-launch-header-label'>VTS Postcode</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <span class='data-launch-header-label'>Is Garage Record ?</span>
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                          <i class="bi bi-funnel data-launch-filter-icon"></i>
                          <i class="bi bi-filetype-xls data-launch-export-icon data-launch-export-records"></i>
                          <i class="bi bi-arrow-counterclockwise data-launch-reset-filters-icon data-launch-table-reset-all-filters"></i>                                            
                        </th>                          
                    </tr>
                     <tr class="responsive-table__row data-launch-inactive" id='data-launch-testing-station-filter-container'>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="id" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="vts_site_number" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--name">
                            <input type="text" class="data-launch-filter-search" data-launch-header="trading_name" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="contact_main_number" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="vts_address_line_4" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="vts_postcode" style="width: 100%;" placeholder="" value="">
                        </th>
                        <th class="responsive-table__head__title responsive-table__head__title--status" scope="col">
                            <input type="text" class="data-launch-filter-search" data-launch-header="is_garage_record" style="width: 100%;" placeholder="" value="">
                        </th>                  
                    </tr>                    
                </thead>
                <tbody class="responsive-table__body" id="data-launch-testing-station-table-body">
                `
        this.renderHTMLData(html)
    }
    renderHTMLData(html) {
        let data = this.data
        let exportRow = 0
        for (let i = 0; i < data.length; i++) {
            html += `
            <tr class="responsive-table__row export-row" data-export-row="${exportRow}" data-export-header="VTS Site No" data-export-val="${data[i].vts_site_number}" data-vts-pro-id="${data[i].id}">
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="ID" data-export-val="${data[i].id}" scope="row">${data[i].id}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS Site Number" data-export-val="${data[i].vts_site_number}" scope="row">${data[i].vts_site_number}</td>
                <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Trading Name" data-export-val="${typeof data[i].trading_name === 'undefined' ? '' : data[i].trading_name}" scope="row">
                ${data[i].trading_name.substring(0, 16)}
				</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Contact Main No"                data-export-val="${data[i].contact_main_number}" scope="row">${typeof data[i].contact_main_number === 'undefined' ? '' : data[i].contact_main_number}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS City"                data-export-val="${data[i].vts_address_line_4}" scope="row">${typeof data[i].vts_address_line_4 === 'undefined' ? '' : data[i].vts_address_line_4}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS Postcode"                data-export-val="${data[i].vts_postcode}" scope="row">${typeof data[i].vts_postcode === 'undefined' ? '' : data[i].vts_postcode}</td>
                <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Full Garage Client"                data-export-val="${data[i].is_garage_record}" scope="row">${typeof data[i].is_garage_record === 'undefined' ? '' : (data[i].is_garage_record === 1 ? 'Yes' : 'No' )}</td>
            </tr>` 
            exportRow++           
        }
        this.exportRow = exportRow
        this.renderHTMLBody(html)
    }
    renderHTMLBody (html) {
        html += `       </tbody>
                    </table>
                </div>
            </div>`
        document.getElementById('testingStationPage').innerHTML = html
        this.addListeners()
    }
    buildTableBody (data) {
        let html = ''
        let exportRow = 0
        if (data.length === 0) {
            html += `<div><h1>Sorry, no records to display</h1></div>`
        }
        else {
            if (this.filters.length === 0) {
                data = this.data
            }
            for (let i = 0; i < data.length; i++) {
                html += `
                <tr class="responsive-table__row export-row" data-export-row="${exportRow}" data-export-header="VTS Site No" data-export-val="${data[i].vts_site_number}" data-vts-pro-id="${data[i].id}">
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="ID" data-export-val="${data[i].id}" scope="row">${data[i].id}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS Site Number" data-export-val="${data[i].vts_site_number}" scope="row">${data[i].vts_site_number}
                    <td class="responsive-table__body__text responsive-table__body__text--name export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Trading Name" data-export-val="${data[i].trading_name}" scope="row">${data[i].trading_name}</td>

                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Contact Main No"                data-export-val="${data[i].contact_main_number}" scope="row">${data[i].contact_main_number}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS City"                data-export-val="${data[i].vts_address_line_4}" scope="row">${data[i].vts_address_line_4}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="VTS Postcode"                data-export-val="${data[i].vts_postcode}" scope="row">${data[i].vts_postcode}</td>
                    <td class="responsive-table__body__text responsive-table__body__text--types export-record data-launch-testing-station-view-record-click" data-export-row="${exportRow}" data-export-header="Full Garage Client"                data-export-val="${data[i].is_garage_record}" scope="row">${typeof data[i].is_garage_record === 'undefined' ? '' : (data[i].is_garage_record === 1 ? 'Yes' : 'No' )}</td>
                </tr>` 
                exportRow++           
            }
        }      
        return html
    }
    openPromoteToGarageConfirmationBox(id) {
        document.getElementById('data-launch-promote-to-garage').style.display = 'none'
        document.getElementById('data-launch-testing-station-save-close').style.display = 'none'  
        document.getElementById('data-launch-confirmation-box-inject').style.display = 'block'
        document.getElementById('data-launch-testing-station-promote-garage-confirmation-box').style.display = 'block'        
    }
    promoteToGarageConfirmed () {
        document.getElementById('data-launch-testing-station-save-close').style.display = 'block'  
        document.getElementById('data-launch-confirmation-box-inject').style.display = 'none'
        document.getElementById('data-launch-testing-station-promote-garage-confirmation-box').style.display = 'none'        
        this.convertRecordToGarage()
    }
    promoteToGarageCancelled () {
        document.getElementById('data-launch-promote-to-garage').style.display = 'inline-block'
        document.getElementById('data-launch-testing-station-save-close').style.display = 'block'  
        document.getElementById('data-launch-confirmation-box-inject').style.display = 'none'
        document.getElementById('data-launch-testing-station-promote-garage-confirmation-box').style.display = 'none'        
    }
    convertRecordToGarage () {
        let rec;
        let id = parseInt(this.id)
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                rec = this.data[i]
            }
        }
        let newGarageRec = {
            trading_name : rec.trading_name,
            testing_station_id: id,
            vts_address_line_1: rec.vts_address_line_1,
            vts_address_line_2: rec.vts_address_line_2,
            vts_address_line_3: rec.vts_address_line_3,
            vts_address_line_4: rec.vts_address_line_4,
            vts_postcode: rec.vts_postcode,
            vts_site_number: rec.vts_site_number,
            contact_forename: rec.contact_forename,
            contact_surname: rec.contact_surname,
            contact_main_number: rec.contact_main_number,
            contact_mobile_number: rec.contact_mobile_number,
            contact_email: rec.contact_email,
            date_called: rec.date_called,
            call_back_needed: rec.call_back_needed,
            callback_date: rec.callback_date,
            invoice_contact: rec.invoice_contact,
            invoice_contact_number: rec.invoice_contact_number,
            invoice_contact_email: rec.invoice_contact_email,
            invoice_contact_notes: rec.invoice_contact_notes,
            callback_notes: rec.callback_notes,
            cpd_needed: rec.cpd_needed,
            cpd_notes: rec.cpd_notes,
            level_3_required_checkb: rec.level_3_required_checkb,
            level_3_required: rec.level_3_required,
            aed_name: rec.aed_name,
            aed_password: rec.aed_password,
            aed_email: rec.aed_email,
            aed_phone_no: rec.aed_phone_no,
            mot_testing_class_4_7_req_checkb: rec.mot_testing_class_4_7_req_checkb,
            mot_testing_class_4_7_required: rec.mot_testing_class_4_7_required,
            mot_testing_class_1_2_req_checkb: rec.mot_testing_class_1_2_req_checkb,
            mot_testing_class_1_2_required: rec.mot_testing_class_1_2_required,
            mot_class_3_required_checkb: rec. mot_class_3_required_checkb,
            mot_class_3_required: rec.mot_class_3_required,
            mot_class_5_required_checkb: rec.mot_class_5_required_checkb,
            mot_class_5_required: rec.mot_class_5_required,
            mot_test_centre_management_req_checkb: rec.mot_test_centre_management_req_checkb,
            mot_test_centre_management_required: rec.mot_test_centre_management_required,
            vts_pro_solution_required_checkb: rec.vts_pro_solution_required_checkb,
            vts_pro_solution_required: rec.vts_pro_solution_required
        }
        createRecord('garage_records', newGarageRec).then(
            function success (res) {
                garageData.push(res)
                let newGarageRecordID = res.id
                document.getElementById('garageRecordId').style.display = 'inline'
                document.getElementById('garageRecordId').innerText = `Garage Record - ${newGarageRecordID}`
                let x = document.getElementById('garageRecordId')
                x.setAttribute('data-launch-id', newGarageRecordID)
                let updatedData = {
                    is_garage_record: 1,
                    garage_record_id: newGarageRecordID
                }
                updateRecord('testing_station', rec.id, updatedData).then(res => {
                    for (let i = 0; i < this.data.length; i++) {
                        if (this.data[i].id === rec.id) {
                            this.data[i].is_garage_record = 1
                            this.data[i].garage_record_id = newGarageRecordID                          
                        }        
                    }
                    for (let i = 0; i < testingStationData.length; i++) {
                        if (testingStationData[i].id === rec.id) {
                            testingStationData[i].is_garage_record = 1
                            testingStationData[i].garage_record_id = newGarageRecordID                          
                        }        
                    }
                },
                error => {
                    console.error(error)
                })
            },
            function error (err) {
                console.error(err)
            }
        )
    }
    navigateToGarageRecord (ev, id) {
        changePage(ev, id, 'garage')  
    }
    dataTransformation (id) {
        let rec;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                rec = this.data[i]
                break;
            }
        }
        // transform the garageTesters
        rec = this.dataTransformation_garageTesters(rec)
        return rec
    }
    dataTransformation_garageTesters(data) {
        let garageTesters = [];        
        // Iterate through the data to gather tester information
        for (let i = 1; i <= 5; i++) {
            let tester = {
            firstName: data[`garage_tester_${i}_fn`] || '',
            lastName: data[`garage_tester_${i}_ln`] || '',
            userID: data[`garage_tester_${i}_uid`] || '',
            phoneNo: data[`garage_tester_${i}_ph`] || '',
            email: data[`garage_tester_${i}_email`] || ''
            };
            garageTesters.push(tester);
        }        
        // Add the garageTesters array to the data object
        data.garageTesters = garageTesters;
        
        // Remove the old properties
        for (let i = 1; i <= 5; i++) {
            delete data[`garage_tester_${i}_fn`];
            delete data[`garage_tester_${i}_ln`];
            delete data[`garage_tester_${i}_uid`];
            delete data[`garage_tester_${i}_ph`];
            delete data[`garage_tester_${i}_email`];
        }          
        return data;
    }
    addListeners () {
        document.getElementById('testingStationPage').addEventListener('click', (event) => {
            event.stopPropagation()
            if (event.target.classList.contains('data-launch-testing-station-view-record-click')) {
                let id = parseInt(event.target.parentElement.dataset.vtsProId)
                let record = this.dataTransformation(id)
                this.openForm(true, record)
            }
            else if (event.target.classList.contains('data-launch-garage-record-click')) {
                let id = event.target.attributes["data-launch-id"].value
                if (id !== 'null') {
                    this.navigateToGarageRecord(event, id)
                }                
            }
            else if (event.target.classList.contains('data-launch-promote-to-garage')) {
                let id = event.target.attributes["data-launch-rec"].value
                this.openPromoteToGarageConfirmationBox(id)
            }
            else if (event.target.classList.contains('testing-station-list-view-open-garage-record')) {
                let id = event.target.value
                console.log('id', id )
                this.openPromoteToGarageConfirmationBox(id)
            }
            else if (event.target.classList.contains('data-launch-promote-confirm')) {
                this.promoteToGarageConfirmed()
            }
            else if (event.target.classList.contains('data-launch-promote-cancel')) {
                this.promoteToGarageCancelled()
            }
            else if (event.target.classList.contains('data-launch-add-new-testing-station-record')) {
                this.openForm(false)
            }
            else if (event.target.classList.contains('data-launch-nav-menu-plus-icon')) {
                this.openForm(false)
            }
            else if (event.target.classList.contains('data-launch-tabs-clickable-testing-station')) {
                // data-launch-testing-stations
                let x = Array.from(document.getElementsByClassName('data-launch-testing-stations-screen'))
                x.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let y = Array.from(document.getElementsByClassName('data-launch-tabs-clickable-testing-station'))
                y.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let z = Array.from(document.getElementsByClassName('data-launch-tabs-parent-li-testing-station'))
                z.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active')
                    }
                })
                let page = event.target.attributes["data-launch-menu-item"].value
                document.getElementById(`testing_station_parent_li_${page}`).classList.add('active')
                document.getElementById(`data-launch-testing-stations-${page}`).classList.add('active')
            }
            else if (event.target.classList.contains('data-launch-save-close-record')) {
                this.saveAndClose()
            }
            else if (event.target.classList.contains('data-launch-export-records')) {
                this.export()
            }
            else if (event.target.classList.contains('data-launch-filter-search')) {
                if (event.target.value === '') {
                    let header = event.target.attributes["data-launch-header"].value
                    let value = event.target.value
                    let anyMatches = false
                    for (let i = 0; i < this.filters.length; i++) {
                        if (this.filters[i].header === header) {
                            anyMatches = true
                        }                        
                    }
                    if (anyMatches === true) {
                        this.filterRemove(header,value)
                    }
                }
            }
            else if (event.target.classList.contains('data-launch-table-reset-all-filters')) {
                this.filterResetAll()
            }
            else if (event.target.classList.contains('data-launch-filter-icon')) {
                document.getElementById('data-launch-testing-station-filter-container').classList.toggle('data-launch-inactive')
            }
        })
        document.getElementById('testingStationPage').addEventListener('change', (event) => {
            if (event.target.classList.contains('data-launch-filter-search') && event.target.value !== '') {
                let header = event.target.attributes["data-launch-header"].value
                let value = event.target.value
                this.filterApply(header,value)
            }
            else if (event.target.classList.contains('data-launch-filter-search') && event.target.checked === true) {
                let header = event.target.attributes["data-launch-header"].value
                let value = event.target.checked
                this.filterApply(header,value)
            }
            else if (event.target.classList.contains('data-launch-filter-search') && event.target.value === '') {
                let header = event.target.attributes["data-launch-header"].value
                let value = event.target.value
                this.filterRemove(header,value)
            }
            else if (event.target.classList.contains('data-launch-field-editable')) {
                let field = event.target.attributes["data-launch-field"].value
                let recordID = document.getElementById('currentRecordID').innerHTML
                this.data.forEach(row=> {
                    if (row.id === recordID) {
                        row[field] = event.target.value
                    }
                })
            }
         })
    }
    filterApply (header,value, filterJustRemoved) {
        // if a filter has just been removed and there are now 0 filters
        if (filterJustRemoved === true && this.filters.length === 0) {
            this.filteredData = []
            this.filters = []
            let html = this.buildTableBody(this.data)
            document.getElementById('data-launch-testing-station-table-body').innerHTML = html
        }
        else if (filterJustRemoved === true && this.filters.length >= 1) {
            let furtherFilteredData = []
            let data = this.data
            for (let i = 0; i < data.length; i++) {
                let matchAllFilters = true; // Flag to track if the data item matches all filters

                // Iterate over each filter
                for (let j = 0; j < this.filters.length; j++) {
                    const filter = this.filters[j];
                    const header = filter.header;
                    const value = filter.value;

                    // Check if the data item matches the current filter
                    if (!(data[i][header].toUpperCase().includes(value.toUpperCase()) || data[i][header].includes(value))) {
                        // If the data item doesn't match the current filter, set matchAllFilters to false and break the loop
                        matchAllFilters = false;
                        break;
                    }
                }

                // If the data item matches all filters, add it to the filteredData array
                if (matchAllFilters) {
                    furtherFilteredData.push(data[i]);
                }
            }
            let html = this.buildTableBody(furtherFilteredData)
            document.getElementById('data-launch-testing-station-table-body').innerHTML = html
        }
        else if (this.filters.length === 0) {
            this.filters.push({header: header, value: value})
            for (let i = 0; i < this.data.length; i++) {
                if (header === 'id') {
                    if (this.data[i][header] === parseInt(value)) {
                        this.filteredData.push(this.data[i])
                    }
                }
                else if (this.data[i][header].toUpperCase().includes(value.toUpperCase()) || this.data[i][header].includes(value)) {
                    this.filteredData.push(this.data[i])
                }                
            }
            let html = this.buildTableBody(this.filteredData)
            document.getElementById('data-launch-testing-station-table-body').innerHTML = html
        }
        else {  
            let filterMatch = false
            let data = []
            for (let i = 0; i < this.filters.length; i++) {
               if (this.filters[i].header === header) {
                    filterMatch = true
                    this.filters[i].value = value
               }                
            }
            if (filterMatch === false) {
                this.filters.push({header: header, value: value})
                data = this.filteredData
            }
            else {
                if (this.filters.length === 1) {
                    data = this.data
                }
                else {
                    data = this.filteredData
                }
            }
            let furtherFilteredData = []
            for (let i = 0; i < data.length; i++) {
                let matchAllFilters = true; // Flag to track if the data item matches all filters

                // Iterate over each filter
                for (let j = 0; j < this.filters.length; j++) {
                    const filter = this.filters[j];
                    const header = filter.header;
                    const value = filter.value;

                    // Check if the data item matches the current filter
                    if (!(data[i][header].toUpperCase().includes(value.toUpperCase()) || data[i][header].includes(value))) {
                        // If the data item doesn't match the current filter, set matchAllFilters to false and break the loop
                        matchAllFilters = false;
                        break;
                    }
                }

                // If the data item matches all filters, add it to the filteredData array
                if (matchAllFilters) {
                    furtherFilteredData.push(data[i]);
                }
            }
            let html = this.buildTableBody(furtherFilteredData)
            document.getElementById('data-launch-testing-station-table-body').innerHTML = html
        }
    }
    filterRemove (header,value) {
        this.filters = this.filters.filter(function (filterRec) {
            return filterRec.header !== header
        })
        this.filterApply(header, value, true)
    }
    filterResetAll () {
        this.filteredData = []
        this.filters = []
        let x = Array.from(document.getElementsByClassName('data-launch-filter-search'))
        x.forEach(el => {
            if (el.attributes['type'].value === 'text' || el.attributes['type'].value === 'date' || el.attributes['type'].value === 'email') {
                el.value = ''
            }
            else if (el.attributes['type'].value === 'checkbox') {
                el.checked = false
            }
        })
        let html = this.buildTableBody(this.data)
        document.getElementById('data-launch-testing-station-table-body').innerHTML = html
    }
    saveAndClose () {
        // this effectively deletes the element, including all of the event listeners, and then creates a new copy with zero event listeners attached
        this.saveDetailsAboutTheRecord()
        const oldElement = document.getElementById('testingStationPage');
        const newElement = oldElement.cloneNode(true); // Cloning with all children and attributes
        oldElement.parentNode.replaceChild(newElement, oldElement);
    }
    saveDetailsAboutTheRecord () {
        let fieldObjectMeta = this.fieldObjectMeta()
        console.log('fieldObjectMeta', fieldObjectMeta)
        let fields = []
        for (const key in fieldObjectMeta) {
            for (let t = 0; t < fieldObjectMeta[key].fields.length; t++) {
                fields.push(fieldObjectMeta[key].fields[t])
            }
        }
        console.log('all the fields i need to check ', fields)
        console.log('this.newRecord', this.newRecord)
        let createRecordObject = {}
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].type === 'text' ||
                fields[i].type === 'email' ||
                fields[i].type === 'phone' ||
                fields[i].type === 'multi-text' ||
                fields[i].type === 'notes' ||
                fields[i].type === 'date' ) {
                if (document.getElementById(`${fields[i].field}_val`).value || document.getElementById(`${fields[i].field}_val`).value === '') {
                    console.log('this text field contains data ', fields[i], document.getElementById(`${fields[i].field}_val`).value)
                    createRecordObject[fields[i].field] = document.getElementById(`${fields[i].field}_val`).value
                }
            }
            else if (fields[i].type === 'checkbox') {
                if (document.getElementById(`${fields[i].field}_val`).checked) {
                    console.log('this text field contains data ', fields[i], document.getElementById(`${fields[i].field}_val`).checked)
                    let val = document.getElementById(`${fields[i].field}_val`).checked
                    if (val === true) {
                        createRecordObject[fields[i].field] = 1
                    }
                    else {
                        createRecordObject[fields[i].field] = 0
                    }                    
                }
            }
        }
        if (this.newRecord) {
            console.log('create RecordObject', createRecordObject)   
            createRecordObject.id = testing_station_next_id
            createRecordObject.is_garage_record = 0
            createRecord('testing_station', createRecordObject).then( res => {
                    console.log('CREATED NEW TESTING STATION IN DB', res)
                    testing_station_next_id++
                    this.data.splice(0,0, res)
                    this.renderHTMLHeader()
                },
                err => {
                    console.log(err)
                    this.renderHTMLHeader()
                }
            )
        }
        else {
            createRecordObject.id = this.recordId
            console.log('update RecordObject', createRecordObject)   
            updateRecord('testing_station', this.recordId, createRecordObject).then(res => {
                    console.log('UPDATED EXISTING TESTING STATION ???', res)
                    for (let i = 0; i < this.data.length; i++) {
                        if (this.data[i].id === createRecordObject.id ) {
                            this.data[i] = createRecordObject                          
                        }        
                    }
                    for (let i = 0; i < testingStationData.length; i++) {
                        if (testingStationData[i].id === createRecordObject.id) {
                            testingStationData[i] = createRecordObject                         
                        }        
                    }
                    this.renderHTMLHeader()
                },
                 err => {
                    console.log(err)
                    this.renderHTMLHeader()
                }
            )
        }   
    }
    generateRandomId () {
        const timestamp = new Date().getTime().toString(16); // Get current timestamp in hexadecimal
        let random = Math.random().toString(16).substring(2); // Get random number in hexadecimal
        random = random.substring(0, 4)
        return random; // Combine timestamp and random number
    }
    fieldObjectMeta () {
        return {
            Summary : {
                meta: {
                    columns: 3,
                    name: 'summary'
                },
                fields: [
                    {
                        field: 'vts_site_number',
                        label: 'VTS Site No',
                        type: 'text',
                        column: 1,
                        section: 1
                    },
                    {
                        field: 'trading_name',
                        label: 'Trading Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_forename',
                        label: 'First Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_surname',
                        label: 'Last Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_main_number',
                        label: 'Main Phone',
                        type: 'phone',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'contact_mobile_number',
                        label: 'Mobile Phone',
                        type: 'phone',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'contact_email',
                        label: 'Email',
                        type: 'email',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'date_called',
                        label: 'Date Called',
                        type: 'date',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'call_back_needed',
                        label: 'Call back needed',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'callback_date',
                        label: 'Callback Date',
                        type: 'date',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'garage_record_id',
                        label: 'VTS Garage Record',
                        type: 'record',
                        section: 1,
                        column: 2
                    },
                    {
                        field: [
                            {name: 'Address1', fieldName: 'vts_address_line_1'},
                            {name: 'Address2', fieldName :'vts_address_line_2'},
                            {name: 'Address3', fieldName: 'vts_address_line_3'},
                            {name: 'City',     fieldName: 'vts_address_line_4'},
                            {name: 'Postcode', fieldName: 'vts_postcode'}],
                        label: 'Address',
                        type: 'googleMaps',
                        section: 1,
                        column: 3
                    }
                ]
            },
            "Invoice Contact": {
                meta:  {
                    columns: 2,
                    name: 'invoiceContact'
                },
                fields: [
                    {
                        field: 'invoice_contact',
                        label: 'Invoice Contact',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_number',
                        label: 'Invoice Contact No',
                        type: 'phone',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_email',
                        label: 'Invoice Contact Email',
                        type: 'email',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'invoice_contact_notes',
                        label: 'Invoice Contact Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'callback_notes',
                        label: 'Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'cpd_needed',
                        label: 'CPD Needed',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'cpd_notes',
                        label: 'CPD Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'level_3_required_checkb',
                        label: 'Level 3 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 2
                    },
                    {
                        field: 'level_3_required',
                        label: 'Level 3 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    }
                ]
            },
            Address: {
                meta: {
                    columns: 1,
                    name: 'address'
                },
                fields: [
                    {
                        field: 'vts_address_line_1',
                        label: 'Address 1',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_2',
                        label: 'Address 2',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_3',
                        label: 'Address 3',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_address_line_4',
                        label: 'City',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_postcode',
                        label: 'Postcode',
                        type: 'text',
                        section: 1,
                        column: 1
                    }
                ]
            },
            AEDM: {
                meta: {
                    columns: 1,
                    name: 'aedm'
                },
                fields: [
                    {
                        field: 'aed_name',
                        label: 'AEDM Name',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'password',
                        label: 'AEDM Password',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'aed_email',
                        label: 'AEDM Email',
                        type: 'text',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'aed_phone_no',
                        label: 'AEDM Phone No',
                        type: 'text',
                        section: 1,
                        column: 1
                    }
                ]
            },
            "Testing Classes": {
                meta: {
                    columns: 3,
                    name: 'testing-classes'
                },
                fields: [
                    {
                        field: 'mot_testing_class_4_7_req_checkb',
                        label: 'MOT Testing Class 4 & 7 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_4_7_required',
                        label: 'MOT Testing Class 4 & 7 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_1_2_req_checkb',
                        label: 'MOT Testing Class 1 & 2 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_testing_class_1_2_required',
                        label: 'MOT Testing Class 1 & 2 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_3_required_checkb',
                        label: 'MOT Testing Class 3 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_3_required',
                        label: 'MOT Testing Class 3 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 2
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_5_required_checkb',
                        label: 'MOT Testing Class 5 Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_class_5_required',
                        label: 'MOT Testing Class 5 Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_test_centre_management_req_checkb',
                        label: 'MOT Test Centre Management Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'mot_test_centre_management_required',
                        label: 'MOT Test Centre Management Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    },
                    {
                        type: 'spacer',
                        height: 1,
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_pro_solution_required_checkb',
                        label: 'VTS Pro Solution Required',
                        type: 'checkbox',
                        section: 1,
                        column: 1
                    },
                    {
                        field: 'vts_pro_solution_required',
                        label: 'VTS Pro Solution Notes',
                        type: 'multi-text',
                        section: 1,
                        column: 3
                    }
                ]
            }
        }
    }
    buildFormMenu () {        
        let headers = this.fieldObjectMeta()
        let html = ''
        let fistIteration = true
        for (const key in headers) {
            if (fistIteration) {
                html += `<li class="nav-item data-launch-tabs-parent-li-testing-station modern-nav-item active" id="testing_station_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-testing-station modern-nav-link active" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>` 
                fistIteration = false
            }
            else {
            html +=     `<li class="nav-item data-launch-tabs-parent-li-testing-station modern-nav-item" id="testing_station_parent_li_${headers[key].meta.name}">
                            <a class="nav-link data-launch-tabs-clickable-testing-station modern-nav-link" data-launch-menu-item="${headers[key].meta.name}" href="#">${key}</a>
                        </li>`   
            }                   
        }
        return html
    }
    buildFormSections (rec, html) {
        let fieldDataObj = this.fieldObjectMeta()        
        let firstIteration = true
        console.log('rec is ', rec)
        if (rec !== 'NEW FORM') {
            for (const key in fieldDataObj) {
                if (firstIteration) {
                    html += `<div class='data-launch-testing-stations-screen row active' id='data-launch-testing-stations-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-testing-stations-screen row' id='data-launch-testing-stations-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                          <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="${fieldDataObj[key].fields[t].field}" value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'spacer') {
                                html += `<div style='height: 20px' class='data-launch-empty-spacer'></div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                             <a style='position: relative; top: -34%; left: 95%;' href="mailto:${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}"><i class="bi bi-envelope"></i></a>
                                          </div>`

                                          
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                           </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" data-launch-field-editable">${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' :  rec[fieldDataObj[key].fields[t].field]}</textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" checked="${typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ? '' : rec[fieldDataObj[key].fields[t].field]}">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'record') {
                                console.log('rec[fieldDataObj[key].fields[t].field]', rec[fieldDataObj[key].fields[t].field])
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>`
                                if (rec[fieldDataObj[key].fields[t].field] === null || rec[fieldDataObj[key].fields[t].field] === 0 || typeof rec[fieldDataObj[key].fields[t].field] === undefined || typeof rec[fieldDataObj[key].fields[t].field] === 'undefined' ) {
                                    html += `<button type="button" id="data-launch-promote-to-garage" class="btn btn-outline-primary data-launch-promote-to-garage" data-launch-rec="${rec.id}">Promote to Garage Record</button>
                                            <text style='cursor: pointer; display: none; color: blue; font-weight: bold;' class='data-launch-garage-record-click data-launch-change-page' data-launch-menu-item="garage" id="garageRecordId" data-launch-id=''></text>
                                    `
                                }
                                else {
                                    html += `<text style='cursor: pointer; color: blue; font-weight: bold;' class='data-launch-garage-record-click data-launch-change-page' data-launch-menu-item="garage" id="garageRecordId" data-launch-id='${rec[fieldDataObj[key].fields[t].field]}'>Garage Record - ${rec[fieldDataObj[key].fields[t].field]}</text>`
                                }
                                html += `</div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'subgrid') {
                                html += `<table class="table table-hover data-launch-table-clickable-row">
                                            <thead>
                                                <tr>`
                                fieldDataObj[key].fields[t].fieldLabels.forEach(label => {
                                    html +=         `<th scope="col">${label}</th>`
                                })
                                html += `       </tr>
                                            </thead>
                                        <tbody>`
                                rec[fieldDataObj[key].fields[t].array].forEach(row => {
                                    html += `<tr>`                       
                                    fieldDataObj[key].fields[t].field.forEach(field => {
                                        html += `<td>${row[field]}</td>`
                                    })
                                    html += `</tr>`
                                })
                                html += `</tbody>
                                    </table>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'googleMaps') {
                                let googleMapsString = ''
                                for (let j = 0; j < fieldDataObj[key].fields[t].field.length; j++) {
                                    if (fieldDataObj[key].fields[t].field[j].name === 'Address1' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]}$20`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Address2' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]}$20`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Address3' ) {
                                        googleMapsString += `${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'City' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'County' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]},`
                                    }
                                    else if (fieldDataObj[key].fields[t].field[j].name === 'Postcode' ) {
                                        googleMapsString += `$20${rec[fieldDataObj[key].fields[t].field[j].fieldName]}`
                                    }
                                }
                                html += `<div style="width: 100%">
                                            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${googleMapsString}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>            
                                        </div>`
                            }
                        }
                    }
                    html += `</div>`            
                }
                html += `</div>`
            }
        }
        else {
            for (const key in fieldDataObj) {
                if (firstIteration) {
                    html += `<div class='data-launch-testing-stations-screen row active' id='data-launch-testing-stations-${fieldDataObj[key].meta.name}'>`
                    firstIteration = false
                }
                else {
                    html += `<div class='data-launch-testing-stations-screen row' id='data-launch-testing-stations-${fieldDataObj[key].meta.name}'>`
                }
                let columns = fieldDataObj[key].meta.columns
                let colIndex = 0
                for (let i = 0; i < columns; i++) {
                    html += `<div class='col-lg-4 col-md-6 col-sm-12 col-xs-12 data-launch-field-container'>` 
                    colIndex = i + 1
                    for (let t = 0; t < fieldDataObj[key].fields.length; t++) {
                        if (fieldDataObj[key].fields[t].column === colIndex) {
                            if (fieldDataObj[key].fields[t].type === 'text') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                          <input id="${fieldDataObj[key].fields[t].field}_val" placeholder="${fieldDataObj[key].fields[t].label}" type='text' data-launch-field="${fieldDataObj[key].fields[t].field}" value="" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'spacer') {
                                html += `<div style='height: 20px' class='data-launch-empty-spacer'></div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'phone') {
                                html += `<div class='data-launch-input-field-container'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='phone' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'email') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='email' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                          </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'date') {
                                html += ` <div class='data-launch-input-field-container'>
                                             <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                             <input id="${fieldDataObj[key].fields[t].field}_val" placeholder='${fieldDataObj[key].fields[t].label}' type='date' value="" data-launch-field="${fieldDataObj[key].fields[t].field}" class='data-launch-input-field data-launch-field-editable'>
                                           </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'multi-text') {
                                html += `<div class='data-launch-input-field-container data-launch-input-field-container-multi-line'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <textarea  id="${fieldDataObj[key].fields[t].field}_val" class='data-launch-input-field-multi-line data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" data-launch-field-editable"></textarea>
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'checkbox') {
                                html += ` <div class='data-launch-input-field-container-checkbox'>
                                            <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>
                                            <input id="${fieldDataObj[key].fields[t].field}_val" type='checkbox' class='data-launch-input-field-checkbox data-launch-field-editable' data-launch-field="${fieldDataObj[key].fields[t].field}" checked="">
                                        </div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'record') {
                                html += `<div class='data-launch-input-field-container'>
                                          <label class="data-launch-field-labels">${fieldDataObj[key].fields[t].label}</label>`
                                html += `</div>`
                            }
                            else if (fieldDataObj[key].fields[t].type === 'subgrid') {
                                html += `<table class="table table-hover data-launch-table-clickable-row"></table>`
                            }                            
                        }
                    }
                    html += `</div>`            
                }
                html += `</div>`
            }
        }
        
        return html
    }
    openFormLaunchPad (bool, id) {
        this.id = id
        let rec;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === parseInt(id)) {
                rec = this.data[i]
            }        
        }
        this.openForm(true, rec)
    }
    openForm = (bool, rec) => {
        currentPage = 'Testing Station'
        let html = ''
        document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu')
        if (rec) {
            this.newRecord = false
            this.recordId = rec.id
            this.id = rec.id     
            // <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>  
            html = `            
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-confirmation-box-inject' id='data-launch-confirmation-box-inject'></div>
                                <div style='display: none' class='data-launch-testing-station-promote-garage-confirmation-box' id="data-launch-testing-station-promote-garage-confirmation-box">
                                        <h4 class='data-launch-testing-station-promote-garage-confirmation-box-header'> Are you sure you want to promote Garage ${rec.trading_name} (${rec.id}) ?</h4>
                                        <button class='data-launch-promote-confirm'>Confirm</button>
                                        <button class='data-launch-promote-cancel'>Cancel</button>
                                </div>
                                <button type="button" id="data-launch-testing-station-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header modern-record-header'>
                                    <h3 class="modern-record-title">${rec.trading_name}</h3>
                                    <h3 class="modern-record-subtitle">Testing Station  (VTS Site No - ${rec.vts_site_number} / ID - ${rec.id})</h3>                    
                                </div>
                                <div class='data-launch-tabs-container'>
                                    <nav class="navbar navbar-expand-lg navbar-light modern-navbar">
                                        <div class="container-fluid data-launch-form-tabs-container modern-navbar-container">
                                            <button class="navbar-toggler modern-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav modern-navbar-nav">
                                                ${this.buildFormMenu()}
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>      
                        ${this.buildFormSections(rec, html)}
                `
        }
        else {
            this.newRecord = true 
            // <i class="bi bi-plus data-launch-nav-menu-plus-icon" id="data-launch-nav-menu-plus-icon"></i>
            html = `           
            <div class='container-fluid'>
                            <div class='row'>
                                <div style='display: none' class='data-launch-confirmation-box-inject' id='data-launch-confirmation-box-inject'></div>
                                <button type="button" id="data-launch-testing-station-save-close" class="btn btn-outline-primary data-launch-save-close-record">Save & Close</button>
                                <div class='data-launch-record-header'>
                                    <h3></h3>
                                    <h3>Testing Station -  </h3><span style='display:none' id='currentRecordID'></span>                    
                                </div>
                                <div class='data-launch-tabs-container'>
                                    <nav class="navbar navbar-expand-lg navbar-light">
                                        <div class="container-fluid data-launch-form-tabs-container">
                                            <div class="data-launch-form-tabs-container-row">
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarNav">
                                                    <ul class="navbar-nav">
                                                    ${this.buildFormMenu()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                
                            </div>
                        </div>      
                        ${this.buildFormSections('NEW FORM', html)}
                `
        }
        document.getElementById('testingStationPage').innerHTML = html
    }
    export = () => {

        const wb = new ExcelJS.Workbook();
        const worksheetName = 'Simple Worksheet';
        const ws = wb.addWorksheet(worksheetName);

        let x = Array.from(document.getElementsByClassName('export-record'))
        let r = Array.from(document.getElementsByClassName('export-row'))


        /// find the column headers and build up the column headers array of objects for exceljs
        let columnHeaders = []            
        for (let i = 0; i < x.length; i++) {            
            if (x[i].getAttribute('data-export-row') == 0){
                columnHeaders.push({
                    header: x[i].getAttribute('data-export-header'),
                    key: x[i].getAttribute('data-export-header'),
                    width: 20                    
                })
            }                     
        }
        // applied the customer column headers to the exceljs worksheet.columns function
        ws.columns = columnHeaders
        
      /// find the data within each row and add it to the excel sheet
        for (let p = 0; p < r.length; p++) {  
            let val = {}  
            for (let i = 0; i < x.length; i++) {              
                if (x[i].getAttribute('data-export-row') == p){
                    val[x[i].getAttribute('data-export-header')] = x[i].getAttribute('data-export-val')
                }                     
            }
            ws.addRow(val)  
        }
        /// write to XLSX and download file
        wb.xlsx.writeBuffer()
        .then(buffer => {
            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${worksheetName}.xlsx`);
        });
        
    }
}
