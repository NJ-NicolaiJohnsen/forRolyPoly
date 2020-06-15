
function getStuff() {

    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat( -120.670637530612 ,35.2467277959184 )
        .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        map.getProjectionObject() // to Spherical Mercator Projection
        );

    map.setCenter (lonLat, 6);

    const baseUrl = "https://api.openbrewerydb.org/breweries?by_state=california&per_page=50&page=";
    const pages = 19;

    const getBrews = async function(url, page){
        const results = await axios.get(url + page)
            .then( res => {
                return res.data;
            })
        return results;
    }
    let breweries = [];
    for (i = 0; i < pages; i++){
        breweries.push(getBrews(baseUrl, i))
    }

    Promise.all(breweries)
        .then (r =>{
            breweries = r;
        })
        .then( () =>{
           
            for (let i =0; i< breweries.length; i++){
                
                const listOfFifty = breweries[i];
                console.log(listOfFifty)
              /*  for (let j=0; j<listOfFifty.length; j++){
                    if (listOfFifty[j].longitude !== null &&
                        listOfFifty[j].latitude !== null    
                    ){
                    console.log(listOfFifty[j].longitude)
                    console.log(listOfFifty[j].latitude)
                    }
                    
                } */
            }
        })
   

  // axios.get(baseUrl).then( res => {
    //   for (i = 0; i< 50; i++){
      //  console.log(res.data[i].longitude)
      // }
      
 //  })
   
    
    

}

getStuff();
