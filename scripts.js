const ingredientsData = [
    { id: 'rawCarbuncle', name: 'Raw Carbuncle', icon: 'https://abioticfactor.wiki.gg/images/thumb/c/c2/Item_Icon_-_Raw_Carbuncle.png/64px-Item_Icon_-_Raw_Carbuncle.png' },
    { id: 'rawPest', name: 'Raw Pest', icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a1/Item_Icon_-_Raw_Pest.png/64px-Item_Icon_-_Raw_Pest.png' },
    { id: 'rawPestRump', name: 'Raw Pest Rump', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/5d/Item_Icon_-_Raw_Pest_Rump.png/64px-Item_Icon_-_Raw_Pest_Rump.png' },
    { id: 'rawPeccaryChop', name: 'Raw Peccary Chop', icon: 'https://abioticfactor.wiki.gg/images/thumb/6/64/Item_Icon_-_Raw_Peccary_Chop.png/64px-Item_Icon_-_Raw_Peccary_Chop.png' },
    { id: 'rawAlienDrumstick', name: 'Raw Alien Drumstick', icon: 'https://abioticfactor.wiki.gg/images/thumb/e/ec/Item_Icon_-_Raw_Alien_Drumstick.png/64px-Item_Icon_-_Raw_Alien_Drumstick.png' },
    { id: 'rawExorHeart', name: 'Raw Exor Heart', icon: 'https://abioticfactor.wiki.gg/images/thumb/d/dc/Item_Icon_-_Raw_Exor_Heart.png/64px-Item_Icon_-_Raw_Exor_Heart.png' },
    { id: 'exorArm', name: 'Exor Arm', icon: 'https://abioticfactor.wiki.gg/images/thumb/c/c6/Item_Icon_-_Exor_Arm.png/64px-Item_Icon_-_Exor_Arm.png' },
    { id: 'greyeb', name: 'Greyeb', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/5e/Item_Icon_-_Greyeb.png/64px-Item_Icon_-_Greyeb.png' },
    { id: 'salt', name: 'Salt', icon: 'https://abioticfactor.wiki.gg/images/thumb/7/75/Item_Icon_-_Salt.png/64px-Item_Icon_-_Salt.png' },
    { id: 'tomato', name: 'Tomato', icon: 'https://abioticfactor.wiki.gg/images/thumb/e/e2/Item_Icon_-_Tomato.png/64px-Item_Icon_-_Tomato.png' },
    { id: 'potato', name: 'Potato', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/51/Item_Icon_-_Potato.png/64px-Item_Icon_-_Potato.png' },
    { id: 'anteverseWheat', name: 'Anteverse Wheat', icon: 'https://abioticfactor.wiki.gg/images/thumb/d/dd/Item_Icon_-_Anteverse_Wheat.png/64px-Item_Icon_-_Anteverse_Wheat.png' },
    { id: 'superTomato', name: 'Super Tomato', icon: 'https://abioticfactor.wiki.gg/images/thumb/f/ff/Item_Icon_-_Super_Tomato.png/64px-Item_Icon_-_Super_Tomato.png' },
    { id: 'carbuncleMushroom', name: 'Carbuncle Mushroom', icon: 'https://abioticfactor.wiki.gg/images/thumb/0/0c/Item_Icon_-_Carbuncle_Mushroom.png/64px-Item_Icon_-_Carbuncle_Mushroom.png' },
    { id: 'cannedPeas', name: 'Canned Peas', icon: 'https://abioticfactor.wiki.gg/images/thumb/2/29/Item_Icon_-_Canned_Peas.png/64px-Item_Icon_-_Canned_Peas.png' },
    { id: 'militaryMRE', name: 'Military M.R.E.', icon: 'https://abioticfactor.wiki.gg/images/thumb/1/19/Item_Icon_-_Military_M.R.E..png/64px-Item_Icon_-_Military_M.R.E..png' },
    { id: 'meltedIceCream', name: 'Melted Ice Cream', icon: 'https://abioticfactor.wiki.gg/images/thumb/f/f7/Item_Icon_-_Melted_Ice_Cream.png/64px-Item_Icon_-_Melted_Ice_Cream.png' },
    { id: 'doznuts', name: 'Doznuts', icon: 'https://abioticfactor.wiki.gg/images/thumb/6/6d/Item_Icon_-_Doznuts.png/64px-Item_Icon_-_Doznuts.png' },
    { id: 'jowlers', name: 'Jowlers', icon: 'https://abioticfactor.wiki.gg/images/thumb/e/e8/Item_Icon_-_Jowlers.png/64px-Item_Icon_-_Jowlers.png' },
    { id: 'skip', name: 'Skip', icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a2/Item_Icon_-_Skip.png/64px-Item_Icon_-_Skip.png' },
    { id: 'rawPeccarySausages', name: 'Raw Peccary Sausages', icon: 'https://abioticfactor.wiki.gg/images/thumb/4/40/Item_Icon_-_Raw_Peccary_Sausages.png/64px-Item_Icon_-_Raw_Peccary_Sausages.png' },
    { id: 'egg', name: 'Egg', icon: 'https://abioticfactor.wiki.gg/images/thumb/e/e0/Item_Icon_-_Egg.png/64px-Item_Icon_-_Egg.png' },
    { id: 'milkSac', name: 'Milk Sac', icon: 'https://abioticfactor.wiki.gg/images/thumb/a/ae/Item_Icon_-_Milk_Sac.png/64px-Item_Icon_-_Milk_Sac.png' },
    { id: 'rawDough', name: 'Raw Dough', icon: 'https://abioticfactor.wiki.gg/images/thumb/2/28/Item_Icon_-_Raw_Dough.png/64px-Item_Icon_-_Raw_Dough.png' },
    { id: 'anteverseCheese', name: 'Anteverse Cheese', icon: 'https://abioticfactor.wiki.gg/images/thumb/4/49/Item_Icon_-_Anteverse_Cheese.png/64px-Item_Icon_-_Anteverse_Cheese.png' },
    { id: 'antepasta', name: 'Antepasta', icon: 'https://abioticfactor.wiki.gg/images/thumb/2/27/Item_Icon_-_Antepasta.png/64px-Item_Icon_-_Antepasta.png' },
    { id: 'antecheeseSandwich', name: 'Antecheese Sandwich', icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a6/Item_Icon_-_Antecheese_Sandwich.png/64px-Item_Icon_-_Antecheese_Sandwich.png' },
    { id: 'rawEggPeccaryTartine', name: 'Raw Egg & Peccary Tartine', icon: 'https://abioticfactor.wiki.gg/images/thumb/9/99/Item_Icon_-_Raw_Egg_%26_Peccary_Tartine.png/64px-Item_Icon_-_Raw_Egg_%26_Peccary_Tartine.png' },
    { id: 'hydrochloricAcid', name: 'Hydrochloric Acid', icon: 'https://abioticfactor.wiki.gg/images/thumb/1/1e/Item_Icon_-_Hydrochloric_Acid.png/64px-Item_Icon_-_Hydrochloric_Acid.png' },
    { id: 'anteverseGel', name: 'Anteverse Gel', icon: 'https://abioticfactor.wiki.gg/images/thumb/f/f3/Item_Icon_-_Anteverse_Gel.png/64px-Item_Icon_-_Anteverse_Gel.png' },
    { id: 'peccarySkull', name: 'Peccary Skull', icon: 'https://abioticfactor.wiki.gg/images/thumb/e/ef/Item_Icon_-_Peccary_Skull.png/64px-Item_Icon_-_Peccary_Skull.png' },
    { id: 'silverScrap', name: 'Silver Scrap', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/50/Item_Icon_-_Silver_Scrap.png/64px-Item_Icon_-_Silver_Scrap.png' },
    { id: 'metalScrap', name: 'Metal Scrap', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/5a/Item_Icon_-_Metal_Scrap.png/64px-Item_Icon_-_Metal_Scrap.png' },
    { id: 'plasticScrap', name: 'Plastic Scrap', icon: 'https://abioticfactor.wiki.gg/images/thumb/c/c2/Item_Icon_-_Plastic_Scrap.png/64px-Item_Icon_-_Plastic_Scrap.png' },
    { id: 'glassScrap', name: 'Glass Scrap', icon: 'https://abioticfactor.wiki.gg/images/thumb/8/81/Item_Icon_-_Glass_Scrap.png/64px-Item_Icon_-_Glass_Scrap.png' },
    { id: 'techScrap', name: 'Tech Scrap', icon: 'https://abioticfactor.wiki.gg/images/thumb/8/88/Item_Icon_-_Tech_Scrap.png/64px-Item_Icon_-_Tech_Scrap.png' },
    { id: 'gigaGlue', name: 'Giga Glue', icon: 'https://abioticfactor.wiki.gg/images/thumb/5/57/Item_Icon_-_Giga_Glue.png/64px-Item_Icon_-_Giga_Glue.png' },
    { id: 'bagOfFeces', name: 'Bag of Feces', icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a4/Item_Icon_-_Bag_of_Feces.png/64px-Item_Icon_-_Bag_of_Feces.png' },
];

const ingredients = ingredientsData.reduce((acc, ing) => {
    acc[ing.id] = false;
    return acc;
}, {});

const options = {
    canMakeSoup: true,
    havePot: true,
    havePan: true,
    haveOven: false,
};

function updateOptionsFromUI() {
    options.canMakeSoup = document.getElementById('canMakeSoup').checked;
    options.havePot = document.getElementById('havePot').checked;
    options.havePan = document.getElementById('havePan').checked;
    options.haveOven = document.getElementById('haveOven').checked;

    updateRecipes();
}

document.getElementById('canMakeSoup').addEventListener('change', updateOptionsFromUI);
document.getElementById('havePot').addEventListener('change', updateOptionsFromUI);
document.getElementById('havePan').addEventListener('change', updateOptionsFromUI);
document.getElementById('haveOven').addEventListener('change', updateOptionsFromUI);

const effectsData = [
    { id: 'lightfooted', name: 'Lightfooted', description: '+10% Sprinting and Sneaking XP gain' },
    { id: 'souperSatisfied', name: 'Souper Satisfied', description: '-20% Hunger drain rate and -20% Thirst drain rate' },
    { id: 'heightenedSenses', name: 'Heightened Senses', description: '+10% Blunt Melee and Sharp Melee XP gain' },
    { id: 'quickReflexes', name: 'Quick Reflexes', description: '+10% Accuracy and Reloading XP gain' },
    { id: 'death', name: 'Death', description: 'What do ya think?' },
    { id: 'brainDrain', name: 'Brain Drain', description: '+15% XP gain' },
    { id: 'sugarHigh', name: 'Sugar High', description: '+25% Continence drain rate, -25% Stamina drain rate, and -25% Fatigue drain amount' },
    { id: 'sweetTooth', name: 'Sweet Tooth', description: '+25% Hunger & Thirst gained from snacks and soda, +50 Hunger & Thirst gained from sweets' },
    { id: 'livingOffTheLand', name: 'Living Off the Land', description: '+10% Agricultre XP gain' },
    { id: 'bodacious', name: 'Bodacious', description: '+25% Carry weight' },
    { id: 'megaAnte', name: 'Mega-Ante', description: '+10% Speed and +2 Strength XP gain' },
    { id: 'bigBrain', name: 'Big Brain', description: '+10% Crafting and Construction XP gain' },
    { id: 'temptationOfTheFlesh', name: 'Temptation of the Flesh', description: '+5% Damage reduction' },
    { id: 'desireOfTheFlesh', name: 'Desire of the Flesh', description: '+15% Damage reduction' },
    { id: 'caffeinated', name: 'Caffeinated', description: '+10 Temperature' },
    { id: 'Teleportation', name: 'Teleportation', description: 'Teleports you to a random nearby location' },
    { id: 'sick', name: 'Sick', description: 'You don\'t feel so good...' },
    { id: 'stinky', name: 'Stinky', description: 'You smell disgusting. This might attract unwanted attention and spread disease.' },
    { id: 'kingOfCarbuncles', name: 'King/Queen of Carbuncles', description: 'Carbuncles respect you... Or at least ignore you.'}
];

const effects = effectsData.reduce((acc, effect) => {
    acc[effect.id] = false;
    return acc;
}, {});

const recipes = [
    //#region Pan
    {
        id: 'cookedCarbuncle',
        name: 'Cooked Carbuncle',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/e/e7/Item_Icon_-_Cooked_Carbuncle.png/64px-Item_Icon_-_Cooked_Carbuncle.png',
        hunger: 10,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawCarbuncle'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedPest',
        name: 'Cooked Pest',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/1/10/Item_Icon_-_Cooked_Pest.png/64px-Item_Icon_-_Cooked_Pest.png',
        hunger: 10,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawPest'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedPestRump',
        name: 'Cooked Pest Rump',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/b/b2/Item_Icon_-_Cooked_Pest_Rump.png/64px-Item_Icon_-_Cooked_Pest_Rump.png',
        hunger: 12.5,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawPestRump'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedPeccaryChop',
        name: 'Cooked Peccary Chop',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/1/1f/Item_Icon_-_Cooked_Peccary_Chop.png/64px-Item_Icon_-_Cooked_Peccary_Chop.png',
        hunger: 15,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawPeccaryChop'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedPeccarySausages',
        name: 'Cooked Peccary Sausages',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a4/Item_Icon_-_Cooked_Peccary_Sausages.png/64px-Item_Icon_-_Cooked_Peccary_Sausages.png',
        hunger: 30,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawPeccarySausages'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedAlienDrumstick',
        name: 'Cooked Alien Drumstick',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/b/b3/Item_Icon_-_Cooked_Alien_Drumstick.png/64px-Item_Icon_-_Cooked_Alien_Drumstick.png',
        hunger: 25,
        thirst: '',
        portions: '',
        rads: 2,
        ingredients: ['rawAlienDrumstick'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedExorHeart',
        name: 'Cooked Exor Heart',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/b/b2/Item_Icon_-_Cooked_Exor_Heart.png/64px-Item_Icon_-_Cooked_Exor_Heart.png',
        hunger: 18.75,
        thirst: '',
        portions: '',
        rads: 5,
        ingredients: ['rawExorHeart'],
        options: ['havePan'],
        effect: ['Teleportation'],
    },
    {
        id: 'cookedFriedEgg',
        name: 'Cooked Fried Egg',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/6/6c/Item_Icon_-_Cooked_Fried_Egg.png/64px-Item_Icon_-_Cooked_Fried_Egg.png',
        hunger: 18.75,
        thirst: 6,
        portions: '',
        rads: '',
        ingredients: ['egg'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'antecheeseToastie',
        name: 'Antecheese Toastie',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/21/Item_Icon_-_Antecheese_Toastie.png/64px-Item_Icon_-_Antecheese_Toastie.png',
        hunger: 25.875,
        thirst: '',
        portions: '',
        rads: '',
        ingredients: ['antecheeseSandwich'],
        options: ['havePan'],
        effect: [],
    },
    {
        id: 'cookedEggPeccaryTartine',
        name: 'Cooked Egg & Peccary Tartine',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/3/3e/Item_Icon_-_Cooked_Egg_%26_Peccary_Tartine.png/64px-Item_Icon_-_Cooked_Egg_%26_Peccary_Tartine.png',
        hunger: 71.3,
        thirst: 23,
        portions: '',
        rads: '',
        ingredients: ['rawEggPeccaryTartine'],
        options: ['havePan'],
        effect: [],
    },
    //#endregion

    //#region Soups
    {
        id: 'blandPeaSoup',
        name: 'Bland Pea Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/21/Item_Icon_-_Bland_Pea_Soup.png/64px-Item_Icon_-_Bland_Pea_Soup.png',
        hunger: 9.375,
        thirst: 21,
        portions: 4,
        rads: '',
        ingredients: ['cannedPeas', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['lightfooted'],
    },
    {
        id: 'splitPeaSoup',
        name: 'Split Pea Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/1/12/Item_Icon_-_Split_Pea_Soup.png/64px-Item_Icon_-_Split_Pea_Soup.png',
        hunger: 14.375,
        thirst: 21,
        portions: 4,
        rads: '',
        ingredients: ['cannedPeas', 'salt', 'rawPest'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'pestGoulash',
        name: 'Pest Goulash',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/d/d1/Item_Icon_-_Pest_Goulash.png/64px-Item_Icon_-_Pest_Goulash.png',
        hunger: 11.24,
        thirst: 16,
        portions: 4,
        rads: '',
        ingredients: ['rawPest', 'rawPestRump', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'meatyStew',
        name: 'Meaty Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/c/c6/Item_Icon_-_Meaty_Stew.png/64px-Item_Icon_-_Meaty_Stew.png',
        hunger: 26.25,
        thirst: 16,
        portions: 4,
        rads: '',
        ingredients: ['rawPeccaryChop', 'rawAlienDrumstick', 'rawPestRump'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['heightenedSenses'],
    },
    {
        id: 'simpleTomatoSoup',
        name: 'Simple Tomato Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/e/e7/Item_Icon_-_Simple_Tomato_Soup.png/64px-Item_Icon_-_Simple_Tomato_Soup.png',
        hunger: 9.375,
        thirst: 22.25,
        portions: 4,
        rads: '',
        ingredients: ['superTomato', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'creamyTomatoBisque',
        name: 'Creamy Tomato Bisque',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/d/d5/Item_Icon_-_Creamy_Tomato_Bisque.png/64px-Item_Icon_-_Creamy_Tomato_Bisque.png',
        hunger: 9.375,
        thirst: 37.875,
        portions: 4,
        rads: '',
        ingredients: ['superTomato', 'milkSac', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'veggieStew',
        name: 'Veggie Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/9/91/Item_Icon_-_Veggie_Stew.png/64px-Item_Icon_-_Veggie_Stew.png',
        hunger: 17.5,
        thirst: 24.125,
        portions: 4,
        rads: '',
        ingredients: ['potato', 'anteverseWheat', 'superTomato'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['livingOffTheLand'],
    },
    {
        id: 'sustenanceSoup',
        name: 'Sustenance Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/f/f2/Item_Icon_-_Sustenance_Soup.png/64px-Item_Icon_-_Sustenance_Soup.png',
        hunger: 18.75,
        thirst: 16,
        portions: 4,
        rads: '',
        ingredients: ['militaryMRE'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['quickReflexes'],
    },
    {
        id: 'sweetPorridge',
        name: 'Sweet Porridge',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/3/39/Item_Icon_-_Sweet_Porridge.png/64px-Item_Icon_-_Sweet_Porridge.png',
        hunger: 10.625,
        thirst: 24.125,
        portions: 4,
        rads: '',
        ingredients: ['meltedIceCream', 'anteverseWheat'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['sweetTooth'],
    },
    {
        id: 'sugarySlop',
        name: 'Sugary Slop',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/f/f6/Item_Icon_-_Sugary_Slop.png/64px-Item_Icon_-_Sugary_Slop.png',
        hunger: 18.75,
        thirst: 17.25,
        portions: 4,
        rads: '',
        ingredients: ['doznuts', 'jowlers', 'skip'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['sugarHigh'],
    },
    {
        id: 'mashedPotatoes',
        name: 'Mashed Potatoes',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/21/Item_Icon_-_Mashed_Potatoes.png/64px-Item_Icon_-_Mashed_Potatoes.png',
        hunger: 5,
        thirst: 33.5,
        portions: 4,
        rads: '',
        ingredients: ['potato', 'milkSac', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'potatoSausageStew',
        name: 'Potato and Sausage Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/40/Item_Icon_-_Potato_and_Sausage_Stew.png/64px-Item_Icon_-_Potato_and_Sausage_Stew.png',
        hunger: 20,
        thirst: 17.875,
        portions: 4,
        rads: '',
        ingredients: ['rawPeccarySausages', 'potato'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'heartyStew',
        name: 'Hearty Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/5/56/Item_Icon_-_Hearty_Stew.png/64px-Item_Icon_-_Hearty_Stew.png',
        hunger: 23.75,
        thirst: 23.5,
        portions: 4,
        rads: '',
        ingredients: ['rawExorHeart', 'carbuncleMushroom', 'superTomato'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied', 'bodacious'],
    },
    {
        id: 'balancedStew',
        name: 'Balanced Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/a/ad/Item_Icon_-_Balanced_Stew.png/64px-Item_Icon_-_Balanced_Stew.png',
        hunger: 10,
        thirst: 17.25,
        portions: 4,
        rads: '',
        ingredients: ['rawCarbuncle', 'carbuncleMushroom', 'salt'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['bigBrain'],
    },
    {
        id: 'peccaryStew',
        name: 'Peccary Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/20/Item_Icon_-_Peccary_Stew.png/64px-Item_Icon_-_Peccary_Stew.png',
        hunger: 21.875,
        thirst: 23.5,
        portions: 4,
        rads: '',
        ingredients: ['rawPeccaryChop', 'carbuncleMushroom', 'superTomato'],
        options: ['canMakeSoup', 'havePot'],
        effect: [],
    },
    {
        id: 'alMegaStew',
        name: 'A&L Mega Stew',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/b/ba/Item_Icon_-_A%26L_Mega-Stew.png/64px-Item_Icon_-_A%26L_Mega-Stew.png',
        hunger: 37,
        thirst: 16,
        portions: 4,
        rads: '',
        ingredients: ['exorArm', 'rawAlienDrumstick', 'rawExorHeart'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['megaAnte'],
    },
    {
        id: 'greyebChowder',
        name: 'Greyeb Chowder',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/41/Item_Icon_-_Greyeb_Chowder.png/64px-Item_Icon_-_Greyeb_Chowder.png',
        hunger: 12.5,
        thirst: 42.875,
        portions: 4,
        rads: '',
        ingredients: ['greyeb', 'milkSac', 'potato'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['desireOfTheFlesh'],
    },
    {
        id: 'carbuncleDumplings',
        name: "Carbuncle N' Dumplings",
        icon: 'https://abioticfactor.wiki.gg/images/thumb/6/64/Item_Icon_-_Carbuncle_N%27_Dumplings.png/64px-Item_Icon_-_Carbuncle_N%27_Dumplings.png',
        hunger: 23.75,
        thirst: 21,
        portions: 4,
        rads: '',
        ingredients: ['rawDough', 'rawCarbuncle', 'cannedPeas'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['souperSatisfied'],
    },
    {
        id: 'homeyPasta',
        name: 'Homey Pasta',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/e/ea/Item_Icon_-_Homey_Pasta.png/64px-Item_Icon_-_Homey_Pasta.png',
        hunger: 33.75,
        thirst: 22.25,
        portions: 4,
        rads: '',
        ingredients: ['antepasta', 'rawPeccarySausages', 'tomato'],
        options: ['canMakeSoup', 'havePot'],
        effect: [],
    },
    //#endregion

    //#region Complex
    {
        id: 'anteverseCheese',
        name: 'Anteverse Cheese',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/49/Item_Icon_-_Anteverse_Cheese.png/64px-Item_Icon_-_Anteverse_Cheese.png',
        hunger: 10,
        thirst: '',
        portions: 6,
        rads: 2,
        ingredients: ['milkSac', 'hydrochloricAcid', 'anteverseGel'],
        options: ['canMakeSoup', 'havePot'],
        effect: [],
    },
    //#endregion

    //#region Oven
    {
        id: 'rawDough',
        name: 'Raw Dough',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/28/Item_Icon_-_Raw_Dough.png/64px-Item_Icon_-_Raw_Dough.png',
        hunger: '',
        thirst: '',
        portions: '',
        rads: '',
        ingredients: ['anteverseWheat', 'anteverseWheat', 'milkSac'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'carbunclePizza',
        name: 'Carbuncle Pizza',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/0/00/Item_Icon_-_Carbuncle_Pizza.png/64px-Item_Icon_-_Carbuncle_Pizza.png',
        hunger: 12,
        thirst: 2.25,
        portions: 6,
        rads: '',
        ingredients: ['rawCarbuncle', 'tomato', 'anteverseCheese', 'rawDough'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'bread',
        name: 'Bread',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/45/Item_Icon_-_Bread.png/64px-Item_Icon_-_Bread.png',
        hunger: 12.5,
        thirst: 5,
        portions: '',
        rads: '',
        ingredients: ['anteverseWheat', 'anteverseWheat', 'milkSac'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'bread2',
        name: 'Bread',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/45/Item_Icon_-_Bread.png/64px-Item_Icon_-_Bread.png',
        hunger: 12.5,
        thirst: 5,
        portions: '',
        rads: '',
        ingredients: ['rawDough'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'cookedBakedPotato',
        name: 'Cooked Baked Potato',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/4/44/Item_Icon_-_Cooked_Baked_Potato.png/64px-Item_Icon_-_Cooked_Baked_Potato.png',
        hunger: 10,
        thirst: 3.75,
        portions: '',
        rads: '',
        ingredients: ['potato'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'cookedPestato',
        name: 'Cooked Pestato',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/3/36/Item_Icon_-_Cooked_Pestato.png/64px-Item_Icon_-_Cooked_Pestato.png',
        hunger: 20.7,
        thirst: 3.45,
        portions: '',
        rads: '',
        ingredients: ['rawPest', 'potato'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'cookedFries',
        name: 'Cooked Fries',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/e/ef/Item_Icon_-_Cooked_Fries.png/64px-Item_Icon_-_Cooked_Fries.png',
        hunger: 12.5,
        thirst: 3.75,
        portions: '',
        rads: '',
        ingredients: ['potato', 'salt'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'cookedStuffedRoastPeccary',
        name: 'Cooked Stuffed Roast Peccary',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/7/71/Item_Icon_-_Cooked_Stuffed_Roast_Peccary.png/64px-Item_Icon_-_Cooked_Stuffed_Roast_Peccary.png',
        hunger: 63,
        thirst: 28.75,
        portions: '',
        rads: '',
        ingredients: ['rawAlienDrumstick', 'carbuncleMushroom', 'greyeb', 'cannedPeas'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'bakedSimplePestPie',
        name: 'Baked Simple Pest Pie',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/1/14/Item_Icon_-_Baked_Simple_Pest_Pie.png/64px-Item_Icon_-_Baked_Simple_Pest_Pie.png',
        hunger: 30,
        thirst: '',
        portions: 6,
        rads: '',
        ingredients: ['rawDough', 'rawDough', 'rawPest', 'rawPest', 'rawPest', 'rawPest', 'rawPestRump', 'rawPestRump'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'pestPotPie',
        name: 'Pest Pot Pie',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/a/ae/Item_Icon_-_Pest_Pot_Pie.png/64px-Item_Icon_-_Pest_Pot_Pie.png',
        hunger: 27,
        thirst: 2,
        portions: 6,
        rads: '',
        ingredients: ['rawDough', 'rawDough', 'cannedPeas', 'potato', 'potato', 'rawPestRump', 'rawPestRump', 'rawPestRump'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'creepyMeatPie',
        name: 'Creepy Meat Pie',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/d/d0/Item_Icon_-_Creepy_Meat_Pie.png/64px-Item_Icon_-_Creepy_Meat_Pie.png',
        hunger: 30,
        thirst: '',
        portions: 6,
        rads: '',
        ingredients: ['rawDough', 'rawDough', 'greyeb', 'greyeb', 'carbuncleMushroom', 'carbuncleMushroom', 'rawPest', 'rawPest'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'gumdropCookie',
        name: 'Gumdrop Cookie',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/9/98/Item_Icon_-_Gumdrop_Cookie.png/64px-Item_Icon_-_Gumdrop_Cookie.png',
        hunger: 13,
        thirst: 5.175,
        portions: 6,
        rads: '',
        ingredients: ['egg', 'anteverseWheat', 'anteverseWheat', 'anteverseWheat', 'meltedIceCream', 'jowlers'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'carbuncleCasserole',
        name: 'Carbuncle Casserole',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/8/8d/Item_Icon_-_Carbuncle_Casserole.png/64px-Item_Icon_-_Carbuncle_Casserole.png',
        hunger: 16.5,
        thirst: 2.25,
        portions: 6,
        rads: '',
        ingredients: ['rawCarbuncle', 'rawCarbuncle', 'rawCarbuncle', 'potato', 'potato', 'carbuncleMushroom', 'carbuncleMushroom', 'anteverseCheese'],
        options: ['haveOven'],
        effect: ['kingOfCarbuncles'],
    },
    {
        id: 'carbuncleCasserole2',
        name: 'Carbuncle Casserole',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/8/8d/Item_Icon_-_Carbuncle_Casserole.png/64px-Item_Icon_-_Carbuncle_Casserole.png',
        hunger: 16.5,
        thirst: 2.25,
        portions: 6,
        rads: '',
        ingredients: ['rawCarbuncle', 'rawCarbuncle', 'rawCarbuncle', 'potato', 'potato', 'carbuncleMushroom', 'carbuncleMushroom', 'hydrochloricAcid', 'anteverseGel', 'milkSac'],
        options: ['haveOven', 'havePot', 'canMakeSoup'],
        effect: ['kingOfCarbuncles'],
    },
    {
        id: 'pekkieBrekkieHash',
        name: 'Pekkie Brekkie Hash',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/d/d7/Item_Icon_-_Pekkie_Brekkie_Hash.png/24px-Item_Icon_-_Pekkie_Brekkie_Hash.png',
        hunger: 26.25,
        thirst: 6.75,
        portions: 6,
        rads: 1,
        ingredients: ['egg', 'egg', 'egg', 'potato', 'potato', 'anteverseCheese', 'anteverseCheese', 'rawPeccarySausages'],
        options: ['haveOven'],
        effect: [],
    },
    {
        id: 'glowingGateau',
        name: 'Glowing Gâteau',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/a/ab/Item_Icon_-_Glowing_G%C3%A2teau.png/64px-Item_Icon_-_Glowing_G%C3%A2teau.png',
        hunger: 18,
        thirst: 6.525,
        portions: 6,
        rads: 2,
        ingredients: ['egg', 'egg', 'anteverseWheat', 'anteverseWheat', 'anteverseWheat', 'anteverseWheat', 'anteverseWheat', 'anteverseWheat', 'meltedIceCream'],
        options: ['haveOven'],
        effect: [],
    },
    //#endregion

    //#region Utility
    {
        id: 'gigaGlue',
        name: 'Giga Glue',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/5/57/Item_Icon_-_Giga_Glue.png/64px-Item_Icon_-_Giga_Glue.png',
        hunger: '',
        thirst: '',
        portions: '',
        rads: '',
        ingredients: ['peccarySkull'],
        options: ['havePot'],
        effect: [],
    },
    {
        id: 'solder',
        name: 'Solder',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/c/cd/Item_Icon_-_Solder_%28Soup%29.png/64px-Item_Icon_-_Solder_%28Soup%29.png',
        hunger: '',
        thirst: '',
        portions: '',
        rads: '',
        ingredients: ['silverScrap', 'metalScrap'],
        options: ['havePot'],
        effect: [],
    },
    //#endregion

    //#region Bad Soups
    {
        id: 'poopSoup',
        name: 'Poop Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/a/a4/Item_Icon_-_Bag_of_Feces.png/64px-Item_Icon_-_Bag_of_Feces.png',
        hunger: 3,
        thirst: 20,
        portions: 4,
        rads: '',
        ingredients: ['bagOfFeces'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['sick', 'stinky'],
    },
    {
        id: 'toxicSoup',
        name: 'Toxic Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/2/27/Item_Icon_-_Toxic_Soup.png/64px-Item_Icon_-_Toxic_Soup.png',
        hunger: 15,
        thirst: 20,
        portions: 4,
        rads: '',
        ingredients: ['plasticScrap', 'gigaGlue', 'bagOfFeces'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['sick'],
    },
    {
        id: 'killerSoup',
        name: 'Killer Soup',
        icon: 'https://abioticfactor.wiki.gg/images/thumb/5/52/Item_Icon_-_Killer_Soup.png/64px-Item_Icon_-_Killer_Soup.png',
        hunger: 15,
        thirst: 20,
        portions: 4,
        rads: '',
        ingredients: ['glassScrap', 'techScrap', 'metalScrap'],
        options: ['canMakeSoup', 'havePot'],
        effect: ['death'],
    },
    //#endregion
];

function populateIngredients() {
    const ingredientsContainer = document.getElementById('ingredients');
    ingredientsData.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.className = 'ingredient';
        ingredientDiv.id = ingredient.id;
        ingredientDiv.innerHTML = `<img src="${ingredient.icon}" alt="${ingredient.name}">`;
        ingredientsContainer.appendChild(ingredientDiv);

        ingredientDiv.addEventListener('click', () => {
            ingredients[ingredient.id] = !ingredients[ingredient.id];
            ingredientDiv.classList.toggle('selected');
            updateRecipes();
        });
    });
}

function sortTable(n) {
    const table = document.getElementById('recipes');
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    dir = 'asc';

    function isNumeric(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    }

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('TD')[n];
            y = rows[i + 1].getElementsByTagName('TD')[n];

            let xContent = x.innerHTML.toLowerCase();
            let yContent = y.innerHTML.toLowerCase();

            if (isNumeric(xContent) && isNumeric(yContent)) {
                xContent = parseFloat(xContent);
                yContent = parseFloat(yContent);
            }

            if (dir == 'asc') {
                if (xContent > yContent) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == 'desc') {
                if (xContent < yContent) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }

    Array.from(document.querySelectorAll('th')).forEach(th => th.classList.remove('sorted-asc', 'sorted-desc'));
    const sortedColumn = table.rows[0].getElementsByTagName('TH')[n];
    sortedColumn.classList.add(dir === 'asc' ? 'sorted-asc' : 'sorted-desc');
}

document.querySelectorAll('#recipes th').forEach((th, index) => {
    th.addEventListener('click', () => {
        sortTable(index);
    });
});

document.getElementById('filter-toggle').addEventListener('click', () => {
    document.getElementById('filter-options').classList.toggle('show-dropdown');
});

document.querySelectorAll('#filter-options input[type=number]').forEach((el) => {
    el.addEventListener('input', updateRecipes);
});

document.querySelectorAll('#filter-options input[type=checkbox]').forEach((el) => {
    el.addEventListener('change', function() {
        const effectId = this.id;
        effects[effectId] = this.checked;
        updateRecipes();
    });
});

function updateRecipes() {
    const minHunger = document.getElementById('min-hunger').value || 0;
    const minThirst = document.getElementById('min-thirst').value || 0;
    const maxRads = document.getElementById('max-rads').value || 0;

    const selectedEffects = Object.keys(effects).filter(effect => effects[effect]);

    const availableRecipes = recipes.filter((recipe) => {
        const satisfiesHunger = document.getElementById('min-hunger').value === '' || recipe.hunger >= minHunger;
        const satisfiesThirst = document.getElementById('min-thirst').value === '' || recipe.thirst >= minThirst;
        const belowRadsThreshold = document.getElementById('max-rads').value === '' || recipe.rads <= maxRads;
        const hasSelectedEffects = selectedEffects.length === 0 || selectedEffects.some(effect => recipe.effect.includes(effect));

        return (
            recipe.ingredients.every((ing) => ingredients[ing]) &&
            recipe.options.every((opt) => options[opt]) &&
            satisfiesHunger &&
            satisfiesThirst &&
            belowRadsThreshold &&
            hasSelectedEffects
        );
    });

    renderRecipes(availableRecipes);
}


function renderRecipes(recipesToRender) {
    const tableBody = document.getElementById('recipes').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    recipesToRender.forEach((recipe) => {
        const row = tableBody.insertRow();

        const nameCell = row.insertCell(0);
        nameCell.classList.add('recipe-name');
        nameCell.innerHTML = `
            <a href="https://abioticfactor.wiki.gg/wiki/${recipe.name.replace(/ /g, '_')}" target="_blank">
                <img src="${recipe.icon}" alt="${recipe.name}">
                ${recipe.name}
            </a>
        `;

        const ingredientsCell = row.insertCell(1);
        ingredientsCell.classList.add('ingredients-cell');
        ingredientsCell.innerHTML = recipe.ingredients.map(ing => {
            const ingredient = ingredientsData.find(dataItem => dataItem.id === ing);
            return `
                <a href="https://abioticfactor.wiki.gg/wiki/${ingredient.name.replace(/ /g, '_')}" target="_blank">
                    <img src="${ingredient.icon}" alt="${ingredient.name}">
                </a>
            `;
        }).join('');

        const portionCell = row.insertCell(2);
        portionCell.textContent = recipe.portions;

        const hungerCell = row.insertCell(3);
        hungerCell.textContent = recipe.hunger;

        const thirstCell = row.insertCell(4);
        thirstCell.textContent = recipe.thirst;

        const radCell = row.insertCell(5);
        radCell.textContent = recipe.rads;

        const effectCell = row.insertCell(6);
        const effectDescriptions = recipe.effect.map(effectId => {
            const effect = effectsData.find(e => e.id === effectId);
            return effect ? `<a href="https://abioticfactor.wiki.gg/wiki/${effect.name.replace(/ /g, '_')}" target="_blank">` + effect.name + "</a>: " + effect.description : effectId;
        }).join('<br>');
        effectCell.innerHTML = effectDescriptions;
        effectCell.id = "effects";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateIngredients();
    updateRecipes();
    updateOptionsFromUI();
});
