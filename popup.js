// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('Convert');
  checkPageButton.onclick = function(){convert()};
}, false);


function convert()
{
  var Id = document.getElementById('IdToConvert').value; // Need to fetch this in background in V2.0 from URL Itself
   if(Id.length != 15){
	//	window.alert("Bad Error");
		return;
   }
   for(var i=0; i<3; i++) {
		var temp = 0;
		var temp1=0;
		for(var j=0; j<5; j++) {
			var c = Id.charAt(i*5+j);
			if ( c >='A' && c <='Z'){
				temp+=1<<j;
				//temp+=(2*j); // not using as bit operation should be faster. 
			}
		}
		temp1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345".charAt(temp);
		Id = Id + temp1;
   }
  convertedId.innerHTML  = Id;
}
