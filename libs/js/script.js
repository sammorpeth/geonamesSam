$('#sbmtAddress').click(function() {
 
  $.ajax({
    url: "libs/php/getCountryLatLng.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#userAddLat').val(),
      lng: $('#userAddLng').val()
    },
    success: function(result) {

      console.log(result);

      if (result.status.name == "ok") {
        $('#addressLat').html(result['data'][0]['lat']);
        $('#addressLng').html(result['data'][0]['lng']);
        $('#addressName').html(result['data'][0]['name']);
        $('#addressLocation').html(result['data'][0]['fclName']);
        $('#addressCountryName').html(result['data'][0]['countryName']);
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
    }
  }); 
});


$('#sbmtNeighbour').click(function() {
 
  $.ajax({
    url: "libs/php/getCountryNeighbour.php",
    type: 'POST',
    dataType: 'json',
    data: {
      countryCode: $('#selCountry').val()
    },
    success: function(result) {

      console.log(result);

      if (result.status.name == "ok") {
        $('#neighbourLat').html(result['data'][0]['lat']);
        $('#neighbourLng').html(result['data'][0]['lng']);
        $('#neighbourName').html(result['data'][0]['toponymName']);
        $('#neighbourCode').html(result['data'][0]['countryCode']);
       
      
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
      
    }
  }); 
});


$('#sbmtWiki').click(function() {
 
  $.ajax({
    url: "libs/php/getNearbyWiki.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#userWikiLat').val(),
      lng: $('#userWikiLng').val()
    },
    success: function(result) {

      console.log(result);

      if (result.status.name == "ok") {
        $('#wikiSummary').html(result['data'][0]['summary']);
        $('#wikiFeature').html(result['data'][0]['feature']);
        $('#wikiLat').html(result['data'][0]['lat']);
        $('#wikiLng').html(result['data'][0]['lng']);
        $('#wikiCountryCode').html(result['data'][0]['countryCode']);
      
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
    }
  }); 
});
