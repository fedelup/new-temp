			$(document).ready(function(){    		
	    		$("#searchPlace").click(function(){
	    		
	    			var options = {
   					  componentRestrictions: {country: "ind"}
   					 };
	    			var autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchPlace'),options);
	    			autocomplete.addListener('place_changed', fillInAddress);
	    		});
	   		});
							
			function fillInAddress() {
		        //Get the place details from the autocomplete object.
				var place = autocomplete.getPlace();
		    	var obj, Demo;
		    	var msg = place.geometry.location.lat()+"  "+place.geometry.location.lng();
		          alert(msg);
 	 	          Demo = {
	 	                  "lat": place.geometry.location.lat(),
	 	                  "lng": place.geometry.location.lng()
	 	          };
 	 	          obj = JSON.stringify(Demo);
 	 	          document.getElementById('lat').innerHTML=obj.lat;
 	 	          document.getElementById('lng').innerHTML=obj.lng;
		        }
