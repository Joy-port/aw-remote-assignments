import { max } from './array.js';
import { calculate } from './object.js';
import { opPlus, opMinus, opErr } from './objectData.js'; 
import classObj from './object.js';
import { productData, avg } from './avg.js'; 

//assignment 1 Array

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

//assignment 2 Obj

//First way => JSON
calculate(opPlus);
calculate(opMinus);
calculate(opErr);

//Second way => Class

calculate(classObj.opMulti);
calculate(classObj.opDiv);
calculate(classObj.opErr2);

//assignment 3
avg(productData);



//assignment 4
//request 1
const title = document.querySelector('#js-title');
let times = 0 ;
title.addEventListener('click',changeTitleContent);


function changeTitleContent(e){
    if(e.target.nodeName !== 'H3'){
        console.log('please click on the title content');
        return 
    }
    e.target.textContent = `Have a very${times>1 ? "*" : ""}${times>1 ? times : ""} Good Day!`;
    times ++
}

//request 2
const menuBtn = document.querySelector('.navbar-button');
const closeMenuBtn = document.querySelector('.mobile-menu-closeBtn');

//display
const menuCanvas = document.querySelector('.js-menu');
const menuContent = document.querySelector('.mobile-menu-content');
let isOpen = false;
menuBtn.addEventListener('click',toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu (e){
    if(e.target.closest('button')){
        isOpen = !isOpen ;
        showMenu(isOpen);
    };
    console.log(isOpen);
}

function showMenu(status){
    if(status){
        menuCanvas.style.display = 'block';
        setTimeout(function() {
            menuCanvas.classList.add('mobile-menu-showUp');
            menuContent.classList.add('mobile-menu-slideIn');
          }, 100);
        
    } else {
        menuContent.classList.remove('mobile-menu-slideIn');
        menuCanvas.classList.remove('mobile-menu-showUp');
        menuCanvas.style.display = 'none';
    }
}

//request 3
const boxBtn = document.querySelector('#js-boxShowBtn');
const boxContent = document.querySelectorAll('[data-box]');
let clickNum = 0;
boxBtn.addEventListener('click', showMoreContent);

function showMoreContent (e) {
    e.preventDefault();
    if(e.target.nodeName !== "A"){
       return;
    };
    clickNum ++ ;
    if(boxContent[clickNum-1]){
        boxContent[clickNum-1].style.display = 'flex'
        if(clickNum === boxContent.length){
            boxBtn.classList.add('disabled');
            setTimeout(function() {
            alert('All content are shown');
        }, 100);
        }
    }else{
        console.log('there is no more content');
    }
}

//assignment 5
/* Batch #15 / Front-End Class
Remote Learning Assignment - Week 2
Assignment 5: Algorithm Practice (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a
specific target. You may assume that each input would have exactly one solution, and you
may not use the same element twice.
function twoSum(nums, target){
// your code here
}
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
* */