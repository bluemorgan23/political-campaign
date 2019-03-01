const districtArray = [];

const platformObject = {
    taxes: "",
    jobs: "",
    infrastructure: "",
    health: "",
    crime: ""
};

const donations = [];

const calendar = {
    date: "",
    description: ""
};

const volunteerInfo = {
    name: "",
    address: "",
    email: "",
    phone: "",
    availability: "",
    activity: ""
};

const biography = [];

const images = {
    headShot: "",
    familyPic: "",
    constituents: "" 
};

const mission = [];

const registration = [];

const addDistrict = (districtName) => {
    districtArray.push(districtName);
};

const addPlatform = (platformTaxes, platformJobs, platformInf, platformHealth, platformCrime) => {
    platformObject.taxes = platformTaxes;
    platformObject.jobs = platformJobs;
    platformObject.infrastructure = platformInf;
    platformObject.health = platformHealth;
    platformObject.crime = platformCrime;
};

const addDonation = (donationLink) => {
    donations.push(donationLink);
};

const addEvent = (eventDate, eventDescription) => {
    calendar.date = eventDate;
    calendar.description = eventDescription;
};

const addVolunteer = (volName, volAddress, volEmail, volPhone, volAvailabilty, volActivity) => {
    volunteerInfo.name = volName;
    volunteerInfo.address = volAddress;
    volunteerInfo.email = volEmail;
    volunteerInfo.phone = volPhone;
    volunteerInfo.availability = volAvailabilty;
    volunteerInfo.activity = volActivity;
};

const addBiography = (bio) => {
    biography.push(bio);
};

const addImages = (headImage, famImage, constImage) => {
    images.headShot = headImage;
    images.familyPic = famImage;
    images.constituents = constImage;
};

const addMission = (missionStatement) => {
    mission.push(missionStatement);
};

const addRegistration = (regInfo) => {
    registration.push(regInfo);
};