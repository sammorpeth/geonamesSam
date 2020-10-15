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
        $('#resultsLat').html(result['data'][0]['lat']);
        $('#resultsLng').html(result['data'][0]['lng']);
        $('#resultsName').html(result['data'][0]['name']);
        $('#resultsLocation').html(result['data'][0]['fclName']);
        $('#resultsCountryName').html(result['data'][0]['countryName']);
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
    }
  }); 
});


$('#sbmtPostCode').click(function() {
 
  $.ajax({
    url: "libs/php/getNearbyWiki.php",
    type: 'POST',
    dataType: 'json',
    data: {
      postcode: $('#postCode').val(),
      countryCode: $('#selCountry').val()
    },
    success: function(result) {

      console.log(result);

      if (result.status.name == "ok") {
        console.log(result['data'][0]);
        $('#resultsSummary').html(result['data'][0]['summary']);
        $('#resultsFeature').html(result['data'][0]['feature']);
        $('#resultsLat').html(result['data'][0]['lat']);
        $('#resultsLng').html(result['data'][0]['lng']);
        $('#resultsCountryCode').html(result['data'][0]['countryCode']);
      
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
        $('#resultsSummary').html(result['data'][0]['summary']);
        $('#resultsFeature').html(result['data'][0]['feature']);
        $('#resultsLat').html(result['data'][0]['lat']);
        $('#resultsLng').html(result['data'][0]['lng']);
        $('#resultsCountryCode').html(result['data'][0]['countryCode']);
      
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
    }
  }); 
});
