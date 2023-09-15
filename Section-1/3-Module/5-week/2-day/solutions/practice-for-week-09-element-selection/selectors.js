const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    console.log('------------- Section 1 -------------');
    // 1. Get all seeded fruit elements
    const  seedFruits = document.querySelectorAll('li.seed')
    // const seed2 = document.getElementsByClassName('seed')
    // console.log({seed2});
    console.log('1. Get all seeded fruit elements', seedFruits);

    // 2. Get all seedless fruit elements
    const seedlessFruits = document.querySelectorAll('li.seedless')
    console.log('2. Get all seedless fruit elements', seedlessFruits);


    // 3. Get first seedless fruit element
    const section  = document.getElementById('one')
    const fruitList = section.children[2]
    // console.log(fruitList);
    const firstSeedless = fruitList.children[2]

    //! or
    // const firstSeedless = document.querySelector('.seedless')
    console.log('3. Get first seedless fruit element',firstSeedless);


    /* Section 2 */
    console.log('------------- Section 2 -------------');
    // 4. Get inner span with text "you"
    const outerDiv = document.getElementById('wrapper')
    const secondary = document.querySelector('#wrapper > p > span')
    // console.log('here', secondary);
    const outerP = outerDiv.children[0]
    // console.log(outerP);

    //! el.childNodes gives a nodeList
    //! el.children gives an html list
    // const span = outerP.childNodes[1]

    const span = outerP.children[0]
    console.log('4. Get inner span with text "you"',span);

    //! OR
    //!get all spans then filter inner text for you
    // const you = Array.from(document.getElementsByTagName("span"))
    // .filter(span => span.innerText === 'you');
    // console.log({ you });



    // 5. Get all children of element "wrapper"
    const  wrapperChildren = document.getElementById('wrapper').children
    console.log('5. Get all children of element "wrapper"', wrapperChildren);

    // 6. Get all odd number list items in the list
    const oddLiNum = document.querySelectorAll('li.odd')

    //! OR
    // const odds = document.getElementsByClassName("odd");

    console.log('6. Get all odd number list items in the list', oddLiNum);

    // 7. Get all even number list items in the list
    const orderList = document.querySelector('ol').children
    //! OR
    // const evens = Array.from(document.querySelectorAll("#two > ol > li:not(.odd)"));

    console.log('7. Get all even number list items in the list', orderList[1], orderList[3]);

    /* Section 3 */
    console.log('------------- Section 3 -------------');
    // 8. Get all tech companies without a class name
    const techSection = document.getElementById('three').children
    const pTechTagChildren = techSection[1].children
    const taglessTech = pTechTagChildren[0]

    //!OR
    // const taglessTech = document.querySelectorAll("#three a:not([class])");
    console.log('8. Get all tech companies without a class name', taglessTech);

    // 9. Get "Amazon" list element
    const amazonEl = document.querySelector('.shopping')
    console.log('9. Get "Amazon" list element', amazonEl);

    // 10. Get all unicorn list elements (not the image element)
    const startUpUl = document.querySelectorAll('ul')[1]
    const li = startUpUl.children
    //! OR
    // const unicorns = document.querySelector("#three > ul").children;
    console.log('10. Get all unicorn list elements (not the image element)', li);
}

window.onload = select;
