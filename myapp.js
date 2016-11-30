$(document).ready(function(){
    console.log(Date());
    $('.lead').text(Date());

var currencies=[
  {
    "id": "SEK",
    "description": "SEK Sweden, kronor"
    },
  {
    "id": "ATS",
    "description": "ATS Austria, shilling"
  },
  {
    "id": "AUD",
    "description": "AUD Australian, dollar"
  },
  {
    "id": "BEF",
    "description": "BEF Belgien, franc"
  },
  {
    "id": "BRL",
    "description": "BRL Brazilien, real"
  },
  {
    "id": "CAD",
    "description": "CAD Canada, dollar"
  },
  {
    "id": "CHF",
    "description": "CHF Switzerland, francs"
  },
  {
    "id": "CNY",
    "description": "CNY China, yuan renminbi"
  },
  {
    "id": "CYP",
    "description": "CYP Cyprus, pound"
  },
  {
    "id": "CZK",
    "description": "CZK Czech Republic, koruna"
  },
  {
    "id": "DEM",
    "description": "DEM Germany, mark"
  },
  {
    "id": "DKK",
    "description": "DKK Denmark, krone"
  },
  {
    "id": "EEK",
    "description": "EEK Estonian, kroon"
  },
  {
    "id": "ESP",
    "description": "ESP Spain, pesetas"
  },
  {
    "id": "EUR",
    "description": "EUR Euroland, euro"
  },
  {
    "id": "FIM",
    "description": "FIM Finland, marka"
  },
  {
    "id": "FRF",
    "description": "FRF France, franc"
  },
  {
    "id": "GBP",
    "description": "GBP Great Britain, pound"
  },
  {
    "id": "GRD",
    "description": "GRD Greece, drachmer"
  },
  {
    "id": "HKD",
    "description": "HKD Hong Kong, dollar"
  },
  {
    "id": "HUF",
    "description": "HUF Hungary, forint"
  },
  {
    "id": "IDR",
    "description": "IDR Indonesia, rupiah"
  },
  {
    "id": "IEP",
    "description": "IEP Ireland, pund"
  },
  {
    "id": "INR",
    "description": "INR India, rupee"
  },
  {
    "id": "ISK",
    "description": "ISK Iceland, kronor"
  },
  {
    "id": "ITL",
    "description": "ITL Italy, lire"
  },
  {
    "id": "JPY",
    "description": "JPY Japan, yen"
  },
  {
    "id": "KRW",
    "description": "KRW South Korea, won"
  },
  {
    "id": "KWD",
    "description": "KWD Kuwait, dinar"
  },
  {
    "id": "LTL",
    "description": "LTL Lithuania,  litas"
  },
  {
    "id": "LVL",
    "description": "LVL Latvia, lat"
  },
  {
    "id": "MAD",
    "description": "MAD Morocko, dirham"
  },
  {
    "id": "MXN",
    "description": "MXN Mexico, nuevo peso"
  },
  {
    "id": "MYR",
    "description": "MYR Malaysia, ringgit"
  },
  {
    "id": "NLG",
    "description": "NLG Dutchland, guilder"
  },
  {
    "id": "NOK",
    "description": "NOK Norway, krone"
  },
  {
    "id": "NZD",
    "description": "NZD New Zealand, dollar"
  },
  {
    "id": "PLN",
    "description": "PLN Poland, zloty"
  },
  {
    "id": "PTE",
    "description": "PTE Portugal, escudo"
  },
  {
    "id": "RUB",
    "description": "RUB Russia, rouble"
  },
  {
    "id": "SAR",
    "description": "SAR Saudi Arabia, riyal"
  },
  {
    "id": "SGD",
    "description": "SGD Singapore, dollar"
  },
  {
    "id": "SIT",
    "description": "SIT Slovenia, tolar"
  },
  {
    "id": "SKK",
    "description": "SKK Slovakia, koruna"
  },
  {
    "id": "THB",
    "description": "THB Thailand, baht"
  },
  {
    "id": "TRL",
    "description": "TRL Turkey, lira"
  },
  {
    "id": "TRY",
    "description": "TRY Turkey, new lira"
  },
  {
    "id": "USD",
    "description": "USD US, dollar"
  },
  {
    "id": "ZAR",
    "description": "ZAR South Africa, rand"
  }
];
  


    $.each(currencies, function (index, value) {
    $('#mySelectFrom').append($('<option/>', { 
        value: value.id,
        text : value.id 
    }));

    $('#mySelectTo').append($('<option/>', { 
        value: value.id,
        text : value.id 
    }));
    });


    $('#input').on('input', function() {
       var inputprice=$("#input").val(); 
      if(isNaN(inputprice)){
        $("#convert").attr("disabled", true);
        console.log('is not a number');
      }
        else if(inputprice<=0){
          $("#convert").attr("disabled", true);
        console.log('is not a number');
      
    }
      else{
        $("#convert").removeAttr("disabled");
        console.log('is number');
      }

    
    });
 $('#convert').on('click',function(){
      var inputprice=$("#input").val();
      var fromCurrency=$('#mySelectFrom').val();
      var toCurrency=$('#mySelectTo').val();
      var output;


   $.ajax({
         url: "https://currencyconverter.p.mashape.com/?from="+fromCurrency+"&from_amount="+inputprice+"&to="+toCurrency,
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'DZtFLVDn7mmshkG201aXtaHe8vUrp1uVWGNjsnfwEV6jtvhBdL');},
         success: function(data) { 
        $('#currencyOutput').text(data.to_amount+' '+toCurrency);
        console.log(data);
          }

      });


      
      

    });

  });
