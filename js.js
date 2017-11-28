		/*****************************************************************************************************
		 * 			                                                                                         *
		 * ( 1     2 )  \ /   ( 4     3 )   ____  ( 1     5 )   \ /  ( 4    2 )   ____   ( 4+4         3+2 ) *
		 * (         )   *    (         )   ____  (         )    *   (        )   ____   (                 ) *
		 * ( 3 	  4  )  / \   ( 2     1 )         ( 2     4 )   / \  ( 3    1 )          ( 12+8        9+4 ) *
		 *            																						 *
		 *                                                                                                   *
		 *                                                                                                   *
		 *    _____    ( 8     5 )                                                                           *
		 *    _____    (         )                                                                           *
		 *             ( 20   13 )                                                                           *
		 *                                                                                                   *		
         * **************************************************************************************************/
		
		
		/***************************************
		 *  	تعريف حقول الادخال كمتغيرات		*
		 * 										*
		 ************************************** */

var input1 = document.getElementById("input1"),
	input2 = document.getElementById("input2"),
	input3 = document.getElementById("input3"),
	input4 = document.getElementById("input4"),
	input5 = document.getElementById("input5"),
	input6 = document.getElementById("input6"),
	input7 = document.getElementById("input7"),
	input8 = document.getElementById("input8");
		 
		 /*******************************
		  * 	تعريف الزرار كمتغير 	*
		  * 							*
		  * *****************************/ 

var 	
	button = document.getElementById("button");
	
	
	/****************************
	 * 	 *             تعريف ال span كمتغيرات 
	 * 							*
	 * **************************/

var span1 = document.getElementById("span1"),
	span2 = document.getElementById("span2"),
	span3 = document.getElementById("span3"),
	span4 = document.getElementById("span4");
	
	
 
	
		/**********************************
		 *  	الـــبــنـــامـــــج
		 * 
		 * 
		 * ********************************/


	button.onclick = function(){
		span1.innerHTML= input1.value * input5.value + input2.value * input7.value;
		span2.innerHTML= input1.value * input6.value + input2.value * input8.value;
		span3.innerHTML = input3.value * input5.value + input4.value *input7.value;
		span4.innerHTML = input3.value * input6.value + input4.value * input8.value;
		
	}
